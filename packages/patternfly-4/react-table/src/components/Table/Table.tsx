import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesGrid from '@patternfly/react-styles/css/components/Table/table-grid';
import { Provider } from './base';
import { css, getModifier } from '@patternfly/react-styles';
import BodyCell from './BodyCell';
import HeaderCell from './HeaderCell';
import RowWrapper from './RowWrapper';
import BodyWrapper from './BodyWrapper';
import { calculateColumns } from './utils/headerUtils';
import { formatterValueType, ColumnType, RowType, RowKeyType } from './base';
import { DropdownItemProps, Omit } from '@patternfly/react-core';
// import { DropdownPosition, DropdownDirection } from '@patternfly/react-core';

// todo: export from react-core as enum
export enum DropdownPosition {
  right = 'right',
  left= 'left'
};

// todo: export from react-core as enum
export enum DropdownDirection {
  up = 'up',
  down = 'down',
};

export enum TableGridBreakpoint {
  none = '',
  grid = 'grid',
  gridMd = 'grid-md',
  gridLg = 'grid-lg',
  gridXl = 'grid-xl',
  grid2xl = 'grid-2xl'
};

export enum TableVariant {
  compact = 'compact'
};

type OnSort = (event: React.MouseEvent, columnIndex: number, sortByDirection: SortByDirection, extraData: IExtraColumnData) => void;
type OnCollapse = (event: React.MouseEvent, rowIndex: number, isOpen: boolean, rowData: IRowData, extraData: IExtraData) => undefined;
type OnExpand = (event: React.MouseEvent, rowIndex: number, colIndex: number, isOpen: boolean, rowData: IRowData, extraData: IExtraData) => undefined;
type OnSelect = (event: React.MouseEvent, isSelected: boolean, rowIndex: number, rowData: IRowData, extraData: IExtraData) => undefined;

export enum SortByDirection {
  asc = 'asc',
  desc = 'desc'
};

export interface IHeaderRow extends ColumnType {
}

export interface IRowData extends IRow {
  disableActions?: boolean;
}

export interface IColumn {
  extraParams: {
    sortBy?: ISortBy;
    onSort?: OnSort;
    onCollapse?: OnCollapse;
    onExpand?: OnExpand;
    onSelect?: OnSelect;
    rowLabeledBy?: string;
    expandId?: string;
    contentId?: string;
    dropdownPosition?: DropdownPosition;
    dropdownDirection?: DropdownDirection;
    allRowsSelected?: boolean;
  }
}

export interface IExtraRowData {
  rowIndex?: number;
  rowKey?: RowKeyType;
}

export interface IExtraColumnData {
  columnIndex?: number,
  column?: IColumn,
  property?: string,
}

export interface IExtraData extends IExtraColumnData, IExtraRowData {
}

export interface IExtra extends IExtraData {
  rowData?: IRowData;
}

export type IFormatterValueType = formatterValueType & {
  title?: string | React.ReactNode;
  props: any;
};

export interface ISortBy {
  index?: number;
  direction?: 'asc' | 'desc'
}

export interface IActionsItem extends Omit<DropdownItemProps, 'title'> {
  isSeparator?: boolean;
  itemKey?: string;
  title?: string | React.ReactNode;
}

export interface IAction extends IActionsItem {
  onClick: (event: React.MouseEvent, rowIndex: number, rowData: IRowData, extraData: IExtraData) => void;
}

export interface ISeparator extends IActionsItem {
  isSeparator: boolean;
}

export type IActions = (IAction | ISeparator)[];
export type IActionsResolver = (rowData: IRowData, extraData: IExtraData) => (IAction | ISeparator)[];
export type IAreActionsDisabled = (rowData: IRowData, extraData: IExtraData) => boolean;

export interface IDecorator extends React.HTMLProps<HTMLElement> {
  isVisible: boolean;
  children?: React.ReactNode;
}

export interface ICell {
  title: string;
  transforms?: ((value: any) => IDecorator)[];
  cellTransforms?: ((value: any) => IDecorator)[];
  columnTransforms?: ((value: any) => IDecorator)[];
  formatters?: ((value: any) => IDecorator)[];
  cellFormatters?: ((value: any) => IDecorator)[];
  props: any;
}

export interface IRowCell {
  title: React.ReactNode;
  props: any;
}

