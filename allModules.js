define([
	'gridx/modules/Focus',
	'gridx/modules/VScroller',
	'gridx/modules/ColumnResizer',
	'gridx/modules/VirtualVScroller',
	'gridx/modules/SingleSort',
	'gridx/modules/NestedSort',
	'gridx/modules/ColumnLock',
	'gridx/modules/select/Row',
	'gridx/modules/select/Column',
	'gridx/modules/select/Cell',
	'gridx/modules/extendedSelect/Row',
	'gridx/modules/extendedSelect/Column',
	'gridx/modules/extendedSelect/Cell',
	'gridx/modules/move/Row',
	'gridx/modules/move/Column',
	'gridx/modules/dnd/Row',
	'gridx/modules/dnd/Column',
	'gridx/modules/Pagination',
	'gridx/modules/pagination/PaginationBar',
	'gridx/modules/pagination/PaginationBarDD',
	'gridx/modules/Filter',
	'gridx/modules/filter/FilterBar',
	'gridx/modules/filter/QuickFilter',
	'gridx/modules/CellWidget',
	'gridx/modules/Edit',
	'gridx/modules/RowHeader',
	'gridx/modules/IndirectSelect',
	'gridx/modules/IndirectSelectColumn',
	'gridx/modules/Persist',
	'gridx/modules/Menu',
	'gridx/modules/Dod',
	'gridx/modules/Tree',
	'gridx/modules/RowLock',
	'gridx/modules/ToolBar',
	'gridx/modules/SummaryBar',
	'gridx/modules/Bar',
	'gridx/modules/NavigableCell',
	'gridx/modules/TouchScroll',
	'gridx/modules/HiddenColumns',
	'gridx/modules/GroupHeader',
	'gridx/modules/PagedBody'
], function(
	Focus, VScroller, ColumnResizer, VirtualVScroller,
	SingleSort, NestedSort, ColumnLock,
	SelectRow, SelectColumn, SelectCell,
	ExtendedSelectRow, ExtendedSelectColumn, ExtendedSelectCell,
	MoveRow, MoveColumn,
	DndRow, DndColumn,
	Pagination,
	PaginationBar, PaginationBarDD,
	Filter, FilterBar, QuickFilter,
	CellWidget, Edit,
	RowHeader, IndirectSelect, IndirectSelectColumn,
	Persist, Menu, Dod, Tree, RowLock,
	ToolBar, SummaryBar, Bar, NavigableCell, TouchScroll,
	HiddenColumns, GroupHeader, PagedBody){
return {
	Focus: Focus,
	VScroller: VScroller,
	ColumnResizer: ColumnResizer,
	VirtualVScroller: VirtualVScroller,
	SingleSort: SingleSort,
	NestedSort: NestedSort,
	ColumnLock: ColumnLock,
	SelectRow: SelectRow,
	SelectColumn: SelectColumn,
	SelectCell: SelectCell,
	ExtendedSelectRow: ExtendedSelectRow,
	ExtendedSelectColumn: ExtendedSelectColumn,
	ExtendedSelectCell: ExtendedSelectCell,
	MoveRow: MoveRow,
	MoveColumn: MoveColumn,
	DndRow: DndRow,
	DndColumn: DndColumn,
	Pagination: Pagination,
	PaginationBar: PaginationBar,
	PaginationBarDD: PaginationBarDD,
	Filter: Filter,
	FilterBar: FilterBar,
	QuickFilter: QuickFilter,
	CellWidget: CellWidget,
	Edit: Edit,
	RowHeader: RowHeader,
	IndirectSelect: IndirectSelect,
	IndirectSelectColumn: IndirectSelectColumn,
	Persist: Persist,
	Menu: Menu,
	Dod: Dod,
	Tree: Tree,
	RowLock: RowLock,
	ToolBar: ToolBar,
	SummaryBar: SummaryBar,
	Bar: Bar,
	NavigableCell: NavigableCell,
	TouchScroll: TouchScroll,
	HiddenColumns: HiddenColumns,
	GroupHeader: GroupHeader,
	PagedBody: PagedBody
};
});
