exports.handler = async (event) => {
    event.Records.forEach((record) => {
      const snsMessage = record.Sns.Message;
      console.log("SNS Message:", snsMessage);
    });
    const response = {
      statusCode: 200,
      body: JSON.stringify("Hello from Lambda!"),
    };
    return response;
  };
