import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AppLauncher/app-launcher';
import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';
import { DropdownDirection, DropdownPosition, DropdownToggle, DropdownContext } from '../Dropdown';
import { DropdownWithContext } from '../Dropdown/DropdownWithContext';
import { ApplicationLauncherGroup } from './ApplicationLauncherGroup';
import { ApplicationLauncherSeparator } from './ApplicationLauncherSeparator';
import { ApplicationLauncherItem } from './ApplicationLauncherItem';
import { ApplicationLauncherContext } from './ApplicationLauncherContext';
import { createRenderableFavorites, extendItemsWithFavorite } from '../../helpers/favorites';
import { SearchInput } from '../SearchInput';

export interface ApplicationLauncherProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional element css classes */
  className?: string;
  /** Display menu above or below dropdown toggle */
  direction?: DropdownDirection | 'up' | 'down';
  /** Array of application launcher items */
  items?: React.ReactNode[];
  /** Render Application launcher toggle as disabled icon */
  isDisabled?: boolean;
  /** open bool */
  isOpen?: boolean;
  /** Indicates where menu will be alligned horizontally */
  position?: DropdownPosition | 'right' | 'left';
  /** Function callback called when user selects item */
  onSelect?: (event: any) => void;
  /** Callback called when application launcher toggle is clicked */
  onToggle?: (value: boolean) => void;
  /** Adds accessible text to the button. Required for plain buttons */
  'aria-label'?: string;
  /** Flag to indicate if application launcher has groups */
  isGrouped?: boolean;
  /** Toggle Icon, optional to override the icon used for the toggle */
  toggleIcon?: React.ReactNode;
  /** The container to append the menu to. Defaults to 'inline'.
   * If your menu is being cut off you can append it to an element higher up the DOM tree.
   * Some examples:
   * menuAppendTo="parent"
   * menuAppendTo={() => document.body}
   * menuAppendTo={document.getElementById('target')}
   */
  menuAppendTo?: HTMLElement | (() => HTMLElement) | 'inline' | 'parent';
  /** ID list of favorited ApplicationLauncherItems */
  favorites?: string[];
  /** Enables favorites. Callback called when an ApplicationLauncherItem's favorite button is clicked */
  onFavorite?: (itemId: string, isFavorite: boolean) => void;
  /** Enables search. Callback called when text input is entered into search box */
  onSearch?: (textInput: string) => void;
  /** @hide A callback for when the search input value for changes.  To be used when isSearchable is true. */
  onSearchInputChanged?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
  /** @hide Callback for search input clear button */
  onSearchInputClear?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  /** Placeholder text for search input */
  searchPlaceholderText?: string;
  /** Text for search input when no results are found */
  searchNoResultsText?: string;
  /** Additional properties for search input */
  searchProps?: any;
  /** Label for the favorites group */
  favoritesLabel?: string;
  /** ID of toggle */
  toggleId?: string;
  /** @beta Opt-in for updated popper that does not use findDOMNode. */
  removeFindDomNode?: boolean;
}

export const ApplicationLauncher: React.FunctionComponent<ApplicationLauncherProps> = ({
  className = '',
  isDisabled = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  direction = DropdownDirection.down,
  favorites = [] as string[],
  items = [] as React.ReactNode[],
  isOpen = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  position = DropdownPosition.left,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  onSelect = (_event: any): any => undefined,
  onToggle = (_value: boolean): any => undefined,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  'aria-label': ariaLabel = 'Application launcher',
  isGrouped = false,
  toggleIcon = <ThIcon />,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchPlaceholderText = 'Filter by name...',
  searchNoResultsText = 'No results found',
  favoritesLabel = 'Favorites',
  menuAppendTo = 'inline',
  removeFindDomNode = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref,
  toggleId,
  onFavorite,
  onSearch,
  ...props
}: ApplicationLauncherProps) => {
  const [value, setValue] = React.useState('');
  const [allItems] = React.useState(items);
  let renderableItems: React.ReactNode[] = [];

  const createSearchBox = () => {
    const { searchProps } = props;

    const onClear = () => {
      setValue('');
    };

    return (
      <div key="search" className={css(styles.appLauncherMenuSearch)}>
        <ApplicationLauncherItem
          customChild={
            <SearchInput
              value={value}
              // eslint-disable-next-line no-console
              onClear={onClear}
              // type="search"
              placeholder={searchPlaceholderText}
              onChange={value => {
                onSearch(value);
                setValue(value);
              }}
              {...searchProps}
            />
          }
        ></ApplicationLauncherItem>
      </div>
    );
  };

  if (onFavorite) {
    let favoritesGroup: React.ReactNode[] = [];
    let renderableFavorites: React.ReactNode[] = [];
    if (favorites.length > 0) {
      renderableFavorites = createRenderableFavorites(items, isGrouped, favorites, true);
      favoritesGroup = [
        <ApplicationLauncherGroup key="favorites" label={favoritesLabel}>
          {renderableFavorites}
          <ApplicationLauncherSeparator key="separator" />
        </ApplicationLauncherGroup>
      ];
    }
    if (renderableFavorites.length > 0) {
      renderableItems = favoritesGroup.concat(extendItemsWithFavorite(items, isGrouped, favorites));
    } else {
      renderableItems = extendItemsWithFavorite(items, isGrouped, favorites);
    }
  } else {
    renderableItems = items;
  }

  if (items.length === 0) {
    value === ''
      ? (renderableItems = allItems)
      : (renderableItems = [
          <ApplicationLauncherGroup key="no-results-group">
            <ApplicationLauncherItem key="no-results">{searchNoResultsText}</ApplicationLauncherItem>
          </ApplicationLauncherGroup>
        ]);
  }
  if (onSearch) {
    renderableItems = [createSearchBox(), ...renderableItems];
  }

  const onKeyDown = (event: React.KeyboardEvent<any>) => {
    if (event.key === 'Tab' && isOpen && value) {
      event.stopPropagation();
    }
  };

  return (
    <ApplicationLauncherContext.Provider value={{ onFavorite }}>
      <DropdownContext.Provider
        value={{
          onSelect,
          menuClass: styles.appLauncherMenu,
          itemClass: styles.appLauncherMenuItem,
          toggleClass: styles.appLauncherToggle,
          baseClass: styles.appLauncher,
          baseComponent: 'nav',
          sectionClass: styles.appLauncherGroup,
          sectionTitleClass: styles.appLauncherGroupTitle,
          sectionComponent: 'section',
          disabledClass: styles.modifiers.disabled,
          ouiaComponentType: ApplicationLauncher.displayName
        }}
      >
        <DropdownWithContext
          {...props}
          dropdownItems={renderableItems}
          isOpen={isOpen}
          onKeyDown={onKeyDown}
          className={className}
          aria-label={ariaLabel}
          menuAppendTo={menuAppendTo}
          removeFindDomNode={removeFindDomNode}
          toggle={
            <DropdownToggle
              id={toggleId}
              toggleIndicator={null}
              isOpen={isOpen}
              onToggle={onToggle}
              isDisabled={isDisabled}
              aria-label={ariaLabel}
            >
              {toggleIcon}
            </DropdownToggle>
          }
          isGrouped={isGrouped}
        />
      </DropdownContext.Provider>
    </ApplicationLauncherContext.Provider>
  );
};
ApplicationLauncher.displayName = 'ApplicationLauncher';
