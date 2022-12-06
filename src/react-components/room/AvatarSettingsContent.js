import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, AcceptButton } from "../input/Button";
import styles from "./AvatarSettingsContent.scss";
import { TextInputField } from "../input/TextInputField";
import { Column } from "../layout/Column";
import { FormattedMessage } from "react-intl";

export function AvatarSettingsContent({
  displayName,
  displayNameInputRef,
  disableDisplayNameInput,
  onChangeDisplayName,
  avatarPreview,
  displayNamePattern,
  onChangeAvatar,
  ...rest
}) {
  const isEmbedded = JSON.parse(sessionStorage.getItem("___hubs_is_embedded")); // READYPLAYERME
  const readyPlayerMeName = JSON.parse(localStorage.getItem("___hubs_store")).profile.displayName; // READYPLAYERME
  const [isLoading, setIsLoading] = useState(true); // READYPLAYERME
  setTimeout(() => {
    // READYPLAYERME
    setIsLoading(false);
  }, 5000);

  return (
    <Column as="form" className={styles.content} {...rest}>
      <TextInputField
        disabled={disableDisplayNameInput}
        label={<FormattedMessage id="avatar-settings-content.display-name-label" defaultMessage="Display Name" />}
        // value={displayName} // READYPLAYERME - commented out
        value={isEmbedded ? readyPlayerMeName : displayName} // READYPLAYERME
        pattern={displayNamePattern}
        spellCheck="false"
        required
        onChange={onChangeDisplayName}
        description={
          <FormattedMessage
            id="avatar-settings-content.display-name-description"
            defaultMessage="Alphanumerics, hyphens, underscores, and tildes. At least 3 characters, no more than 32"
          />
        }
        ref={displayNameInputRef}
      />
      <div className={styles.avatarPreviewContainer}>
        {avatarPreview || <div />}
        {!isEmbedded && ( // READYPLAYERME
          <Button type="button" preset="basic" onClick={onChangeAvatar}>
            <FormattedMessage id="avatar-settings-content.change-avatar-button" defaultMessage="Change Avatar" />
          </Button>
        )}
      </div>
      {/* <AcceptButton preset="accept" type="submit" /> // READYPLAYERME - commented out */}
      {isEmbedded &&
        isLoading && ( // READYPLAYERME
          <Button preset="basic" type="button" disabled={true}>
            <FormattedMessage id="loading-avatar" defaultMessage="Loading..." />
          </Button>
        )}
      {isEmbedded &&
        !isLoading && ( // READYPLAYERME
          <AcceptButton preset="accept" type="submit" />
        )}
      {!isEmbedded && ( // READYPLAYERME
        <AcceptButton preset="accept" type="submit" />
      )}
    </Column>
  );
}

AvatarSettingsContent.propTypes = {
  className: PropTypes.string,
  displayName: PropTypes.string,
  displayNameInputRef: PropTypes.func,
  disableDisplayNameInput: PropTypes.bool,
  displayNamePattern: PropTypes.string,
  onChangeDisplayName: PropTypes.func,
  avatarPreview: PropTypes.node,
  onChangeAvatar: PropTypes.func
};
