import React, { useState } from 'react';
import importedData from '../assets/data/data.json';

export const DocumentsContext = React.createContext();

export const DocumentsProvider = ({ children }) => {
  const [userDocuments, setUserDocuments] = useState(importedData);
  const [currentDocument, setCurrentDocument] = useState(importedData);

  return <DocumentsContext.Provider value={{ userDocuments, currentDocument }}>{children}</DocumentsContext.Provider>;
};

export default DocumentsProvider;
