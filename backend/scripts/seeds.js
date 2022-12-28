//TODO: seeds script should come here, so we'll be able to put some data in our local env
let mongoose = require("mongoose");

console.log('connecting...');
mongoose.connect(process.env.MONGODB_URI);

console.log('reading schema...');
require("../models/User");
require("../models/Item");
require("../models/Comment");

console.log('preparing model...');
let User = mongoose.model("User");
let Item = mongoose.model("Item");
let Comment = mongoose.model("Comment");

console.log('running script...');

let now = Date.now();

(async() => {
    for(let i = 0; i < 100; ++i){
        let user = new User();
    
        user.username = `name${now}${i}`;
        user.email = `${now}_${i}@email.test`;
        user.setPassword(`password_${now}_${i}`);
    
        await user.save();
        console.log(user);

        let item = new Item({
            title: `title_${now}_${i}`,
            decription: `description_${now}_${i}`,
            image: ``,
            taglist: [],
        });
        item.seller = user;
        await item.save();
        console.log(item);

        var comment = new Comment({ body: `comment_${now}_${i}` });
        comment.item = item;
        comment.seller = user;
        await comment.save();
        console.log(comment);

        item.comments = item.comments.concat([comment]);
        await item.save();
    }
})().then(() => {
    mongoose.disconnect();
});