export interface IRow extends RowType {
  cells: (React.ReactNode | IRowCell)[];
  isOpen?: boolean;
  parent?: number;
  props?: any;
  fullWidth?: boolean;
  noPadding?: boolean;
  showSelect?: boolean;
  isExpanded?: boolean;
  isFirstVisible?: boolean;
  isLastVisible?: boolean;
  selected?: boolean;
}

export interface TableProps {
  'aria-label'?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: 'compact';
  borders?: boolean;
  gridBreakPoint?: '' | 'grid' | 'grid-md' | 'grid-lg' | 'grid-xl' | 'grid-2xl';
  sortBy?: ISortBy;
  onCollapse?: OnCollapse;
  onExpand?: OnExpand;
  onSelect?: OnSelect;
  onSort?: OnSort;
  actions?: IActions;
  actionResolver?: IActionsResolver;
  areActionsDisabled?: IAreActionsDisabled;
  header?: React.ReactNode;
  caption?: React.ReactNode;
  rowLabeledBy?: string;
  expandId?: string;
  contentId?: string;
  dropdownPosition?: 'right' | 'left';
  dropdownDirection?: 'up' | 'down';
  rows: (IRow | string[])[];
  cells: (ICell | string)[];
  bodyWrapper?: Function;
  rowWrapper?: Function;
  role?: string;
}

export const TableContext = React.createContext({
  headerData: null as any,
  headerRows: null as IHeaderRow[],
  rows: [] as (IRow | string[])[]
});

class Table extends React.Component<TableProps, {}> {
  static defaultProps = {
    children: null as React.ReactNode,
    className: '',
    variant: null as TableVariant,
    borders: true,
    rowLabeledBy: 'simple-node',
    expandId: 'expandable-toggle',
    contentId: 'expanded-content',
    dropdownPosition: DropdownPosition.right,
    dropdownDirection: DropdownDirection.down,
    header: undefined as React.ReactNode,
    caption: undefined as React.ReactNode,
    'aria-label': undefined as string,
    gridBreakPoint: TableGridBreakpoint.gridMd,
    role: 'grid'
  }

  isSelected = (row: IRow) => row.selected === true;

  areAllRowsSelected = (rows: IRow[]) => {
    if (rows === undefined || rows.length === 0) {
      return false;
    }
    return rows.every(row => this.isSelected(row) || (row.hasOwnProperty('parent') && !row.showSelect));
  };
    
  render(){
    const {
      'aria-label': ariaLabel,
      caption,
      header,
      className,
      gridBreakPoint,
      onSort,
      onSelect,
      sortBy,
      children,
      actions,
      actionResolver,
      areActionsDisabled,
      onCollapse,
      onExpand,
      rowLabeledBy,
      dropdownPosition,
      dropdownDirection,
      contentId,
      expandId,
      variant,
      rows,
      cells,
      bodyWrapper,
      rowWrapper,
      borders,
      role,
      ...props
    } = this.props;

    if (!ariaLabel && !caption && !header && role !== 'presentation') {
      // tslint:disable-next-line:no-console
      console.error('Table: Specify at least one of: header, caption, aria-label')
    }

    const headerData = calculateColumns(cells, {
      sortBy,
      onSort,
      onSelect,
      allRowsSelected: onSelect ? this.areAllRowsSelected(rows as IRow[]) : false,
      actions,
      actionResolver,
      areActionsDisabled,
      onCollapse,
      onExpand,
      rowLabeledBy,
      expandId,
      contentId,
      dropdownPosition,
      dropdownDirection,
      firstUserColumnIndex: [onCollapse, onSelect].filter(callback => callback).length
    });

    return (
      <TableContext.Provider
        value={{
          headerData,
          headerRows: null as IHeaderRow[],
          rows
        }}
      >
        {header}
        <Provider
          {...props}
          aria-label = {ariaLabel}
          renderers={{
            body: {
              wrapper: bodyWrapper || BodyWrapper,
              row: rowWrapper || RowWrapper,
              cell: BodyCell
            },
            header: {
              cell: HeaderCell
            }
          }}
          columns={headerData}
          role={role}
          className={css(
            styles.table,
            gridBreakPoint && getModifier(stylesGrid, gridBreakPoint),
            getModifier(styles, variant),
            ((onCollapse && variant === TableVariant.compact) || onExpand) && styles.modifiers.expandable,
            variant === TableVariant.compact && borders === false ? styles.modifiers.noBorderRows : null,
            className
          )}
        >
          {caption && <caption>{caption}</caption>}
          {children}
        </Provider>
      </TableContext.Provider>
    );
  }
}
export default Table;
