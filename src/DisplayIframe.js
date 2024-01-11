export function displayIframe(width, height, impression)
{
  var iframe = document.createElement('iframe');
  iframe.scrolling = "no";
  iframe.frameBorder = "0";
  iframe.height = height;
  iframe.width = width;
  document.querySelector('iframe').replaceWith(iframe);
  var iframeDoc = iframe.contentDocument;
  iframeDoc.write(impression);
  iframeDoc.close();
}