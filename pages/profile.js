import React, { useContext, useState, useRef, useEffect } from 'react'
import AppLayout from '../layouts/AppLayout';
import Quicklinks from '../components/Quicklinks';
import styled from "styled-components";
import AccountInfo from "../components/pages/profile/AccountInfo"
import ChangePass from "../components/pages/profile/ChangePass"
import Adress from "../components/pages/profile/Adress"
import ProductUpload from "../components/pages/profile/ProductUpload"
import { BlueTab, BlueTabs } from "../utils/CustomStyles"
import Stats from '../components/pages/profile/Stats';

const profile = () => {

    const [value, setValue] = React.useState(1);
    const [htabs, setHtabs] = React.useState({
        accInfo: false,
        changePass: false,
        address: false,
        stats:false,
        upload: false
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AppLayout>
            <QuickLinkCon>
                <Quicklinks next="My Account" />
            </QuickLinkCon>
            <Con>
                <div className='inner'>
                    <BlueTabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Post Type"
                        variant="scrollable"
                        allowScrollButtonsMobile
                    >
                        <BlueTab value={1} label="Account Information" />
                        <BlueTab value={2} label="Change password" />
                        {/* <BlueTab value={3} label="Address book enteries" /> */}
                        <BlueTab value={4} label="Stats" />
                        <BlueTab value={5} label="Product upload" />
                    </BlueTabs>
                    <div className='tab-items mt-10'>
                        {value === 1 && <AccountInfo />}
                        {value === 2 && <ChangePass />}
                        {value === 3 && <Adress />}
                        {value === 4 && <Stats />}
                        {value === 5 && <ProductUpload />}
                    </div>
                </div>
                <div className='inner-mob'>
                    <AgreeDrop>
                        <div className={`cover `} onClick={() => { setHtabs((prev) => ({ ...prev, accInfo: !prev.accInfo })) }}>
                            <h2>Account Information</h2>
                            <div>{htabs.accInfo ?
                                <img src="/images/pages/profile/up.svg" alt="img" />
                                :
                                <img src="/images/pages/profile/down.svg" alt="img" />}</div>
                        </div>
                        {htabs.accInfo && <AccountInfo />}
                    </AgreeDrop>
                    <AgreeDrop>
                        <div className={`cover `} onClick={() => { setHtabs((prev) => ({ ...prev, changePass: !prev.changePass })) }}>
                            <h2>Change password</h2>
                            <div>{htabs.changePass ?
                                <img src="/images/pages/profile/up.svg" alt="img" />
                                :
                                <img src="/images/pages/profile/down.svg" alt="img" />}</div>
                        </div>
                        {htabs.changePass && <ChangePass />}
                    </AgreeDrop>
                    <AgreeDrop>
                        <div className={`cover `} onClick={() => { setHtabs((prev) => ({ ...prev, address: !prev.address })) }}>
                            <h2>Address book enteries</h2>
                            <div>{htabs.address ?
                                <img src="/images/pages/profile/up.svg" alt="img" />
                                :
                                <img src="/images/pages/profile/down.svg" alt="img" />}</div>
                        </div>
                        {htabs.address && <Adress />}
                    </AgreeDrop>
                    <AgreeDrop>
                        <div className={`cover `} onClick={() => { setHtabs((prev) => ({ ...prev, stats: !prev.stats })) }}>
                            <h2>Statistics</h2>
                            <div>{htabs.stats ?
                                <img src="/images/pages/profile/up.svg" alt="img" />
                                :
                                <img src="/images/pages/profile/down.svg" alt="img" />}</div>
                        </div>
                        {htabs.stats && <Stats />}
                    </AgreeDrop>
                    <AgreeDrop>
                        <div className={`cover `} onClick={() => { setHtabs((prev) => ({ ...prev, upload: !prev.upload })) }}>
                            <h2>Products upload</h2>
                            <div>{htabs.upload ?
                                <img src="/images/pages/profile/up.svg" alt="img" />
                                :
                                <img src="/images/pages/profile/down.svg" alt="img" />}</div>
                        </div>
                        {htabs.upload && <ProductUpload />}
                    </AgreeDrop>
                </div>
            </Con>
        </AppLayout>
    )
}

const Con = styled.div`
    width: 100%; 
    padding: 24px 120px 40px 120px;  
    display: flex;
    justify-content: center;
    @media (max-width: 1200px) { 
        padding: 24px;
    }  
    .inner{
        width:77%;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (max-width: 1200px) { 
            width:100%; 
        }
        @media (max-width: 500px) { 
            display:none;
        }
        .tab-items{
            width:100%; 
        }
    }
    .inner-mob{
        width:100%; 
        display:none;
        @media (max-width: 500px) { 
            display:block;
        }
    }
    
`;

const QuickLinkCon = styled.div`
    width: 100%; 
    height: 56px;
    padding: 16px 120px;
    margin-top: 98px; 
    background: var(--off-white, #FCFCFC);
    margin-bottom:30px;
    @media (max-width: 1200px) { 
        padding: 24px;
    }
`;

const AgreeDrop = styled.div`
    width:100%;   
    padding: 12px 8px;
    border-radius: 8px;
    background: var(--grey-grey-50, #F5F5F6);
    margin-bottom:30px;
    .cover{
        width:100%;  
        height: 52px;
        display:flex;
        justify-content:space-between; 
        align-items:center; 
        cursor:pointer; 
        h2{
            color: var(--grey-700, #101113); 
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 24px */
        }
    }
    .cover-disabled{
        background: #E0E2E7;
    }
    .space{
        margin-top:20px;
        margin-bottom:20px;
    }
    .sub-text{
        font-family: 'Euclid Circular A';
        font-style: normal;
        font-weight: 400;
        font-size: 14px; 
        color: #667085;
        margin-top:20px;
        margin-bottom:20px;
    }
`;

export default profile