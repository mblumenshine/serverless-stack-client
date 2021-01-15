const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-blumenshine",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://yg5ni5fxs1.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_wjFOFFvFB",
      APP_CLIENT_ID: "1ql2s3uhqt15uep2dhjp1atg4s",
      IDENTITY_POOL_ID: "us-east-2:51a50043-7299-47e3-8774-fa84d023c033",
    },
  };
  
  export default config;