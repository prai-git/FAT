module.exports.getEmailParam = (fileName, toEmail) => {
    // send to list
    var to = [toEmail]

    // this must relate to a verified SES account
    // hello
    var from = 'phototainment360@gmail.com';
    fileName = fileName.replace("https://phototainment-userfiles-mobilehub-1424088883.s3.amazonaws.com/upload/", '')
  //  fileName = fileName.replace("upload/", '')

//var link = "https://phototainment-userfiles-mobilehub-1424088883.s3.amazonaws.com/" + fileName;
  
    var baseUrl = 'https://s3.amazonaws.com/media.phototainment360.com/';

    if(fileName.lastIndexOf('.com') > 0){
        baseUrl = '';
    }
    var link =  baseUrl + fileName;

   var filePath = fileName;
    if(fileName.lastIndexOf('.com') > 0){
       var index = fileName.lastIndexOf('.com') + 5;
        filePath = filePath.substring(index);
    }

    var viewLink = "https://s3.amazonaws.com/media.phototainment360.com/app/share.html?path=" + filePath;

    var messageFormat = '</div><span><div><span><br></span></div>Hi,</span><br><br><span>One photo shared with you via Phototainment360. You can download the image from below link-</span><br><span style="color:rgb(34,34,34);font-size:14px">&nbsp;</span><a href="LINK" style="font-size:14px" target="_blank">LINK</a><br><br><span>You can see the immersive 360 degree view by clicking on this link-</span><br><a href="VIEW" target="_blank">VIEW</a><br><br><span>Enjoy life in 360 degree :)</span><br><a href="http://www.phototainment360.com/" target="_blank">www.phototainment360.com</a><br></div>';

    messageFormat = messageFormat.replace(/LINK/g, link);
    messageFormat = messageFormat.replace(/VIEW/g, viewLink);

    return {
        Source: from,
        Destination: { ToAddresses: to },
        Message: {
            Subject: {
                Charset: "UTF-8",
                Data: "Phototainment360 Pix"
            },
            Body: {
                Text: {

                    Charset: "UTF-8",
                    Data: 'Hi,',
                }
            },
            Body: {
                Html: {

                    Charset: "UTF-8",
                    Data: messageFormat
                }
            }
        }
    };
};

module.exports.getEmailParam2 = (emailParams) => {
    // send to list
    var to = [emailParams.to]

    // this must relate to a verified SES account
    // hello
    var from = 'phototainment360@gmail.com';
    var subject = emailParams.subject;
    var text = emailParams.content;
    var messageFormat = '</div><span><div><span><br></span></div></span><br><br><span>'+ text +
    '</span><br><span style="color:rgb(34,34,34);font-size:14px">&nbsp;</span><br><br><span></span><br><br><br><span>Enjoy life in 360 degree :)</span><br><a href="http://www.phototainment360.com/" target="_blank">www.phototainment360.com</a><br></div>';
    
    return {
        Source: from,
        Destination: { ToAddresses: to },
        Message: {
            Subject: {
                Charset: "UTF-8",
                Data: subject
            },
            Body: {
                Text: {

                    Charset: "UTF-8",
                    Data: 'Hi,',
                }
            },
            Body: {
                Html: {

                    Charset: "UTF-8",
                    Data: messageFormat
                }
            }
        }
    };
};


module.exports.getMessage = (fileName, to) => {

    console.log(fileName, to);
    var from = 'phototainment360@gmail.com';
    fileName = fileName.replace("https://phototainment-userfiles-mobilehub-1424088883.s3.amazonaws.com/uploads/", '')
    fileName = fileName.replace("uploads/", '')

    var link = "https://phototainment-userfiles-mobilehub-1424088883.s3.amazonaws.com/uploads/" + fileName;
    var viewLink = "https://s3.amazonaws.com/phototainment-userfiles-mobilehub-1424088883/app/share.html?path=" + fileName;
    var messageFormat = '</div><span><div><span><br></span></div>Hi,</span><br><br><span>One photo shared with you via Phototainment360. You can download the image from below link-</span><br><span style="color:rgb(34,34,34);font-size:14px">&nbsp;</span><a href="LINK" style="font-size:14px" target="_blank">LINK</a><br><br><span>You can see the immersive 360 degree view by clicking on this link-</span><br><a href="VIEW" target="_blank">VIEW</a><br><br><span>Enjoy life in 360 degree :)</span><br><a href="http://www.phototainment360.com/" target="_blank">www.phototainment360.com</a><br></div>';


    //  messageFormat = messageFormat.replace(/LINK/g, link);
    messageFormat = "Photo from PT360: " + viewLink;
    console.log({ text: messageFormat, topic: "Photo from PT360: ", number: to });
    return { text: messageFormat, topic: "Photo from PT360: ", number: to };
};