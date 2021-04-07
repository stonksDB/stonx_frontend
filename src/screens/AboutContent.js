const ideaSection = `
# The Idea

The four most dangerous words in investing are *"This time it's
different"*. From John Templeton's caution, we created StonX, a web
application to easily access the world of trading.

For all the people who don't want endless tables, cluttered
information and terrible User Experiences, StonX provides all the
necessary information to be up-to-date with the latest market
trends, with a fresh and intuitive Interface. No more compromising
between data completeness and ease of use: our platform contains
every information for your friendly neighbourhood trader, with a
modern and clean design.

StonX isn't just different: **StonX is better**.
`;

const technologiesData = `
# Technologies

## Data

### Data Retrieval

The stock market generates massive amount of data, from the date of the last split to the telephone number
of a certain company, and different APIs make this information available. Despite having great availability, quality and
consistency, the data isn't always preserved by every access point. Therefore, to guarantee a high-end service,
we spent quite a long time doing an in-depth analysis of the existent APIs, to find the most reliable one.

To retrieve data, we use both Yahoo Finance and Finnhub. The [Yahoo Finance API](https://pypi.org/project/yfinance/ ) is used to retrieve most
of the information about stocks and companies. It provides data both about the current and
past values of a security and about the market news related to it. [Finnhub](https://finnhub.io) has been mainly used to
retrieve a complete list of all the securities traded in the most relevant markets.

### Data Maintenance

To keep the stored information up to date, a python script periodically interacts with the above-mentioned APIs.
It retrieves data for all the companies and updates it in the Database whenever a change is detected.

### Data Storage

Companies and stocks data are kept in a PostgreSQL database. Even though the schema is very simple and straightforward,
the database has been structured to support both data analysis and predicting search techniques.

A remark should be done to better clarify how data about the past values is managed within the application.
The amount of memory needed to store past values for all securities accessible through the application would be enormous, therefore,
to save memory space, we decided to store in the database only the current price for each security. Whenever the
full history of values is needed for a certain security, a request to Yahoo Finance API is done. Before adopting this
memory-saving design, some tests have been conducted to verify whether good user experience is still preserved
even with a request forwarding approach, and it seemed to be the case.
`;

const technologiesBackend = `
## Back-End

The backend is implemented with [NodeJS](https://nodejs.org/en), the well-known JavaScript runtime environment.
Following libraries were used:

- [Express.JS 4](https://expressjs.com) to handle API request and create the adequate endpoint routes.
- [Sequelize 6](https://sequelize.org/master) to make the server a real MVC architecture,
  implementing the business logic for the data. The ORM framework allows both to model JavaScript objects
  and automatically perform CRUD operations on top of the previously defined models.
- [Pg 8](https://www.npmjs.com/package/pg") to connect to the PostgreSQL database.
    Since we aim at handling a high number of requests per second it was fundamental for us to make some speedups,
    thus we leveraged the power of the "pool" connections offered by “pg”
    `;

const technologiesFrontend = `
## Front-End

The frontend implementation is based on [React](https://reactjs.org/), a popular framework created by Facebook.
It allows writing so-called "components" that can be reused in different pages and even shared with different developers.

We strive to build an interface that is intuitive, essential, and easy to use. For this reason, Material Design was
immediately chosen as the reference design in our application. We started by designing detailed
mockups of each page using [Figma](https://www.figma.com), which have then been implemented
using [Material UI](https://www.material-ui.com), together with [Nivo](https://nivo.rocks) for the
chart representations. This allowed to fulfil all the aforementioned objectives in a fast and productive way.
`;

const futureSection = `
# Future Implementations

Lot of ideas and proposals are flooding around, and we would like to develop some of them in the future.
Our priority anyhow is to develop a portfolio management system, in which a user can keep track of
his/her investments and have an overview of the gains or losses. Another point to which we aim is to be able
to provide different type of assets: from crypto to bonds and securities. To achieve this, we must perform
some changes to the database to abstract the concept away from just stocks.

If we still have time our goal is to build the FIRST EVER IN THE WORLD peer stock exchange open 24/7.
The idea is to give all our members the opportunity to sell their assets (potentially bought from another
market) to other registered users, through a peer market exchange. A feature that we would like to try out
is the microservices. Our target is to transform our monolithic architecture into microservices which is
used by most of the biggest companies now a days.

`;

const AboutSections = {};
AboutSections.idea = ideaSection;
AboutSections.technologiesData = technologiesData;
AboutSections.technologiesFrontend = technologiesFrontend;
AboutSections.technologiesBackend = technologiesBackend;
AboutSections.future = futureSection;

export default AboutSections;
