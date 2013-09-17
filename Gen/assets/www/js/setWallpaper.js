function SetWallpaper(){
}
SetWallpaper.prototype.paste = function(url, usePhoneGap) 
{
  PhoneGap.exec(null, null, "SetWallpaper", "showWebPage", [url, usePhoneGap]);
  alert('Your wallpaper has been changed.');
};

SetWallpaper.install = function(){}
PhoneGap.addConstructor(function(){
 PhoneGap.addPlugin("setWallpaper", new SetWallpaper());
});