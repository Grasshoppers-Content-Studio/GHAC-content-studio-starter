import React, { useState } from "react";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { theme } from "../pages/_app";
import { themeValueToHex } from "../helpers/colors";

const RichText = ({ content }) => {
  const checkTypeId = (node, id) =>
    node?.data?.target?.sys?.contentType?.sys?.id === id;

  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,

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
    <div className="flex richText">
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
        .richText {
          color: ${themeValueToHex(theme.colors.content)};
        }
      `}</style>
    </div>
  );
};

export default RichText;
