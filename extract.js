// Get all anchor (a) elements
var anchorElements = document.querySelectorAll('a');

// Filter elements with aria-label starting with "Attachment:"
var filteredElements = Array.from(anchorElements).filter(function(element) {
    var ariaLabel = element.getAttribute('aria-label');
    return ariaLabel && ariaLabel.startsWith('Attachment:');
});

// Existing array to append to (if exists)
var existingArray = [];

// Append the new results to the existing array
existingArray = existingArray.concat(filteredElements.map(function(element) {
    return {
        'aria-label': element.getAttribute('aria-label'),
        'href': element.getAttribute('href')
    };
}));

console.log(existingArray);
