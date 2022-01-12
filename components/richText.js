import React, { useState } from "react";
import theme from "../../../styles/theme";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
// import {invertColor} from '../services/colors';

const RichText = ({ content }) => {
  const checkTypeId = (node, id) =>
    node?.data?.target?.sys?.contentType?.sys?.id === id;

  const inputStyle = () => (
    <style jsx>{`
      .input {
        width: 100%;
        border: 1px solid lightgrey;
        padding: 10px;
        border-radius: 4px;
      }
    `}</style>
  );

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        // Custom code for entries
      },

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const fields = node?.data?.target?.fields;
        // Custom code for assets

        if (fields && fields.file) {
          return (
            <img
              src={`https://${fields.file.url}`}
              width="100%"
              alt={fields.description}
            />
          );
        }

        return <div>Component not loaded (!)</div>;
      },
    },
  };

  return (
    <div className="flex">
      {renderRichText(content, renderOptions)}

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid lightgrey;
          padding: 10px;
          border-radius: 4px;
        }
        .flex {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default RichText;
