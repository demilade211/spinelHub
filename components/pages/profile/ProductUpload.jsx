import React, { useState, useRef } from 'react';
import styled from "styled-components";
import AuthInput from '../../form/AuthInput';
import MySelect from '../../form/MySelect';
import MyTextArea from '../../form/MyTextArea';
import AuthButton from '../../form/AuthButton';
import MyUpload from '../../form/MyUpload';
import { uploadProduct } from "../../../services/product"

let cat = [
  { label: "Electronics", value: "Electronics" },
  { label: "Computing", value: "Computing" },
  { label: "Network Cameras", value: "Network Cameras" },
  { label: "Software", value: "Software" },
  { label: "Network Switches", value: "Network Switches" },
  { label: "Cables", value: "Cables" },
  { label: "Security Doors", value: "Security Doors" },
  { label: "Server and Storage", value: "Server and Storage" }
]

const ProductUpload = () => {

  const inputRef = useRef(null);

  const [swich, setSwich] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [snackInfo, setSnackInfo] = useState({ openSnack: false, type: "", message: "" })
  const [product, setProduct] = useState({
    name: "",
    price:"",
    inStock: "",
    description: ""
  });
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleCat = (e) => {
    setCategory(e.value);
  };

  const handleSubCat = (e) => {
    setSubCategory(e.value);
  };

  const handleFileChange = (e) => {
    // Store selected files in state
    setSelectedFiles([...selectedFiles, ...Array.from(e.target.files)]);
  };

  const handleSubmit = async () => {
    // Create FormData and append data
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('stock', product.inStock);
    formData.append('category', category);
    formData.append('subCategory', subCategory);
    formData.append('price', product.price);
    formData.append('description', product.description);

    // Append selected files to FormData
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append(`image${i + 1}`, selectedFiles[i]);
    }

    setButtonDisabled(true)
    setLoading(true)

    try {
      const response = await uploadProduct(formData)
      setLoading(false)
      setButtonDisabled(false)
      console.log(response);
      response.success ?
        setSnackInfo(prev => ({ ...prev, openSnack: true, type: "success", message: "Product Upload Successful" }))
        :
        setSnackInfo(prev => ({ ...prev, openSnack: true, type: "success", message: response.message }))
    } catch (error) {
      setLoading(false)
      setButtonDisabled(false);
      setSnackInfo(prev => ({ ...prev, openSnack: true, type: "error", message: error.response.data.message }))
    }
  };

  console.log(selectedFiles);
  return (
    <Con>
      <TabCon>
        <div className={`switch ${!swich && "active"}`} onClick={() => setSwich(false)}>
          <p>Single</p>
        </div>
        <div className={`switch ${swich && "active"}`} onClick={() => setSwich(true)}>
          <p>Bulk</p>
        </div>
      </TabCon>
      <div className='grid-con'>
        <AuthInput label="Product name" type="text" classs="first-item" onChange={handleChange} name="name" value={product.name} />
        <MySelect label="Category" options={cat} big={true} onChange={handleCat} />
        <AuthInput label="In stock" type="number" onChange={handleChange} name="inStock" value={product.inStock} />
        <MySelect label="Sub Category" options={cat} big={true} onChange={handleSubCat} isDisabled={category < 1}/>
        <AuthInput label="price" type="number" onChange={handleChange} name="price" value={product.price} />
        <MyTextArea label="Description" classs="first-item" onChange={handleChange} name="description" value={product.description} />
        <MyUpload label="Product image" classs="first-item" inputRef={inputRef} setSelectedFiles={setSelectedFiles} selectedFiles={selectedFiles} onChange={handleFileChange} />

        <div className='w-full flex justify-end first-item'>
          <div className='w-full md:w-1/4'>
            <AuthButton disabled={buttonDisabled} content={`${loading ? 'Uploading...' : 'Upload Product'}`} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </Con>
  )
}

const Con = styled.div`
  width: 100%;   
  display: flex;
  flex-direction:column;
  align-items: center;
  .grid-con{
    width: 100%;
    display: grid;
    grid-template-columns: 69% 30%;
    column-gap: 10px;
    @media (max-width: 1200px) { 
      grid-template-columns:100%; 
    } 
    .first-item{
      grid-column:1/3;
      @media (max-width: 1200px) { 
        grid-column:1/2;
    } 
    }
  }
`;

const TabCon = styled.div`
  width: 252px; 
  height: 40px; 
  border-radius: 8px;
  background: var(--grey-grey-50, #F5F5F6);
  display: flex;
  margin-top:30px;
  margin-bottom:30px;
  .switch{
    width:50%;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    p{
      color: var(--grey-700, #101113);
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
      text-transform: capitalize;
    }
  }
  .active{
    background: #DEDEE0;
  }
`;

export default ProductUpload