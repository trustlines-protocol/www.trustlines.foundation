import React from "react";
function AddressDisplay(props) {
  return (
    <div>
      <form>
        <div className="flex flex-row">
          <div className="flex-1">
            <div className="flex flex-row items-center w-full rounded-full bg-grey-lighter text-rich-black-ligther h-12 my-4">
              <input
                className="bg-grey-lighter ml-2 px-2 w-full rounded-full placeholder-rich-black-lightest text-center"
                autoComplete="off"
                spellCheck="false"
                type="text"
                value={props.address}
                readOnly
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddressDisplay;
