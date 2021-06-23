import DiscordBot from '@structures/bot';
import logger from '@lib/logger';
import connectDB from '@database';

connectDB()
  .then((sequelize) => sequelize.sync())
  .then(() => {
    logger.info('Connetion to database successful!');
    const client = new DiscordBot();
    client.start().catch(({ message, stack }) =>
      logger.error(
        `An error occured. ${message as string} 
      \nStack: ${stack as string}`
      )
    );
  })
  .catch(({ message, stack }) => {
    logger.error(
      `Unable to connet to database. ${message as string}. ${stack as string}`
    );
  });
