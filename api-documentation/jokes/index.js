const jokeCalls = {
  paths: {
    "/jokes": {
      get: {
        tags: ["jokes-calls"],
        description: "Get jokes",
        operationId: "getJokes",
        parameters: [],
        responses: {
          200: {
            description: "Jokes were obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Joke",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["jokes-calls"],
        description: "Create joke",
        operationId: "createJoke",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Joke",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Todo created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },
    },
  },
};
export default jokeCalls;
