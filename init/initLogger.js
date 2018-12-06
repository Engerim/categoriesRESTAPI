(function() {
    'use strict';
  
    const chalk = require('chalk'),
    winston = require('winston'),
    winstonDailyRotate = require('winston-daily-rotate-file');
    
  
    module.exports = class InitLogger {
      
      constructor() {}
  
      static getLogLevelFromEnvironment() {
        return 'info';
      }
  
      static initLogger() {
       try {
        var logger = winston.createLogger({
          level: InitLogger.getLogLevelFromEnvironment(),
          transports: [
            new (winstonDailyRotate)(
              {colorize: 'true',
              filename: 'logs/flaconi.log',
              handleExceptions: true,
              json: false,
            })
          ]
         });
         return logger;
       } catch(error) {
         throw new Error(`Failed to create logger: ${error}`);
       }  
      }
    };
  
  }());
  