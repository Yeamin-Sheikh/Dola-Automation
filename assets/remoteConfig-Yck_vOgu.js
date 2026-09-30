const localConfig = {
  "version": "1.0.5, 1.0.6, 1.0.7, 1.0.8, 1.0.9, 1.0, 1.1, 1.2",
  "hash": "pmjfhrekwfjaaeetwl23kfssseew34k2e",
  "selectors": {
    "newChat": "div[class*=\"nav-link\"]:has(path[d^=\"M12.6221 1.01074C15.6967 1.11689 18.2352 2.0152 20.0479\"])",
    "newAICreation": "div[class*=\"nav-link\"]:has(path[d^=\"M13.5845 2.00098C16.1743 2.00993 17.6012 2.08218 18.7241 2.6543C19.8529 3.22955 20.771\"])",
    "imageModeButton": "button[data-component-type=\"skill-item\"]:contains(\"Image\")",
    "videoModeButton": "button[data-component-type=\"skill-item\"]:contains(\"Video\")",
    "modelSelectButton": "button[data-slot=\"dropdown-menu-trigger\"][data-input-engine-actionbar-control-key=\"model\"], button[data-slot=\"dropdown-menu-trigger\"][data-input-engine-actionbar-control-key=\"video-model\"]",
    "modelSelectTemplate": "div[data-slot=\"dropdown-menu-item\"]:contains(\"{model}\")",
    "aspectRatioButton": "button[data-slot=\"dropdown-menu-trigger\"][data-input-engine-actionbar-control-key=\"image_creation_ratio\"], button[data-slot=\"dropdown-menu-trigger\"][data-input-engine-actionbar-control-key=\"video-ratio\"]",
    "aspectRatioTemplate": "div[data-slot=\"dropdown-menu-item\"]:contains(\"{aspectRatio}\")",
    "removeSelectedModeButton": "div[class*=\"exit-skill\"]",
    "uploadImageButton": "button:has(path[d^=\"M12.0005 2.25C12.5528 2.25 13.0005 2.69772 13.0005 3.25V10.9951H20.7505C21.3028 10.9951\"])",
    "promptTextarea": "[role=\"textbox\"], div[contenteditable=\"true\"]",
    "submitButton": "button#flow-end-msg-send",
    "loadingButton": "div:not([class*=\"!hidden\"]) > svg:has(path[d^=\"M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5\"])",
    "outputItems": "[data-message-id]:last()",
    "imagesContainer": "[data-message-id]:last() img[alt=\"image\"][loading=\"lazy\"], [data-message-id]:last() img",
    "downloadImageTooltipButton": "button:has(path[d^=\"M20.375 14.8535C20.9273 14.8535 21.375 15.3012 21.375 15.8535V18.5059C21.375 20.1627 20.0319 21.5059\"])",
    "closeDialogImage": "div[aria-describedby]:has(path[d^=\"M19.4801 4.51824C19.8706 4.90868 19.8704 5.54191 19.4801 5.93245L13.418 11.9946L19.4836 18.0603C19.8741\"]:last()",
    "videoContainer": "[data-message-id]:last() video, [data-message-id]:last() div:has(video)",
    "uploadImageProgress": "div[role=\"progressbar\"]"
  }
};

function i(t, n) {
  return true;
}

async function g() {
  return localConfig;
}

export { g, i };
