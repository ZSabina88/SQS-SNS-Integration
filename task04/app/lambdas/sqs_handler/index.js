exports.handler = async (event) => {
    event.Records.forEach((record) => {
      console.log("SQS Message:", record.body);
    });
    const response = {
      statusCode: 200,
      body: JSON.stringify("Hello from Lambda!"),
    };
    return response;
  };
