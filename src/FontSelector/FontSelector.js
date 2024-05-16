import { useAvailableFonts } from "@metabase/embedding-sdk-react";

import "./FontSelector.css";

export const FontSelector = () => {
  const { availableFonts: fonts, currentFont, setFont, fontFiles } = useAvailableFonts();

  console.log(fontFiles)

  return (
    <div className="FontSelector--container">
      <label className="FontSelector--label">Select a font:</label>
      <select
        value={currentFont}
        onChange={e => setFont(e.target.value)}
        className="FontSelector-button"
        style={{
          fontFamily: currentFont,
        }}
      >
        {fonts?.map(font => (
          <option value={font}>{font}</option>
        ))}
      </select>
    </div>
  );
};
