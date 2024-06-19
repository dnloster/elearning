import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import React from "react";
import "@cyntler/react-doc-viewer/dist/index.css";

const Documents = () => {
    const docs = [
        {
            uri: require("~/assets/document/bai3.docx"),
            fileType: "docx",
            fileName: "bai3.docx",
        },
    ];
    console.log(docs);
    return (
        <div className="container mx-auto pt-40 h-[calc(100vh-160px)]">
            {/* <iframe src="/document/bai3.docx" title="abc" frameborder="0"></iframe> */}
        </div>
    );
};

export default Documents;
