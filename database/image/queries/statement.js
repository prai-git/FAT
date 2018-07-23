module.exports.insertImage = require('./image/insert-image');
module.exports.insertEvent = require('./event/insert-event');
module.exports.insertEventPassword = require('./event/insert-event-password');

module.exports.getImageById = require('./image/get-image-by-id');
module.exports.getImageByName = require('./image/get-image-by-name');
module.exports.getImageByuuid = require('./image/get-image-by-uuid');
module.exports.getEventByID = require('./event/get-event-by-id');
module.exports.getImagesByEventId = require('./image/get-images-by-event-id');
module.exports.getEventsByUserId = require('./event/get-events-by-user-id');
module.exports.getEventPassword = require('./event/get-event-password');

module.exports.getImageCount = require('./image/get-count-images');
module.exports.getEventCount = require('./event/get-count-events');
module.exports.getAllImageCount = require('./image/get-count-all-images');
module.exports.getAllEventCount = require('./event/get-count-all-events');

module.exports.deleteImageById = require('./image/delete-image-by-id');
module.exports.deleteImageByName = require('./image/delete-image-by-name');
module.exports.deleteImagesByEventId = require('./event/delete-images-by-event-id');
module.exports.deleteImageByUuid = require('./image/delete-image-by-uuid');
module.exports.deleteEventById = require('./event/delete-event-by-id');
module.exports.deleteEventPassword = require('./event/delete-event-password');


module.exports.updateImage = require('./image/update-image');
module.exports.updateEvent = require('./event/update-event');
module.exports.updateImagesByEventId = require('./event/update-images-by-event-id');
module.exports.updateEeventPassword = require('./event/update-event-password');

module.exports.validateEventPassword = require('./event/validate-event-password');
