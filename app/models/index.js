const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: 0,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Admin = require("./Admin.js")(sequelize, Sequelize);
db.AdvertiseOwner = require("./AdvertiseOwner.js")(sequelize, Sequelize);
db.Marketer = require("./Marketer.js")(sequelize, Sequelize);
db.Document = require("./Document.js")(sequelize, Sequelize);
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
db.SMSPanelMarketer = require("./SMSPanelMarketer.js")(sequelize, Sequelize);
db.SMSPanelPhoneNumber = require("./SMSPanelPhoneNumber.js")(sequelize, Sequelize);
db.BuyLinkMarketer = require("./BuyLinkMarketer.js")(sequelize, Sequelize);
db.BuyLinkUserData = require("./BuyLinkUserData.js")(sequelize, Sequelize);


db.LinkCampaign = require("./LinkCampaign.js")(sequelize, Sequelize);
db.ShareLinkMarketer = require("./ShareLinkMarketer.js")(sequelize, Sequelize);
db.ShareLinkUserDate = require("./ShareLinkUserDate.js")(sequelize, Sequelize);
db.IntroducerCodeMarketer = require("./IntroducerCodeMarketer.js")(sequelize, Sequelize);
db.IntroducerCodeUserData = require("./IntroducerCodeUserData.js")(sequelize, Sequelize);


db.DiscountCodeCampaign = require("./DiscountCodeCampaign.js")(sequelize, Sequelize);
db.DiscountCodeMarketer = require("./DiscountCodeMarketer.js")(sequelize, Sequelize);
db.DiscountCodeUserDate = require("./DiscountCodeUserDate.js")(sequelize, Sequelize);


//Relations


//Marketer and parent
db.Marketer.hasMany(db.Marketer, {foreignKey: 'parentMarketerId'});
//Marketer and MarketerLevel
db.MarketerLevel.hasMany(db.Marketer);
db.Marketer.belongsTo(db.MarketerLevel);
//Document and AdvertiseOwner
db.AdvertiseOwner.hasMany(db.Document, {
    foreignKey: 'userId',
    constraints: false,
    scope: {
        role: 'AdvertiseOwner'
    }
});
db.Document.belongsTo(db.AdvertiseOwner, {foreignKey: 'userId', constraints: false});
//Document and Marketer
db.Marketer.hasMany(db.Document, {
    foreignKey: 'userId',
    constraints: false,
    scope: {
        role: 'Marketer'
    }
});
db.Document.belongsTo(db.Marketer, {foreignKey: 'userId', constraints: false});


//Marketer and SocialMedia
db.Marketer.hasMany(db.SocialMedia);
db.SocialMedia.belongsTo(db.Marketer);
//MarketerLevel and SMSPanelMarketerLevel
db.MarketerLevel.hasMany(db.SMSPanelMarketerLevel);
db.SMSPanelMarketerLevel.belongsTo(db.MarketerLevel);
//MarketerLevel and BuyLinkMarketerLevel
db.MarketerLevel.hasMany(db.BuyLinkMarketerLevel);
db.BuyLinkMarketerLevel.belongsTo(db.MarketerLevel);
//MarketerLevel and ShareLinkMarketerLevel
db.MarketerLevel.hasMany(db.ShareLinkMarketerLevel);
db.ShareLinkMarketerLevel.belongsTo(db.MarketerLevel);
//MarketerLevel and IntroducerCodeMarketerLevel
db.MarketerLevel.hasMany(db.IntroducerCodeMarketerLevel);
db.IntroducerCodeMarketerLevel.belongsTo(db.MarketerLevel);
//MarketerLevel and DiscountCodeMarketerLevel
db.MarketerLevel.hasMany(db.DiscountCodeMarketerLevel);
db.DiscountCodeMarketerLevel.belongsTo(db.MarketerLevel);
//Product and ProductAttribute
db.Product.hasMany(db.ProductAttribute);
db.ProductAttribute.belongsTo(db.Product);
//Product and Image
db.Product.hasMany(db.Image, {
    foreignKey: 'modelId',
    constraints: false,
    scope: {
        model: 'Product'
    }
});
db.Image.belongsTo(db.Product, {foreignKey: 'modelId', constraints: false});
//ProductCampaign and Image
db.ProductCampaign.hasMany(db.Image, {
    foreignKey: 'modelId',
    constraints: false,
    scope: {
        model: 'ProductCampaign'
    }
});
db.Image.belongsTo(db.ProductCampaign, {foreignKey: 'modelId', constraints: false});
//LinkCampaign and Image
db.LinkCampaign.hasMany(db.Image, {
    foreignKey: 'modelId',
    constraints: false,
    scope: {
        model: 'LinkCampaign'
    }
});
db.Image.belongsTo(db.LinkCampaign, {foreignKey: 'modelId', constraints: false});
//DiscountCodeCampaign and Image
db.DiscountCodeCampaign.hasMany(db.Image, {
    foreignKey: 'modelId',
    constraints: false,
    scope: {
        model: 'DiscountCodeCampaign'
    }
});
db.Image.belongsTo(db.DiscountCodeCampaign, {foreignKey: 'modelId', constraints: false});


//Product and Product
db.AdvertiseOwner.hasMany(db.Product);
db.Product.belongsTo(db.AdvertiseOwner);
//ProductCampaign and MarketerLevel
db.AdvertiseOwner.hasMany(db.Link);
db.Link.belongsTo(db.AdvertiseOwner);


//ProductCampaign::

