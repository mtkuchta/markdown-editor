import React, { useState } from 'react';
import importedData from '../assets/data/data.json';

export const DocumentsContext = React.createContext();

export const DocumentsProvider = ({ children }) => {
  const [userDocuments, setUserDocuments] = useState(importedData);
  return <DocumentsContext.Provider value={{ userDocuments }}>{children}</DocumentsContext.Provider>;
};

export default DocumentsProvider;