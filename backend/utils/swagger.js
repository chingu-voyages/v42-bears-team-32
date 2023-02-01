import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";



const options = {
  swaggerDefinition: {
    info: {
      title: 'My API',
      version: "1.0.0",
      description: 'API documentation for my Express app',
    },
    components: {} 
  },
  apis: ['./routes/*.js', './models/*.js' ],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  // Swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get("/docs.json", (req,  res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  
}

export default swaggerDocs;