//ProductCampaign and AdvertiseOwner
db.AdvertiseOwner.hasMany(db.ProductCampaign);
db.ProductCampaign.belongsTo(db.AdvertiseOwner);
//ProductCampaign and Product
db.Product.hasMany(db.ProductCampaign);
db.ProductCampaign.belongsTo(db.Product);
//ProductCampaign and MarketerLevel
db.MarketerLevel.hasMany(db.ProductCampaign);
db.ProductCampaign.belongsTo(db.MarketerLevel);

//SMSPanelMarketer and ProductCampaign
db.ProductCampaign.hasMany(db.SMSPanelMarketer);
db.SMSPanelMarketer.belongsTo(db.ProductCampaign);
//SMSPanelMarketer and Marketer
db.Marketer.hasMany(db.SMSPanelMarketer);
db.SMSPanelMarketer.belongsTo(db.Marketer);
//SMSPanelPhoneNumber and ProductCampaign
db.ProductCampaign.hasMany(db.SMSPanelPhoneNumber);
db.SMSPanelPhoneNumber.belongsTo(db.ProductCampaign);
//SMSPanelPhoneNumber and SMSPanelMarketer
db.SMSPanelMarketer.hasMany(db.SMSPanelPhoneNumber);
db.SMSPanelPhoneNumber.belongsTo(db.SMSPanelMarketer);

//BuyLinkMarketer and ProductCampaign
db.ProductCampaign.hasMany(db.BuyLinkMarketer);
db.BuyLinkMarketer.belongsTo(db.ProductCampaign);
//BuyLinkMarketer and Marketer
db.Marketer.hasMany(db.BuyLinkMarketer);
db.BuyLinkMarketer.belongsTo(db.Marketer);
//BuyLinkUserData and ProductCampaign
db.ProductCampaign.hasMany(db.BuyLinkUserData);
db.BuyLinkUserData.belongsTo(db.ProductCampaign);
//BuyLinkUserData and BuyLinkMarketer
db.BuyLinkMarketer.hasMany(db.BuyLinkUserData);
db.BuyLinkUserData.belongsTo(db.BuyLinkMarketer);


//LinkCampaign::

//LinkCampaign and AdvertiseOwner
db.AdvertiseOwner.hasMany(db.LinkCampaign);
db.LinkCampaign.belongsTo(db.AdvertiseOwner);
//LinkCampaign and Link
db.Link.hasMany(db.LinkCampaign);
db.LinkCampaign.belongsTo(db.Link);
//LinkCampaign and MarketerLevel
db.MarketerLevel.hasMany(db.LinkCampaign);
db.LinkCampaign.belongsTo(db.MarketerLevel);

//ShareLinkMarketer and LinkCampaign
db.LinkCampaign.hasMany(db.ShareLinkMarketer);
db.ShareLinkMarketer.belongsTo(db.LinkCampaign);
//ShareLinkMarketer and Marketer
db.Marketer.hasMany(db.ShareLinkMarketer);
db.ShareLinkMarketer.belongsTo(db.Marketer);
//ShareLinkUserDate and LinkCampaign
db.LinkCampaign.hasMany(db.ShareLinkUserDate);
db.ShareLinkUserDate.belongsTo(db.LinkCampaign);
//ShareLinkUserDate and ShareLinkMarketer
db.ShareLinkMarketer.hasMany(db.ShareLinkUserDate);
db.ShareLinkUserDate.belongsTo(db.ShareLinkMarketer);

//IntroducerCodeMarketer and LinkCampaign
db.LinkCampaign.hasMany(db.IntroducerCodeMarketer);
db.IntroducerCodeMarketer.belongsTo(db.LinkCampaign);
//IntroducerCodeMarketer and Marketer
db.Marketer.hasMany(db.IntroducerCodeMarketer);
db.IntroducerCodeMarketer.belongsTo(db.Marketer);
//IntroducerCodeUserData and LinkCampaign
db.LinkCampaign.hasMany(db.IntroducerCodeUserData);
db.IntroducerCodeUserData.belongsTo(db.LinkCampaign);
//IntroducerCodeUserData and IntroducerCodeMarketer
db.IntroducerCodeMarketer.hasMany(db.IntroducerCodeUserData);
db.IntroducerCodeUserData.belongsTo(db.IntroducerCodeMarketer);


//DiscountCodeCampaign::

//DiscountCodeCampaign and AdvertiseOwner
db.AdvertiseOwner.hasMany(db.DiscountCodeCampaign);
db.DiscountCodeCampaign.belongsTo(db.AdvertiseOwner);
//DiscountCodeCampaign and MarketerLevel
db.MarketerLevel.hasMany(db.DiscountCodeCampaign);
db.DiscountCodeCampaign.belongsTo(db.MarketerLevel);

//DiscountCodeMarketer and DiscountCodeCampaign
db.DiscountCodeCampaign.hasMany(db.DiscountCodeMarketer);
db.DiscountCodeMarketer.belongsTo(db.DiscountCodeCampaign);
//DiscountCodeMarketer and Marketer
db.Marketer.hasMany(db.DiscountCodeMarketer);
db.DiscountCodeMarketer.belongsTo(db.Marketer);
//DiscountCodeUserDate and DiscountCodeCampaign
db.DiscountCodeCampaign.hasMany(db.DiscountCodeUserDate);
db.DiscountCodeUserDate.belongsTo(db.DiscountCodeCampaign);
//DiscountCodeUserDate and DiscountCodeMarketer
db.DiscountCodeMarketer.hasMany(db.DiscountCodeUserDate);
db.DiscountCodeUserDate.belongsTo(db.DiscountCodeMarketer);


db
    .sequelize
    .sync({
        force: false,// TODO :: remove in production
        logging: false
    })
    .then(() => {
        console.log("Successfully connected to database");
    })
    .catch(err => {
        console.log("Database Error :", err.message)
    });

module.exports = db;