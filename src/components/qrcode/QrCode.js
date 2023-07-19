import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const qrCodeValue = 'https://lifechangefitnesgym.netlify.app/'; 
  const upToDate = new Date().getFullYear()
  return (
    <>
    <div className='gym-Title'>
        <h1>Life Change Fiteness </h1>
    </div>
    <div className='qrcode-value'>
      <QRCode value={qrCodeValue} />
    </div>

    {/* <!-- footer section starts  --> */}
    <div className="footer">

        <div className="box-container">

          </div>
        <div className="credit"> <span>Life Change Fiteness</span> | all rights reserved! - {upToDate}  </div>
        </div>

        

        {/* <!-- footer section ends --> */}
    </>
  );
};

export default QRCodeGenerator;
