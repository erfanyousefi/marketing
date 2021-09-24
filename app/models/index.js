const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Admin = require("./Admin.js")(sequelize, Sequelize);
db.AdvertiseOwner = require("./AdvertiseOwner.js")(sequelize, Sequelize);
db.Marketer = require("./Marketer.js")(sequelize, Sequelize);
db.Document = require("./Document.js")(sequelize, Sequelize);
db.Ticket = require("./Ticket.js")(sequelize, Sequelize);
db.TicketMessage = require("./TicketMessage.js")(sequelize, Sequelize);
db.SocialMedia = require("./SocialMedia.js")(sequelize, Sequelize);
db.MarketerLevel = require("./MarketerLevel.js")(sequelize, Sequelize);
db.SMSPanelMarketerLevel = require("./SMSPanelMarketerLevel.js")(sequelize, Sequelize);
db.BuyLinkMarketerLevel = require("./BuyLinkMarketerLevel.js")(sequelize, Sequelize);
db.ShareLinkMarketerLevel = require("./ShareLinkMarketerLevel.js")(sequelize, Sequelize);
db.IntroducerCodeMarketerLevel = require("./IntroducerCodeMarketerLevel.js")(sequelize, Sequelize);
db.DiscountCodeMarketerLevel = require("./DiscountCodeMarketerLevel.js")(sequelize, Sequelize);
db.Image = require("./Image.js")(sequelize, Sequelize);
db.SiteInfo = require("./SiteInfo.js")(sequelize, Sequelize);
db.Product = require("./Product.js")(sequelize, Sequelize);
db.ProductAttribute = require("./ProductAttribute.js")(sequelize, Sequelize);
db.Link = require("./Link.js")(sequelize, Sequelize);

db.ProductCampaign = require("./ProductCampaign.js")(sequelize, Sequelize);
db.LinkCampaign = require("./LinkCampaign.js")(sequelize, Sequelize);
db.DiscountCodeCampaign = require("./DiscountCodeCampaign.js")(sequelize, Sequelize);


//Relations

//AdvertiseOwner and admin

//Marketer and admin

//Marketer and parent

//Marketer and level

//AdvertiseOwner and Document

//Marketer and Document

//AdvertiseOwner and Ticket

//Marketer and Ticket

//Admin and TicketMessage

//AdvertiseOwner and TicketMessage

//Marketer and TicketMessage

//Marketer and SocialMedia

//Marketer and MarketerLevel

//MarketerLevel and SMSPanelMarketerLevel

//MarketerLevel and BuyLinkMarketerLevel

//MarketerLevel and ShareLinkMarketerLevel

//MarketerLevel and IntroducerCodeMarketerLevel

//MarketerLevel and DiscountCodeMarketerLevel

//Product and Image

//Product and Image

//ProductCampaign and Image

//LinkCampaign and Image

//DiscountCodeCampaign and Image


module.exports = db;