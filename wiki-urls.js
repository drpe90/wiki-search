const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=25&format=json&origin=*&srsearch=searchValue';

// list=search - perform a full text search
// srsearch="inputValue" - search for page titles or content matching  this value.
// srlimit=25 How many total pages to return.
// format=json json response
// "origin=*" fix cors errors

const page_url = 'href=https://en.wikipedia.org/?curid=${pageid}';