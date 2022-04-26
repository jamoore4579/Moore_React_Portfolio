import React from "react";
import { Document, pdfjs } from "react-pdf"
import { 
  ResumeWrapper,
} from './Resume.elements';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export const Resume = () => {

    return (
      <ResumeWrapper>
        <Document
          file="//github.com/jamoore4579/Moore_React_Portfolio/blob/main/src/components/assets/img/JasonMoore.pdf"
        ></Document>
      </ResumeWrapper>
    )
};