# Chess Google Docs

A Manifest V3 Chrome extension that restyles Chess.com's **Play Computer** board to resemble a Google Docs page. The popup lets you enable or disable the disguise.

## Install

1. Download or clone this repository.
2. Open `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select this repository.
5. Pin the extension if you want quick access to its toggle.

## Use

1. Open a Chess.com game against a computer and wait for the board to load.
2. Open the extension popup, check **Enabled**, and click **Save**.
3. Reload the Chess.com tab. Disable the checkbox and reload to stop applying the changes.

## Limitations

The content script is registered for every page but expects Chess.com board elements, so it is intended only for the current Play Computer layout. It removes and restyles page elements using Chess.com-specific selectors and loads replacement images from external URLs; site updates can therefore break the disguise. It does not support live human opponents.
