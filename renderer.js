// renderer.js

// Function to update the UI with the list of XML files
function updateXmlFilesList(xmlFiles) {
    const xmlFilesList = document.getElementById('xmlFilesList');
    xmlFilesList.innerHTML = ''; // Clear previous content
    xmlFiles.forEach((file) => {
        const listItem = document.createElement('li');
        listItem.textContent = file;
        xmlFilesList.appendChild(listItem);
    });
}

// Event listener for the "Select Folder" button click
async function selectFolder() {
    try {
        const folderPath = await window.electron.selectFolder();
        const xmlFiles = await window.electron.getXmlFiles(folderPath);
        updateXmlFilesList(xmlFiles);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Attach selectFolder function to the button click event
document.getElementById('selectFolderButton').addEventListener('click', selectFolder);
