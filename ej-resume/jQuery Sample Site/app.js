/*

For this quiz, can you use this script, which is in the <head> of index.html,
to change the boring placeholder image to a picture of a cute puppy?

Remember, you'll need to pass a function into the jQuery object to run 
when the document is ready.

Here's a URL for a picture of a puppy: http://placepuppy.it/350/150

Good luck!

*/
// my solution, which works in DevTools but not the browser. Weird.
var firstArticleItem,articleImg;
firstArticleItem = $(".article-item").first();
articleImg = firstArticleItem.children("img");
function imgReplace() {
	var locateImg;
	locateImg = articleImg;
	$(this).attr("src","http://placekitten.com/350/150");
}
$(articleImg).each(imgReplace);
// course solution (this one does work):
$(function() {
	  $('img').attr('src', 'http://placekitten.com/350/150');
	})