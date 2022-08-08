
  module.exports = {
    "development": {
      "username": "sales_manager_dbuser",
        "password": "classJackson()",
          "database": "sales_manager_db",
            "host": "127.0.0.1",
              "dialect": "postgres",
                "port": 5432
    },
    "test": {
      "username": "root",
        "password": null,
          "database": "database_test",
            "host": "127.0.0.1",
              "dialect": "postgres"
    },
    "production": {
      "username": "root",
        "password": null,
          "database": "database_production",
            "host": "127.0.0.1",
              "dialect": "postgres"
    }
}

