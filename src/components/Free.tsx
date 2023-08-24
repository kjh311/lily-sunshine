import EmailCapture from './EmailCapture'

function Free() {

    const handleEmailSubmit = (email: string) => {
        // Connect to your email capture tool or perform any other necessary actions here
        console.log('Email submitted to the email capture tool:', email);
        // You can make an API request to your email capture tool here if needed
      };

    return ( 
        <>
        <br/>
        <br/>
        <br/>
        <EmailCapture onSubmit={handleEmailSubmit} />
        </>
     );
}

export default Free;