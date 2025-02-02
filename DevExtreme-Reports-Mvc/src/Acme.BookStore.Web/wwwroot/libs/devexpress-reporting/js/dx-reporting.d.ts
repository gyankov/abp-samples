﻿/**
* DevExpress HTML/JS Reporting (dist\js\dx-reporting.d.ts)
* Version:  21.2.3
* Build date: Oct 28, 2021
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
declare module DevExpress.Reporting.Chart.Internal.Widgets {
    import FieldListEditor = DevExpress.Analytics.Widgets.FieldListEditor;;

	export class SummaryFunctionModel {
	    static availableItems: string[];
	    static from(val: any): SummaryFunctionModel;
	    static toJson(value: SummaryFunctionModel): {};
	    private _updateArgs;
	    constructor(functionName: any, args: any);
	    functionName: ko.Observable<any>;
	    args: ko.ObservableArray<{
	        value: ko.Observable<string>;
	    }>;
	}
	export class SummaryFunctionEditor extends FieldListEditor {
	    constructor(modelPropertyInfo: any, level: any, parentDisabled?: ko.Computed<boolean>);
	    getLocalization(displayName: any, localizationId: any): any;
	    memberPadding: any;
	    argumentTemplateName: string;
	    actionsAreAvailable: ko.Observable<boolean>;
	    add(): void;
	    remove(index: any): void;
	    availableItems(): string[];
	}

}
declare module DevExpress.Reporting.Chart.Internal {
    import IDisplayedValue = DevExpress.Analytics.Utils.IDisplayedValue;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var defaultBooleanValues: Array<IDisplayedValue>;
	export var scaleTypeValues: Array<IDisplayedValue>;
	export var stringAlignmentValues: Array<IDisplayedValue>;
	export var angle: ISerializationInfo;
	export var borderColor: ISerializationInfo;
	export var backColor: ISerializationInfo;
	export var dataMember: ISerializationInfo;
	export var text: ISerializationInfo;
	export var visible: ISerializationInfo;
	export var name: ISerializationInfo;
	export var tag: ISerializationInfo;
	export var legendText: ISerializationInfo;
	export var showInLegend: ISerializationInfo;
	export var thickness: ISerializationInfo;
	export var visibility: ISerializationInfo;
	export var color: ISerializationInfo;
	export var titleAlignment: ISerializationInfo;
	export var textPattern: ISerializationInfo;
	export var textAlignment: ISerializationInfo;
	export var maxLineCount: ISerializationInfo;
	export var maxWidth: ISerializationInfo;
	export var textColor: ISerializationInfo;
	export var antialiasing: ISerializationInfo;
	export var font: ISerializationInfo;
	export var enableAxisXZooming: ISerializationInfo;
	export var enableAxisXScrolling: ISerializationInfo;
	export var enableAxisYZooming: ISerializationInfo;
	export var enableAxisYScrolling: ISerializationInfo;
	export var rotated: ISerializationInfo;
	export var typeNameNotShow: ISerializationInfo;
	export var left: ISerializationInfo;
	export var right: ISerializationInfo;
	export var top: ISerializationInfo;
	export var bottom: ISerializationInfo;
	export var margin: ISerializationInfo;
	export var font18: ISerializationInfo;
	export var font12: ISerializationInfo;
	export var font8: ISerializationInfo;
	export var paneSerializationsInfo: ISerializationInfoArray;
	export var defaultPane: ISerializationInfo;
	export var additionalPaneSerializationsInfo: ISerializationInfoArray;
	export var filterString: ISerializationInfo;
	export var filterStringEditable: ISerializationInfo;

}
declare module DevExpress.Reporting.Chart.Internal {
    import EditorTemplates = DevExpress.Analytics.Widgets.EditorTemplates;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export var editorTemplates: EditorTemplates<ChartEditorTemplates>;
	export var chartDataSource: ISerializationInfo;
	export {};

}
declare module DevExpress.Reporting.Chart.Internal.Series {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var summaryFunctionSerializationInfo: ISerializationInfo;
	export var summaryOptionsSerializationInfoArray: ISerializationInfoArray;
	export var numericSummaryOptionsSerializationInfoArray: ISerializationInfo[];
	export var dateTimeSummaryOptionsSerializationInfoArray: ISerializationInfo[];

}
declare module DevExpress.Reporting.Chart.Internal.Series {
    import SummaryFunctionModel = DevExpress.Reporting.Chart.Internal.Widgets.SummaryFunctionModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class SummaryOptionsModelBase implements ISerializableModel {
	    constructor(model: any, serializer?: IModelSerializer);
	    getInfo(): ISerializationInfoArray;
	    resetAllProperties(): void;
	    summaryFunction: SummaryFunctionModel;
	}
	export class QualitativeSummaryOptionsModel extends SummaryOptionsModelBase {
	    static from(model: any, serializer?: IModelSerializer): QualitativeSummaryOptionsModel;
	    static toJson(value: QualitativeSummaryOptionsModel, serializer: any, refs: any): any;
	    constructor(model: any, serializer?: IModelSerializer);
	}
	export class NumericSummaryOptionsModel extends SummaryOptionsModelBase {
	    static from(model: any, serializer?: IModelSerializer): NumericSummaryOptionsModel;
	    static toJson(value: QualitativeSummaryOptionsModel, serializer: any, refs: any): any;
	    constructor(model: any, serializer?: IModelSerializer);
	    getInfo(): ISerializationInfoArray;
	}
	export class DateTimeSummaryOptionsModel extends SummaryOptionsModelBase {
	    static from(model: any, serializer?: IModelSerializer): DateTimeSummaryOptionsModel;
	    static toJson(value: QualitativeSummaryOptionsModel, serializer: any, refs: any): any;
	    constructor(model: any, serializer?: IModelSerializer);
	    getInfo(): ISerializationInfoArray;
	}

}
declare module DevExpress.Reporting.Chart.Internal.Series {
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class SeriesLabelViewModel extends SerializableModel {
	    static from(model: any, serializer?: IModelSerializer): SeriesLabelViewModel;
	    static toJson(value: any, serializer: any, refs: any): any;
	    constructor(model: any, serializer?: IModelSerializer);
	    typeNameSerializable: ko.Observable<string> | ko.Computed<string>;
	    seriesLabelPosition: ko.Observable<string>;
	}

}
declare module DevExpress.Reporting.Chart.Internal {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var typeNameSerializable: ISerializationInfo;
	export var barSeriesViewGroup: string[];
	export var bar3DSeriesViewGroup: string[];
	export var barWidth: ISerializationInfo;
	export var colorEach: ISerializationInfo;
	export var borderSerializationsInfo: ISerializationInfoArray;
	export var border: ISerializationInfo;
	export var fillMode: ISerializationInfo;
	export var fillStyleOptionsSerialize: ISerializationInfo;
	export var fillMode3D: ISerializationInfo;
	export var fillStyle: ISerializationInfo;
	export var viewSerializationsInfo: ISerializationInfoArray;
	export var fillModeMapper: {
	    'Empty': any[];
	    'Solid': ISerializationInfo[];
	    'Gradient': ISerializationInfoArray;
	    'Hatch': ISerializationInfoArray;
	};

}
declare module DevExpress.Reporting.Chart.Internal.Series {
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class FillStyle extends SerializableModel {
	    static from(info: any, gradientTypeName: any): (model: any, serializer: any) => FillStyle;
	    static toJson(model: FillStyle, serializer: IModelSerializer, refs: any): any;
	    private _optionsTypeMap;
	    constructor(model: any, info: ISerializationInfoArray, gradientTypeName: string, serializer?: IModelSerializer);
	    isPropertyVisible(propertyName: any): any;
	    updateOptions(fillMode: string, serializer: any, optionsObject: any): void;
	    fillMode: ko.Observable<string> | ko.Computed<string>;
	    options: ko.Observable<any>;
	    gradientTypeName: string;
	}

}
declare module DevExpress.Reporting.Chart.Internal.Axis {
    import IAction = DevExpress.Analytics.Utils.IAction;;

	export interface ICollectionItem {
	    parent: ko.ObservableArray<ICollectionItem>;
	    innerActions: Array<IAction>;
	}
	export function initCollectionItem(item: ICollectionItem, parent: ko.ObservableArray<ICollectionItem>): () => void;

}
declare module DevExpress.Reporting.Chart.Internal.Models {
    import ICollectionItem = DevExpress.Reporting.Chart.Internal.Axis.ICollectionItem;;
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IAction = DevExpress.Analytics.Utils.IAction;;
	export class ChartElementCollectionItemBase extends SerializableModel implements ICollectionItem {
	    static toJson(value: ChartElementCollectionItemBase, serializer: any, refs: any): any;
	    constructor(model: any, parent: ko.ObservableArray<ChartElementCollectionItemBase>, serializer?: IModelSerializer, info?: ISerializationInfoArray);
	    parent: ko.ObservableArray<ICollectionItem>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    defaultItemName: (parentName?: string) => string;
	    innerActions: IAction[];
	}

}
declare module DevExpress.Reporting.Chart.Internal {
	export function parseDate(val: any): Date;
	export function serializeDate(date: Date): string;

}
declare module DevExpress.Reporting.Chart.Internal.Series {
    import SeriesViewModel = DevExpress.Reporting.Chart.Internal.Series.SeriesViewModel;;
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

	export class SeriesPointModel extends SerializableModel {
	    static separator: string;
	    static getSerializationValue(array: Array<ko.Observable<any>>, dateConverter: any): any[];
	    static createNew(series: any): SeriesPointModel;
	    static getPointModelBySeries(series: SeriesViewModel): {
	        '@ValuesSerializable': any;
	    };
	    static getDefaultValueByScaleType(scaleType: string): 0 | Date;
	    static valueToJsonObject(value: any): string;
	    private _valueDataMembersToString;
	    private _assignValueDataMembers;
	    constructor(model: any, series: SeriesViewModel, serializer?: IModelSerializer);
	    readonly isDateType: boolean;
	    argumentSerializable: ko.Observable | ko.Computed;
	    argumentSerializableInfo: ko.Computed;
	    valuesSerializable: ko.Observable | ko.Computed;
	    series: SeriesViewModel;
	    arrayValueDataMemberNames: string[];
	}

}
declare module DevExpress.Reporting.Chart.Internal {
    import SeriesPointModel = DevExpress.Reporting.Chart.Internal.Series.SeriesPointModel;;

	export function createInnerActionsWithPopover(text: any, id: any, actions: any, template?: any): {
	    text: any;
	    imageClassName: string;
	    imageTemplateName: string;
	    disabled: ko.Observable<boolean>;
	    id: any;
	    _visible: ko.Observable<boolean>;
	    popoverVisible: any;
	    togglePopoverVisible: any;
	    closePopover: any;
	    templateName: string;
	    contentTemplate: any;
	    getContainer: (element: HTMLElement, selector: string) => JQuery<HTMLElement>;
	    actions: any;
	}[];
	export function _isNumericTypeSpecific(specific: string): boolean;
	export function _isDateTypeSpecific(specific: string): boolean;
	export function _getUnconvertiblePoint(propertyName: string, oldValue: string, newValue: string, points: SeriesPointModel[]): SeriesPointModel;

}
declare module DevExpress.Reporting.Chart.Internal.Models {
    import ChartElementCollectionItemBase = DevExpress.Reporting.Chart.Internal.Models.ChartElementCollectionItemBase;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

	export class TitleViewModel extends ChartElementCollectionItemBase {
	    static prefix: string;
	    static from(model: any, serializer?: IModelSerializer): TitleViewModel;
	    constructor(model: any, parent: ko.ObservableArray<TitleViewModel>, serializer?: IModelSerializer);
	}
	export function assignTitleActions(titles: ko.ObservableArray<TitleViewModel>): void;

}
declare module DevExpress.Reporting {

	export function getSeriesClassName(typeName: any): any;
	export function deserializeModelArray<T>(model: any, creator: (item: any, parent: any) => T, prefix: string): ko.ObservableArray<T>;

}
declare module DevExpress.Reporting.Chart.Internal {
	export var indicatorMapper: {
	    'AverageTrueRange': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'BollingerBands': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'ChaikinsVolatility': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'CommodityChannelIndex': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'DataSourceBasedErrorBars': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'DetrendedPriceOscillator': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'ExponentialMovingAverage': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'FibonacciIndicator': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'FixedValueErrorBars': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'MassIndex': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'MedianPrice': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'MovingAverageConvergenceDivergence': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'PercentageErrorBars': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'RateOfChange': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'RegressionLine': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'RelativeStrengthIndex': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'SimpleMovingAverage': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'StandardDeviation': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'StandardDeviationErrorBars': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'StandardErrorBars': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'TrendLine': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'TriangularMovingAverage': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'TripleExponentialMovingAverageTema': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'TripleExponentialMovingAverageTrix': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'TypicalPrice': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'WeightedClose': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'WeightedMovingAverage': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'WilliamsR': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	};

}
declare module DevExpress.Reporting.Chart.Internal.Series {

    import ChartElementCollectionItemBase = DevExpress.Reporting.Chart.Internal.Models.ChartElementCollectionItemBase;;
	export class Indicator extends ChartElementCollectionItemBase {
	    static prefix: string;
	    constructor(model: any, parent: ko.ObservableArray<Indicator>, serializer?: any);
	}
	export function assignIndicatorActions(indicators: ko.ObservableArray<Indicator>): void;

}
declare module DevExpress.Reporting.Chart.Internal {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var paneName: ISerializationInfo;
	export var axisXName: ISerializationInfo;
	export var axisYName: ISerializationInfo;
	export var fillStyleInfo: (ISerializationInfo | {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    valuesArray: {
	        value: string;
	        displayValue: string;
	        localizationId: string;
	    }[];
	    defaultVal: string;
	})[];
	export var viewMapper: {
	    FullStackedStepAreaSeriesView: ISerializationInfoArray;
	    PolarRangeAreaSeriesView: ISerializationInfoArray;
	    RadarRangeAreaSeriesView: ISerializationInfoArray;
	    RangeArea3DSeriesView: ISerializationInfoArray;
	    RangeAreaSeriesView: ISerializationInfoArray;
	    StackedStepAreaSeriesView: ISerializationInfoArray;
	    StepArea3DSeriesView: ISerializationInfoArray;
	    StepAreaSeriesView: ISerializationInfoArray;
	    SideBySideFullStackedBar3DSeriesView: ISerializationInfoArray;
	    SideBySideFullStackedBarSeriesView: ISerializationInfoArray;
	    SideBySideStackedBar3DSeriesView: ISerializationInfoArray;
	    SideBySideStackedBarSeriesView: ISerializationInfoArray;
	    FullStackedLine3DSeriesView: ISerializationInfoArray;
	    FullStackedLineSeriesView: ISerializationInfoArray;
	    WaterfallSeriesView: ISerializationInfoArray;
	    ScatterPolarLineSeriesView: ISerializationInfoArray;
	    ScatterRadarLineSeriesView: ISerializationInfoArray;
	    StackedLine3DSeriesView: ISerializationInfoArray;
	    StackedLineSeriesView: ISerializationInfoArray;
	    NestedDoughnutSeriesView: ISerializationInfoArray;
	    SwiftPlotSeriesView: ISerializationInfoArray;
	    Funnel3DSeriesView: ISerializationInfoArray;
	    FunnelSeriesView: ISerializationInfoArray;
	    ScatterLineSeriesView: ISerializationInfoArray;
	    BubbleSeriesView: ISerializationInfoArray;
	    Spline3DSeriesView: ISerializationInfoArray;
	    SplineArea3DSeriesView: ISerializationInfoArray;
	    FullStackedSplineArea3DSeriesView: ISerializationInfoArray;
	    SplineAreaSeriesView: ISerializationInfoArray;
	    FullStackedSplineAreaSeriesView: ISerializationInfoArray;
	    StackedSplineArea3DSeriesView: ISerializationInfoArray;
	    SplineSeriesView: ISerializationInfoArray;
	    StackedSplineAreaSeriesView: ISerializationInfoArray;
	    Area3DSeriesView: ISerializationInfoArray;
	    FullStackedArea3DSeriesView: ISerializationInfoArray;
	    PolarAreaSeriesView: ISerializationInfoArray;
	    RadarAreaSeriesView: ISerializationInfoArray;
	    StackedArea3DSeriesView: ISerializationInfoArray;
	    FullStackedBar3DSeriesView: ISerializationInfoArray;
	    SideBySideBar3DSeriesView: ISerializationInfoArray;
	    StackedBar3DSeriesView: ISerializationInfoArray;
	    PolarLineSeriesView: ISerializationInfoArray;
	    RadarLineSeriesView: ISerializationInfoArray;
	    Doughnut3DSeriesView: ISerializationInfoArray;
	    DoughnutSeriesView: ISerializationInfoArray;
	    PolarPointSeriesView: ISerializationInfoArray;
	    OverlappedGanttSeriesView: ISerializationInfoArray;
	    RadarPointSeriesView: ISerializationInfoArray;
	    SideBySideGanttSeriesView: ISerializationInfoArray;
	    AreaSeriesView: ISerializationInfoArray;
	    CandleStickSeriesView: ISerializationInfoArray;
	    FullStackedAreaSeriesView: ISerializationInfoArray;
	    FullStackedBarSeriesView: ISerializationInfoArray;
	    Line3DSeriesView: ISerializationInfoArray;
	    LineSeriesView: ISerializationInfoArray;
	    ManhattanBarSeriesView: ISerializationInfoArray;
	    OverlappedRangeBarSeriesView: ISerializationInfoArray;
	    Pie3DSeriesView: ISerializationInfoArray;
	    PieSeriesView: ISerializationInfoArray;
	    PointSeriesView: ISerializationInfoArray;
	    SideBySideBarSeriesView: ISerializationInfoArray;
	    SideBySideRangeBarSeriesView: ISerializationInfoArray;
	    StackedAreaSeriesView: ISerializationInfoArray;
	    StackedBarSeriesView: ISerializationInfoArray;
	    StepLineSeriesView: ISerializationInfoArray;
	    StockSeriesView: ISerializationInfoArray;
	    StepLine3DSeriesView: ISerializationInfoArray;
	};

}
declare module DevExpress.Reporting.Chart.Internal.Series {
    import FillStyle = DevExpress.Reporting.Chart.Internal.Series.FillStyle;;
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

	export class SeriesViewViewModel extends SerializableModel {
	    static from(model: any, serializer?: IModelSerializer): ko.Observable<SeriesViewViewModel>;
	    dispose(): void;
	    static toJson(value: any, serializer: any, refs: any): any;
	    _getInfo(typeName: string): DevExpress.Analytics.Utils.ISerializationInfo[];
	    private _createPropertyDisabledDependence;
	    private _createMarkerDependences;
	    private _createLinkOptionsDependences;
	    preInitProperties(model: any): void;
	    constructor(model: any, serializer?: IModelSerializer);
	    axisXName: ko.Observable<string> | ko.Computed<string>;
	    axisYName: ko.Observable<string> | ko.Computed<string>;
	    paneName: ko.Observable<string> | ko.Computed<string>;
	    fillStyle: FillStyle;
	    indicators: ko.ObservableArray<Indicator>;
	    barWidth: ko.Observable<number> | ko.Computed<number>;
	    typeName: string;
	}
    import Indicator = DevExpress.Reporting.Chart.Internal.Series.Indicator;;

}
declare module DevExpress.Reporting.Chart.Internal.DataMembers {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export class DataMemberBase extends Disposable {
	    private _separator;
	    private _assignValueDataMembers;
	    private _valueDataMembersToString;
	    toString(): string;
	    constructor(value: any, valueScaleType?: any);
	    valueScaleType: any;
	    arrayValueDataMemberNames: string[];
	}

}
declare module DevExpress.Reporting.Chart.Internal {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var commonValueSerializationsInfo: ISerializationInfoArray;
	export var valueWeightSerializationsInfo: ISerializationInfoArray;
	export var value1Value2SerializationsInfo: ISerializationInfoArray;
	export var stockValueSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Chart.Internal.DataMembers {
    import DataMemberBase = DevExpress.Reporting.Chart.Internal.DataMembers.DataMemberBase;;
	export class ValueWeightDataMembers extends DataMemberBase {
	    getInfo(): DevExpress.Analytics.Utils.ISerializationInfoArray;
	    readonly arrayValueDataMemberNames: string[];
	}

}
declare module DevExpress.Reporting.Chart.Internal.DataMembers {
    import DataMemberBase = DevExpress.Reporting.Chart.Internal.DataMembers.DataMemberBase;;
	export class Value1Value2DataMembers extends DataMemberBase {
	    getInfo(): DevExpress.Analytics.Utils.ISerializationInfoArray;
	    readonly arrayValueDataMemberNames: string[];
	}

}
declare module DevExpress.Reporting.Chart.Internal.DataMembers {
    import DataMemberBase = DevExpress.Reporting.Chart.Internal.DataMembers.DataMemberBase;;
	export class StockValueDataMembers extends DataMemberBase {
	    getInfo(): DevExpress.Analytics.Utils.ISerializationInfoArray;
	    readonly arrayValueDataMemberNames: string[];
	}

}
declare module DevExpress.Reporting.Chart.Internal.Series {
    import ValueWeightDataMembers = DevExpress.Reporting.Chart.Internal.DataMembers.ValueWeightDataMembers;;
    import Value1Value2DataMembers = DevExpress.Reporting.Chart.Internal.DataMembers.Value1Value2DataMembers;;
    import StockValueDataMembers = DevExpress.Reporting.Chart.Internal.DataMembers.StockValueDataMembers;;
	export var viewTypesDataMembers: {
	    'BubbleSeriesView': typeof ValueWeightDataMembers;
	    'OverlappedRangeBarSeriesView': typeof Value1Value2DataMembers;
	    'SideBySideRangeBarSeriesView': typeof Value1Value2DataMembers;
	    'RangeAreaSeriesView': typeof Value1Value2DataMembers;
	    'RangeArea3DSeriesView': typeof Value1Value2DataMembers;
	    'OverlappedGanttSeriesView': typeof Value1Value2DataMembers;
	    'SideBySideGanttSeriesView': typeof Value1Value2DataMembers;
	    'StockSeriesView': typeof StockValueDataMembers;
	    'CandleStickSeriesView': typeof StockValueDataMembers;
	};
	export var mapTypes: {
	    [key: string]: string;
	};
	export var onlyNumericArgumentSupportedSeriesViewTypes: Array<string>;

}
declare module DevExpress.Reporting.Chart.Internal.DataMembers {
    import DataMemberBase = DevExpress.Reporting.Chart.Internal.DataMembers.DataMemberBase;;
	export class CommonValueDataMembers extends DataMemberBase {
	    static from(value: any): CommonValueDataMembers;
	    static toJson(value: any): any;
	    getInfo(): DevExpress.Analytics.Utils.ISerializationInfoArray;
	    readonly arrayValueDataMemberNames: string[];
	}

}
declare module DevExpress.Reporting.Chart.Internal.Series {
    import QualitativeSummaryOptionsModel = DevExpress.Reporting.Chart.Internal.Series.QualitativeSummaryOptionsModel;
    import NumericSummaryOptionsModel = DevExpress.Reporting.Chart.Internal.Series.NumericSummaryOptionsModel;
    import DateTimeSummaryOptionsModel = DevExpress.Reporting.Chart.Internal.Series.DateTimeSummaryOptionsModel;;
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;

	export interface IViewBindableProperty {
	    model: ko.Observable<any>;
	    type: ko.Observable<string> | ko.Computed<string>;
	}
	export enum ScaleType {
	    Qualitative = 0,
	    Numerical = 1,
	    DateTime = 2,
	    Auto = 3
	}
	export var ScaleTypeMap: {
	    [key: string]: ScaleType;
	};
	export class SeriesTemplateViewModel extends SerializableModel {
	    static from(model: any, serializer?: IModelSerializer): SeriesTemplateViewModel;
	    static toJson(value: SeriesTemplateViewModel, serializer: any, refs: any): any;
	    updateByView(view: SeriesViewViewModel): void;
	    preInitProperties(model: any): void;
	    _isOnlyNumericArgumentScaleTypeSupported(): boolean;
	    private _getCurrentSeriesPointsSortingKeys;
	    private _adjustArgumentScaleType;
	    private _updateSeriesPointsSortingKey;
	    _isPropertyDisabled(name: string): boolean;
	    constructor(model: any, serializer?: IModelSerializer, info?: ISerializationInfoArray);
	    isPropertyVisible(propertyName: any): boolean;
	    viewBindable: IViewBindableProperty;
	    viewType: ko.Observable<string> | ko.Computed<string>;
	    view: ko.Observable<SeriesViewViewModel>;
	    label: SeriesLabelViewModel;
	    argumentDataMember: ko.Observable<string> | ko.Computed<string>;
	    argumentScaleType: ko.Observable<string> | ko.Computed<string>;
	    valueScaleType: ko.Observable<string> | ko.Computed<string>;
	    valueDataMembers: any;
	    filterString: any;
	    _filterString: any;
	    qualitativeSummaryOptions: QualitativeSummaryOptionsModel;
	    numericSummaryOptions: NumericSummaryOptionsModel;
	    dateTimeSummaryOptions: DateTimeSummaryOptionsModel;
	    _actualArgumentScaleType: ko.Observable<ScaleType>;
	}
    import SeriesLabelViewModel = DevExpress.Reporting.Chart.Internal.Series.SeriesLabelViewModel;;
    import SeriesViewViewModel = DevExpress.Reporting.Chart.Internal.Series.SeriesViewViewModel;;

}
declare module DevExpress.Reporting.Chart.Internal.Series {
    import SeriesTemplateViewModel = DevExpress.Reporting.Chart.Internal.Series.SeriesTemplateViewModel;;
    import ICollectionItem = DevExpress.Reporting.Chart.Internal.Axis.ICollectionItem;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import IAction = DevExpress.Analytics.Utils.IAction;;

	export class SeriesViewModel extends SeriesTemplateViewModel implements ICollectionItem {
	    static prefix: string;
	    updateByView(view: SeriesViewViewModel): void;
	    constructor(model: any, parent: ko.ObservableArray<SeriesViewModel>, serializer?: IModelSerializer);
	    isIncompatible: ko.Observable<boolean>;
	    parent: ko.ObservableArray<SeriesViewModel>;
	    points: ko.ObservableArray<SeriesPointModel>;
	    innerActions: IAction[];
	}
    import SeriesViewViewModel = DevExpress.Reporting.Chart.Internal.Series.SeriesViewViewModel;;
    import SeriesPointModel = DevExpress.Reporting.Chart.Internal.Series.SeriesPointModel;;

}
declare module DevExpress.Reporting.Chart.Internal.Models {

    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export var dataFilterSerializationsInfo: ISerializationInfoArray;
	export class DataFilterModel implements ISerializableModel {
	    static createNew(): DataFilterModel;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    columnName: ko.Observable<string>;
	    name: ko.Computed<string>;
	}
	export var DefaultDataFilterModel: (newVal?: typeof DataFilterModel) => typeof DataFilterModel;

}
declare module DevExpress.Reporting.Chart.Internal.Models {
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;

	export class StripLimitViewModel extends SerializableModel {
	    static from(model: any, serializer?: IModelSerializer): StripLimitViewModel;
	    static toJson(value: any, serializer: any, refs: any): any;
	    constructor(model: any, serializer?: IModelSerializer, info?: ISerializationInfoArray);
	    enabled: ko.Observable<boolean>;
	    axisValue: ko.Observable<string>;
	    _axisValue: ko.Observable<string>;
	}

}
declare module DevExpress.Reporting.Chart.Internal.Models {
    import ChartElementCollectionItemBase = DevExpress.Reporting.Chart.Internal.Models.ChartElementCollectionItemBase;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

	export class ConstantLineViewModel extends ChartElementCollectionItemBase {
	    static from(model: any, serializer?: IModelSerializer): ConstantLineViewModel;
	    constructor(model: any, parent: ko.ObservableArray<ConstantLineViewModel>, serializer?: IModelSerializer);
	    static prefix: string;
	    axisValue: ko.Observable<string>;
	    _axisValue: ko.Observable<string>;
	}

}
declare module DevExpress.Reporting.Chart.Internal.Models {
    import ChartElementCollectionItemBase = DevExpress.Reporting.Chart.Internal.Models.ChartElementCollectionItemBase;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class ScaleBreakViewModel extends ChartElementCollectionItemBase {
	    static from(model: any, serializer?: IModelSerializer): ScaleBreakViewModel;
	    constructor(model: any, parent: ko.ObservableArray<ScaleBreakViewModel>, serializer?: IModelSerializer);
	    static prefix: string;
	}

}
declare module DevExpress.Reporting.Chart.Internal.Models {
    import ChartElementCollectionItemBase = DevExpress.Reporting.Chart.Internal.Models.ChartElementCollectionItemBase;;
    import StripLimitViewModel = DevExpress.Reporting.Chart.Internal.Models.StripLimitViewModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class StripViewModel extends ChartElementCollectionItemBase {
	    static initialModel: {
	        'MinLimit': {
	            '@AxisValueSerializable': string;
	        };
	        'MaxLimit': {
	            '@AxisValueSerializable': string;
	        };
	    };
	    static from(model: any, serializer?: IModelSerializer): StripViewModel;
	    constructor(model: any, parent: ko.ObservableArray<StripViewModel>, serializer?: IModelSerializer);
	    static prefix: string;
	    minLimit: StripLimitViewModel;
	    maxLimit: StripLimitViewModel;
	}

}
declare module DevExpress.Reporting.Chart.Internal.Axis {
    import ConstantLineViewModel = DevExpress.Reporting.Chart.Internal.Models.ConstantLineViewModel;;
    import ScaleBreakViewModel = DevExpress.Reporting.Chart.Internal.Models.ScaleBreakViewModel;;
    import StripViewModel = DevExpress.Reporting.Chart.Internal.Models.StripViewModel;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
	export class AxisXYViewModel extends SerializableModel {
	    static from(info?: ISerializationInfoArray): (model: any, serializer: any) => AxisXYViewModel;
	    static toJson(value: any, serializer: any, refs: any): any;
	    constructor(model: any, serializer?: IModelSerializer, info?: ISerializationInfoArray);
	    constantLines: ko.ObservableArray<ConstantLineViewModel>;
	    scaleBreaks: ko.ObservableArray<ScaleBreakViewModel>;
	    strips: ko.ObservableArray<StripViewModel>;
	}

}
declare module DevExpress.Reporting.Chart.Internal {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var scaleBreakSerializationsInfo: ISerializationInfoArray;
	export var legendName: ISerializationInfo;
	export var stripLimitSerializationsInfo: ISerializationInfoArray;
	export var stripSerializationsInfo: ISerializationInfoArray;
	export var constantLineSerializationsInfo: ISerializationInfoArray;
	export var axisXYSerializationsInfo: ISerializationInfoArray;
	export var secondaryAxisXYSerializationsInfo: ISerializationInfoArray;
	export var radarAxisX: ISerializationInfo;
	export var radarAxisY: ISerializationInfo;
	export var axisX3D: ISerializationInfo;
	export var axisY3D: ISerializationInfo;
	export var axisX: ISerializationInfo;
	export var axisY: ISerializationInfo;

}
declare module DevExpress.Reporting.Chart.Internal.Models {
    import SeriesViewModel = DevExpress.Reporting.Chart.Internal.Series.SeriesViewModel;;
    import SeriesTemplateViewModel = DevExpress.Reporting.Chart.Internal.Series.SeriesTemplateViewModel;;
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

	export class DataContainerViewModel extends SerializableModel {
	    static from(model: any, serializer?: IModelSerializer): DataContainerViewModel;
	    static toJson(value: any, serializer: any, refs: any): any;
	    constructor(model: any, serializer?: IModelSerializer);
	    seriesTemplate: SeriesTemplateViewModel;
	    series: ko.ObservableArray<SeriesViewModel>;
	    dataMember: ko.Observable<string> | ko.Computed<string>;
	    seriesDataMember: ko.Observable<string> | ko.Computed<string>;
	    pivotGridDataSourceOptions: {
	        autoBindingSettingsEnabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    };
	}

}
declare module DevExpress.Reporting.Chart.Internal.Models {
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class LegendViewModel extends SerializableModel {
	    static from(model: any, serializer?: IModelSerializer): LegendViewModel;
	    static toJson(value: any, serializer: any, refs: any): any;
	    constructor(model: any, serializer?: IModelSerializer);
	}

}
declare module DevExpress.Reporting.Chart.Internal.Axis {
    import AxisXYViewModel = DevExpress.Reporting.Chart.Internal.Axis.AxisXYViewModel;;
    import ICollectionItem = DevExpress.Reporting.Chart.Internal.Axis.ICollectionItem;;
    import IAction = DevExpress.Analytics.Utils.IAction;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class SecondaryAxisViewModel extends AxisXYViewModel implements ICollectionItem {
	    static xPrefix: string;
	    static yPrefix: string;
	    constructor(model: any, parent: ko.ObservableArray<SecondaryAxisViewModel>, serializer?: IModelSerializer);
	    readonly axisID: number;
	    parent: ko.ObservableArray<SecondaryAxisViewModel>;
	    innerActions: Array<IAction>;
	}

}
declare module DevExpress.Reporting.Chart.Internal.Models {
    import ChartElementCollectionItemBase = DevExpress.Reporting.Chart.Internal.Models.ChartElementCollectionItemBase;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class AdditionalPaneViewModel extends ChartElementCollectionItemBase {
	    static from(model: any, serializer?: IModelSerializer): AdditionalPaneViewModel;
	    constructor(model: any, parent: ko.ObservableArray<AdditionalPaneViewModel>, serializer?: IModelSerializer);
	    static prefix: string;
	}

}
declare module DevExpress.Reporting.Chart.Internal {
    import SecondaryAxisViewModel = DevExpress.Reporting.Chart.Internal.Axis.SecondaryAxisViewModel;;
    import AdditionalPaneViewModel = DevExpress.Reporting.Chart.Internal.Models.AdditionalPaneViewModel;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
	export interface IDiagramViewModel {
	    axisX?: any;
	    axisY?: any;
	    secondaryAxesX?: ko.ObservableArray<SecondaryAxisViewModel>;
	    secondaryAxesY?: ko.ObservableArray<SecondaryAxisViewModel>;
	    defaultPanes?: any;
	    panes?: ko.ObservableArray<AdditionalPaneViewModel>;
	    getInfo: () => ISerializationInfoArray;
	}
	export class DiagramViewModel extends SerializableModel implements IDiagramViewModel {
	    static createDiagram(model: any, type: any, serializer?: ModelSerializer): IDiagramViewModel;
	    static from(model: any, serializer?: IModelSerializer): DiagramViewModel;
	    static toJson(value: any, serializer: any, refs: any): any;
	    constructor(model: any, serializer?: IModelSerializer);
	    secondaryAxesX: ko.ObservableArray<SecondaryAxisViewModel>;
	    secondaryAxesY: ko.ObservableArray<SecondaryAxisViewModel>;
	    panes: ko.ObservableArray<AdditionalPaneViewModel>;
	}

}
declare module DevExpress.Reporting.Chart.Internal {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var diagram: ISerializationInfo;
	export var secondaryAxesX: ISerializationInfo;
	export var secondaryAxesY: ISerializationInfo;
	export var panes: ISerializationInfo;
	export var diagramSerializationsInfo: ISerializationInfoArray;
	export var diagramMapper: {
	    [key: string]: {
	        info: ISerializationInfoArray;
	        type: string;
	    };
	};

}
declare module DevExpress.Reporting.Designer.Internal {
	export var reportStorageWebIsRegister: (newVal?: boolean) => boolean;
	export var limitation: (newVal?: boolean) => boolean;

}
declare module DevExpress.Reporting.Chart.Internal {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var commonSeriesPointsSortingKeys: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[], bubbleSeriesPointsSortingKeys: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[], rangeSeriesPointsSortingKeys: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[], stockSeriesPointsSortingKeys: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[];
	export var seriesPointsSorting: ISerializationInfo, seriesPointsSortingKey: ISerializationInfo, legendTextPattern: ISerializationInfo, _argumentScaleTypeValidatorOptions: {
	    _seriesViewModel: any;
	    onInitialized: (e: any) => void;
	    validationRules: {
	        type: string;
	        reevaluate: boolean;
	        validationCallback: (params: any) => boolean;
	    }[];
	}, argumentScaleType: ISerializationInfo, valueScaleType: ISerializationInfo, labelsVisibility: ISerializationInfo, argumentDataMember: ISerializationInfo, valueDataMembersSerializable: ISerializationInfo;
	export var barPositionValues: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[];
	export var piePositionValues: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[];
	export var funnelPositionValues: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[];
	export var waterfallPositionValues: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[];
	export var padding: ISerializationInfo;
	export var seriesLabelSerializationsInfo: ISerializationInfoArray;
	export var seriesLabel: ISerializationInfo;
	export var pivotGridDataSourceOptions: ISerializationInfo;
	export var valuesSerializable: ISerializationInfo, argumentSerializable: ISerializationInfo, colorSerializable: ISerializationInfo;
	export var seriesPointSerializationsInfo: ISerializationInfo[];
	export var points: ISerializationInfo;
	export var createViewsArray: (limitation: any) => any[];
	export var view: ISerializationInfo;
	export var viewBindableSerializationInfo: ISerializationInfo;
	export var qualitativeSummaryOptions: ISerializationInfo;
	export var numericSummaryOptions: ISerializationInfo;
	export var dateTimeSumaryOptions: ISerializationInfo;
	export var seriesTemplateSerializationsInfo: ISerializationInfoArray;
	export var seriesTemplate: ISerializationInfo;
	export var seriesSerializationsInfo: ISerializationInfoArray;
	export var seriesSerializable: ISerializationInfo;
	export var seriesDataMember: ISerializationInfo;
	export var dataContainerSerializationsInfo: ISerializationInfoArray;
	export var dataContainer: ISerializationInfo;
	export var emptyChartTextSerializationsInfo: ISerializationInfoArray;
	export var emptyChartText: ISerializationInfo;
	export var titleSerializationsInfo: ISerializationInfoArray;
	export var titles: ISerializationInfo;
	export var legendSerializationsInfo: ISerializationInfoArray;
	export var legend: ISerializationInfo;
	export var additionalLegendSerializationsInfo: ISerializationInfoArray;
	export var legends: ISerializationInfo;
	export var appearanceName: ISerializationInfo;
	export var paletteName: ISerializationInfo;
	export var backImage: ISerializationInfo;
	export var chartSerializationsInfo: ISerializationInfoArray;
	export var chart: ISerializationInfo;
	export var chartDataMember: ISerializationInfo;
	export var chartSeriesDataMember: ISerializationInfo;
	export var fakeChartSerializationInfo: ISerializationInfoArray;
	export var chartControlSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Chart.Internal.Models {
    import ChartElementCollectionItemBase = DevExpress.Reporting.Chart.Internal.Models.ChartElementCollectionItemBase;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class AdditionalLegendViewModel extends ChartElementCollectionItemBase {
	    static from(model: any, serializer?: IModelSerializer): AdditionalLegendViewModel;
	    constructor(model: any, parent: ko.ObservableArray<AdditionalLegendViewModel>, serializer?: IModelSerializer);
	    static prefix: string;
	}

}
declare module DevExpress.Reporting.Chart.Internal.Models {
    import DiagramViewModel = DevExpress.Reporting.Chart.Internal.DiagramViewModel;;
    import TitleViewModel = DevExpress.Reporting.Chart.Internal.Models.TitleViewModel;;
    import AdditionalLegendViewModel = DevExpress.Reporting.Chart.Internal.Models.AdditionalLegendViewModel;;
    import DataContainerViewModel = DevExpress.Reporting.Chart.Internal.Models.DataContainerViewModel;;
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

	export class ChartViewModel extends SerializableModel {
	    static from(model: any, serializer?: IModelSerializer): ChartViewModel;
	    static toJson(value: any, serializer: any, refs: any): any;
	    private _patchView;
	    private _patchSeries;
	    _createDiagram(model: any, oldType: ko.Observable<string>, serializer: any): void;
	    constructor(model: any, serializer?: IModelSerializer);
	    barDistance: ko.Observable<number>;
	    barDistanceFixed: ko.Observable<number>;
	    titles: ko.ObservableArray<TitleViewModel>;
	    legends: ko.ObservableArray<AdditionalLegendViewModel>;
	    dataContainer: DataContainerViewModel;
	    diagram: ko.Observable<DiagramViewModel> | ko.Computed<DiagramViewModel>;
	}

}
declare module DevExpress.Reporting.Chart.Internal {
    import ReorderTreeListDragDropHelper = DevExpress.Analytics.Widgets.Internal.ReorderTreeListDragDropHelper;;

	export class ChartTreeListDragDropHelper extends ReorderTreeListDragDropHelper {
	    getSiblings(): ObservableArray<any>;
	    stop(): void;
	}

}
declare module DevExpress.Reporting.Chart.Internal {
	/// <reference types="jqueryui" />
    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;
    import ObjectStructureTreeListController = DevExpress.Analytics.Internal.ObjectStructureTreeListController;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;

    import ChartTreeListDragDropHelper = DevExpress.Reporting.Chart.Internal.ChartTreeListDragDropHelper;;
	export class ChartStructureTreeListController extends ObjectStructureTreeListController {
	    private surface?;
	    private undoEngine?;
	    private dragdrophandler?;
	    constructor(propertyNames?: string[], listPropertyNames?: string[], selectCallback?: (value: TreeListItemViewModel) => void, surface?: any, undoEngine?: any, dragdrophandler?: any);
	}
	export class ChartDragDropHandler extends DragDropHandler {
	    private undoEngine;
	    dispose(): void;
	    constructor(surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, dragHelperContent: DragHelperContent);
	    startDrag(draggable: any): void;
	    drag(event: JQueryEventObject, ui: JQueryUI.DraggableEventUIParams): void;
	    doStopDrag(ui: any, draggable: any, event: JQueryEventObject): void;
	    dragDropHelper: ChartTreeListDragDropHelper;
	}

}
declare module DevExpress.Reporting.Chart.Internal {
    import ObjectStructureProvider = DevExpress.Analytics.Internal.ObjectStructureProvider;;
	export class ChartStructureObjectProvider extends ObjectStructureProvider {
	    getClassName(instance: any): any;
	    createArrayItem(currentTarget: Array<any>, result: IDataMemberInfo[], propertyName?: any): void;
	    constructor(target: any, displayName?: string, localizationId?: string);
	}
    import IDataMemberInfo = null.IDataMemberInfo;;

}
declare module DevExpress.Reporting.Chart.Internal {
	export var HandlerUri: (newVal?: string) => string;

}
declare module DevExpress.Reporting.Chart.Internal {
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
	export class ChartRequests {
	    static getChartImage(uri: string, chartLayout: any, width: number, height: number): any;
	    static fieldListCallback(request: IPathRequest): JQueryPromise<IDataMemberInfo[]>;
	}

}
declare module DevExpress.Reporting.Chart.Internal {
    import ChartControlViewModel = DevExpress.Reporting.Chart.Internal.ChartControlViewModel;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import ISize = DevExpress.Analytics.Elements.ISize;;
	export class ChartControlSurface extends Disposable {
	    constructor(control: ChartControlViewModel, zoom?: ko.Observable<number>, size?: ISize);
	    width: ko.Computed<number>;
	    height: ko.Computed<number>;
	    imageSrc: ko.Observable<string>;
	    zoom: ko.Observable<number> | ko.Computed<number>;
	    templateName: string;
	}

}
declare module DevExpress.Reporting.Chart.Internal {
    import FieldListProvider = DevExpress.Analytics.Internal.FieldListProvider;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;;
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;
    import IAction = DevExpress.Analytics.Utils.IAction;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;

    import ChartStructureTreeListController = DevExpress.Reporting.Chart.Internal.ChartStructureTreeListController;;
    import ChartStructureObjectProvider = DevExpress.Reporting.Chart.Internal.ChartStructureObjectProvider;;
    import ChartControlViewModel = DevExpress.Reporting.Chart.Internal.ChartControlViewModel;;
	export var ActionId: {
	    Save: string;
	};
	export var controlsFactory: ControlsFactory;
	export function registerControls(): void;
	export function _setChartLimitation(chartLimitation: any): void;
	export function updateChartSurfaceContentSize(element: any, surfaceSize: ko.Observable<number> | ko.Computed<number>, rtl?: boolean): () => void;
	export interface IChartControlCallbacks {
	    fieldLists?: (IPathRequest: any) => JQueryPromise<IDataMemberInfo[]>;
	    customizeActions?: (actions: IAction[]) => void;
	    init?: (designerModel: any) => void;
	}
	export interface IChartDesignerOptions {
	    data: {
	        chartSource?: ko.Observable<any>;
	        chart?: ko.Observable<ChartControlViewModel>;
	        dataSource?: ko.Observable<IDataSourceInfo>;
	        availableChartDataSources?: ko.Computed<Array<{
	            displayName: string;
	            value: any;
	        }>>;
	        width?: number;
	        height?: number;
	    };
	    fieldListProvider?: FieldListProvider;
	    callbacks?: IChartControlCallbacks;
	    visible?: ko.Observable<boolean>;
	    localization?: any;
	    rtl?: boolean;
	}
	export function subscribeTreelistArray(chartStructureProvider: any, array: ko.ObservableArray<any>, getPath: () => string[], subscribeNewItem?: (item: any, array: any, path: any) => void): ko.Subscription;
	export function getPropertyInfo(serializationsInfo: ISerializationInfoArray, index: number, pathComponets: any): DevExpress.Analytics.Utils.ISerializationInfo;
	export function createChartStructure(chart: ChartControlViewModel, selectedItem: any, subscriptions: any, surface: any, undoEngine: any, dragdrophandler: any): {
	    itemsProvider: ChartStructureObjectProvider;
	    treeListController: ChartStructureTreeListController;
	    expandRootItems: boolean;
	    selectedPath: ko.Observable<string> | ko.Computed<string>;
	};
	export function createChartDesigner(element: Element, options: IChartDesignerOptions, applyBindings?: boolean): any;

}
declare module DevExpress.Reporting.Chart.Internal {
    import ChartViewModel = DevExpress.Reporting.Chart.Internal.Models.ChartViewModel;;
    import IChartControlCallbacks = DevExpress.Reporting.Chart.Internal.IChartControlCallbacks;;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;
    import FieldListProvider = DevExpress.Analytics.Internal.FieldListProvider;;
    import ISize = DevExpress.Analytics.Elements.ISize;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export interface IChartControlOptions {
	    chartSource?: any;
	    chart?: ChartViewModel;
	    dataSource: ko.Observable<IDataSourceInfo> | ko.Computed<IDataSourceInfo>;
	    size?: ISize;
	    disabled?: ko.Observable<boolean> | ko.Computed<boolean>;
	    callbacks?: IChartControlCallbacks;
	    parameters?: ko.ObservableArray;
	}
	export class ChartControlViewModel extends Disposable {
	    getInfo(): DevExpress.Analytics.Utils.ISerializationInfoArray;
	    getControlFactory(): DevExpress.Analytics.Utils.ControlsFactory;
	    isSeriesPropertyDisabled(name: any): boolean;
	    isSeriesTemplatePropertyDisabled(name: any): boolean;
	    private _getSeriesActualArgumentScaleType;
	    private _initSeries;
	    private _initChartElementFunctions;
	    constructor(options: IChartControlOptions);
	    getPath(propertyName: string): string;
	    serialize(): any;
	    save(): any;
	    isPropertyDisabled(name: string): boolean;
	    chart: ChartViewModel;
	    onSave: (data: any) => void;
	    dataSource: ko.Observable<IDataSourceInfo> | ko.Computed<IDataSourceInfo>;
	    seriesDataMember: ko.Observable<string> | ko.Computed<string>;
	    dataMember: ko.Observable<string> | ko.Computed<string>;
	    fieldListProvider: ko.Observable<FieldListProvider>;
	    parameters: ko.ObservableArray;
	}

}
declare module DevExpress.Reporting.Chart.Internal.Widgets {
    import Editor = DevExpress.Analytics.Widgets.Editor;;

	export class ChartDataSourceEditor extends Editor {
	    generateOptions(dataSources: ko.Computed<Array<{
	        displayName: string;
	        value: any;
	    }>>, popupContainer: string): any;
	    options: any;
	}

}
declare module DevExpress.Reporting.Chart.Internal.Widgets {
    import Editor = DevExpress.Analytics.Widgets.Editor;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;

	export class CollectionLookupEditorModel extends Editor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    readonly editors: any;
	    array: ko.Computed<any>;
	    selectedItem: ko.Observable<any>;
	}

}
declare module DevExpress.Reporting.Chart.Internal.Widgets {
    import Editor = DevExpress.Analytics.Widgets.Editor;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;

	export class ViewEditor extends Editor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    generateHeaderValue(undoEngine: ko.Observable<UndoEngine>): ko.Computed<string>;
	    generateViewItems(): any[];
	    generateViewClassName(value: any, isTemplate?: boolean): any;
	    viewItems: any[];
	    headerValue: ko.Computed<string>;
	    contentValue: ko.Computed<any>;
	}

}
declare module DevExpress.Reporting.Chart.Internal.Widgets {
    import FieldListEditor = DevExpress.Analytics.Widgets.FieldListEditor;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export class ChartDataMemberEditor extends FieldListEditor {
	    private _isNumber;
	    private _isDate;
	    private _getArgumentDataMemberFilter;
	    private _getValueDataMemberFilter;
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>);
	}

}
declare module DevExpress.Reporting.Chart.Internal.Widgets {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class PointsEditor extends Editor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    addPoint(model: any): SeriesPointModel;
	}
    import SeriesPointModel = DevExpress.Reporting.Chart.Internal.Series.SeriesPointModel;;

}
declare module DevExpress.Reporting.Chart.Internal.Widgets {
    import Editor = DevExpress.Analytics.Widgets.Editor;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;

	export class ChartDependencyEditor extends Editor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    getDependencyOptions(templateOptions: any, propertyName: any, depPropertyName: any): any;
	    depProperty: any;
	    bindableOptions: any;
	}

}
declare module DevExpress.Reporting.Chart.Internal.Widgets {
    import ColorPickerEditor = DevExpress.Analytics.Widgets.ColorPickerEditor;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;

	export class UndoColorPickerEditor extends ColorPickerEditor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>);
	    generateValue(undoEngine: ko.Observable<UndoEngine>): ko.Computed<any>;
	    generatedValue: ko.Computed<any>;
	}

}
declare module DevExpress.Reporting.Chart.Internal.Widgets {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
    import Editor = DevExpress.Analytics.Widgets.Editor;;

	export class PositionSeriesLabelEditor extends Editor {
	    private _positionChooser;
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    values: ko.Computed<{
	        displayValue: string;
	        value: string;
	    }[]>;
	}

}
declare module DevExpress.Reporting.Chart.Internal {
	export function registerEditorTemplates(): void;

}
declare module DevExpress.Reporting.Chart.Internal.Widgets {
	export {};

}
declare module DevExpress.Reporting {
	export interface IEnumType {
	    enumType: string;
	    values: Array<IEnumValue>;
	}
	export interface IEnumValue {
	    displayName: string;
	    name: string;
	    value: any;
	}

}
declare module DevExpress.Reporting {
	export class ImageSource {
	    sourceType: string;
	    data: string;
	    constructor(sourceType: string, data: string);
	    getDataUrl(): string;
	    static parse(val: string): ImageSource;
	    static toString(val: ImageSource): string;
	}

}
declare module DevExpress.Reporting.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;

	export var previewBackColor: ISerializationInfo;
	export var previewSides: ISerializationInfo;
	export var previewBorderColor: ISerializationInfo;
	export var previewBorderStyle: ISerializationInfo;
	export var previewBorderDashStyle: ISerializationInfo;
	export var previewBorderWidth: ISerializationInfo;
	export var previewForeColor: ISerializationInfo;
	export var previewFont: ISerializationInfo;
	export var previewPadding: ISerializationInfo;
	export var previewTextAlignment: ISerializationInfo;
	export var brickStyleSerializationsInfo: ISerializationInfoArray;
	export var defaultCulture: string;
	export var availableCultures: ko.Observable;

}
declare module DevExpress.Reporting {
	export interface IKeyValuePair<T> {
	    Key: string;
	    Value: T;
	}
	export function convertMapToKeyValuePair(object: any): any[];

}
declare module DevExpress.Reporting {
	export const version = "%VERSION%";

}
declare module DevExpress.Reporting {
	export {};

}
declare module DevExpress.Reporting.Viewer.Editing {
    import ImageSource = DevExpress.Reporting.ImageSource;;
    import IEditingFieldViewModel = DevExpress.Reporting.Viewer.Editing.IEditingFieldViewModel;
    import EditingField = DevExpress.Reporting.Viewer.Editing.EditingField;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export enum GlyphStyle {
	    StandardBox1 = 0,
	    StandardBox2 = 1,
	    YesNoBox = 2,
	    YesNoSolidBox = 3,
	    YesNo = 4,
	    RadioButton = 5,
	    Smiley = 6,
	    Thumb = 7,
	    Toggle = 8,
	    Star = 9,
	    Heart = 10
	}
	export enum CheckState {
	    Unchecked = 0,
	    Checked = 1,
	    Indeterminate = 2
	}
	export function createCustomGlyphStyleCss(imageSource: ImageSource): {};
	export function getCheckBoxTemplate(style: string, state: string, customGlyph: {}): any;
	export class CheckEditingFieldViewModel extends Disposable implements IEditingFieldViewModel {
	    private _editingFieldsProvider;
	    private _toggleCheckState;
	    constructor(field: EditingField, pageWidth: number, pageHeight: number, zoom: ko.Observable<number> | ko.Computed<number>, editingFieldsProvider: () => EditingField[]);
	    template: string;
	    field: EditingField;
	    containerStyle: () => {};
	    checkStyle: () => {};
	    checkStateStyleIcon: any;
	    customGlyphStyleCss: any;
	    zoom: ko.Observable<number> | ko.Computed<number>;
	    focused: ko.Observable<boolean>;
	    onKeyDown(_: any, e: any): void;
	    onBlur(): void;
	    onFocus(): void;
	    onClick(_: any, e: any): void;
	    checked(): boolean;
	    toggleCheckState(): void;
	}

}
declare module DevExpress.Reporting.Viewer.Widgets.Internal {
	export enum PictureEditorActionId {
	    OpenFile = 0,
	    PickImage = 1,
	    Alignment = 2,
	    Brush = 3,
	    Clear = 4,
	    Reset = 5
	}
	export interface IImageEditorItem {
	    data?: string;
	    url?: string;
	    text?: string;
	    visible?: boolean | ko.Computed<boolean>;
	}

}
declare module DevExpress.Reporting.Viewer.Widgets {
	export enum PictureEditMode {
	    Image = 0,
	    Signature = 1,
	    ImageAndSignature = 2
	}

}
declare module DevExpress.Reporting.Viewer.Widgets.Internal {
    import PictureEditorActionId = DevExpress.Reporting.Viewer.Widgets.Internal.PictureEditorActionId;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export class PictureEditorToolbarItem implements IPictureEditorToolbarItem {
	    constructor(options: IPictureEditorToolbarItemOptions);
	    dispose(): void;
	    id: PictureEditorActionId;
	    icon: string;
	    title: string;
	    active: ko.Observable<boolean> | ko.Computed<boolean>;
	    renderedHandler: (element: HTMLElement, model: any) => void;
	    action: (e: any, model: any) => void;
	}
	export class PopupComponentBase extends Disposable {
	    private _component;
	    getComponent(): IPopupComponent;
	    onContentReady: (e: {
	        element: any;
	        component: IPopupComponent;
	        model: any;
	    }) => void;
	    closeOnOutsideClick: (e: {
	        target: HTMLElement;
	    }) => boolean;
	    dispose(): void;
	}
	export class PictureEditorToolbarItemWithPopup extends PictureEditorToolbarItem implements IPictureEditorToolbarItemWithPopup {
	    private _popup;
	    constructor(options: IPictureEditorToolbarItemWithTemplateOptions<IPictureEditorActionPopupOptions>);
	    dispose(): void;
	    template: string;
	    templateOptions: IPictureEditorActionPopup;
	}
	export interface IPictureEditorToolbarItem extends IPictureEditorToolbarItemOptions {
	    dispose: () => void;
	}
	export interface IPictureEditorToolbarItemWithPopup extends IPictureEditorToolbarItemWithTemplateOptions<IPictureEditorActionPopup> {
	    dispose: () => void;
	}
	export interface IPictureEditorToolbarItemWithTemplateOptions<T> extends IPictureEditorToolbarItemOptions {
	    template: string;
	    templateOptions?: T;
	}
	export interface IPictureEditorToolbarItemOptions {
	    id: PictureEditorActionId;
	    icon: string;
	    action?: (e: any, model: any) => void;
	    active: ko.Observable<boolean> | ko.Computed<boolean>;
	    renderedHandler?: (element: HTMLElement, model: any) => void;
	    title: string;
	}
	export interface IPictureEditorActionPopup extends IPictureEditorActionPopupOptions {
	    component: IPopupComponent;
	    onContentReady: (e: {
	        element: any;
	        component: IPopupComponent;
	        model: IPictureEditorActionPopupOptions;
	    }) => void;
	    onShown: (e: {
	        element: any;
	        component: IPopupComponent;
	        model: IPictureEditorActionPopupOptions;
	    }) => void;
	    closeOnOutsideClick: (e: {
	        target: any;
	    }) => boolean;
	}
	export interface IPopupComponent {
	    content: () => Element;
	    $element: () => JQuery;
	    dispose: () => void;
	    registerKeyHandler: (key: string, handler: (e: any) => void) => void;
	}
	export interface IPictureEditorActionPopupOptions {
	    width: string;
	    height: string;
	    contentTemplate: string;
	    contentData: any;
	    container: string;
	    target: string;
	    boundary: string | any;
	    getPositionTarget: () => any;
	    visible: ko.Observable<boolean> | ko.Computed<boolean>;
	}

}
declare module DevExpress.Reporting.Viewer.Widgets.Internal {
    import ImageSizeMode = DevExpress.Reporting.Viewer.Editing.ImageSizeMode;
    import ImageAlignment = DevExpress.Reporting.Viewer.Editing.ImageAlignment;;

	export class ImagePainter {
	    private _drawImage;
	    private _getImageSize;
	    private _getImageCoordinate;
	    constructor(options: {
	        imageSource: ko.Observable<string>;
	        sizeMode: ko.Observable<ImageSizeMode>;
	        alignment: ko.Observable<ImageAlignment>;
	    });
	    refresh(context: CanvasRenderingContext2D, scale?: number, contentSize?: any): JQuery.Promise<any, any, any>;
	    format: ko.Observable<string>;
	    image: ko.Observable<string> | ko.Computed<string>;
	    sizeMode: ko.Observable<ImageSizeMode>;
	    alignment: ko.Observable<ImageAlignment>;
	}

}
declare module DevExpress.Reporting.Viewer.Widgets.Internal {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export class SignaturePainter extends Disposable {
	    dispose(): void;
	    private _points;
	    private _lastX;
	    private _lastY;
	    private _drawPath;
	    private _drawCircle;
	    private _drawAllPoints;
	    drawCircle(context: any, x: any, y: any, color: any, width: any): void;
	    drawPath(context: any, x: any, y: any, color: any, width: any): void;
	    resetLastPosition(): void;
	    resetPoints(): void;
	    reset(): void;
	    refresh(context: any): void;
	    constructor();
	    hasPoints: ko.Computed<boolean>;
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
    import IBrickNode = DevExpress.Reporting.Viewer.Utils.IBrickNode;;
    import EditingField = DevExpress.Reporting.Viewer.Editing.EditingField;;

	export function convertToPercent(childSize: any, parentSize: any): string;
	export function getBrickValueForKey(brick: IBrickNode, key?: string): any;
	export function brickText(brick: IBrickNode, editingFieldsProvider?: () => EditingField[]): any;
	export function updateBricksPosition(brick: IBrickNode, height: any, width: any): void;
	export function initializeBrick(brick: IBrickNode, processClick: (target: IBrickNode, e?: JQueryEventObject) => void, zoom: ko.Observable<number> | ko.Computed<number>, editingFieldBricks: IBrickNode[]): void;

}
declare module DevExpress.Reporting.Internal {

    import IDisposable = DevExpress.Analytics.Utils.IDisposable;;
	export var cultureInfo: {};
	export var generateGuid: () => string;
	export function createFullscreenComputed(element: Element, parent: IDisposable): ko.Computed<boolean>;
	export function processZoomFactor(accessibilityCompliant: any): void;
	export function transformNewLineCharacters(value: string): string;

}
declare module DevExpress.Reporting.Viewer.Settings {

	export interface IMessageHandler {
	    processError: (message: string, showForUser?: boolean, prefix?: string) => void;
	    processMessage: (message: string, showForUser?: boolean) => void;
	    processWarning: (message: string, showForUser?: boolean) => void;
	}
	export var EditablePreviewEnabled: ko.Observable<boolean>;
	export var SearchAvailable: ko.Observable<boolean>;
	export var ReportServerInvokeUri: string;
	export var ReportServerExportUri: string;
	export var AsyncExportApproach: (newVal?: boolean) => boolean;
	export var MessageHandler: (newVal?: IMessageHandler) => IMessageHandler;
	export var HandlerUri: (newVal?: string) => string;
	export var previewDefaultResolution: (newVal?: number) => number;
	export var ReportServerDownloadUri: (newVal?: string) => string;
	export var PollingDelay: (newVal?: number) => number;
	export var TimeOut: (newVal?: number) => number;

}
declare module DevExpress.Reporting.Viewer.Internal {
	export function getCurrentResolution(zoom: any): number;
	export function getImageBase64(url: any): JQuery.Promise<string, any, any>;
	export function getEnumValues(enumType: any): string[];
	export function safelyRunWindowOpen(url: string, target?: string): Window;

}
declare module DevExpress.Reporting.Viewer {
    import AccessibilityControlElementBase = DevExpress.Analytics.Internal.AccessibilityControlElementBase;
    import AccessibilityKeyboardHelperBase = DevExpress.Analytics.Internal.AccessibilityKeyboardHelperBase;;
    import IEditingFieldViewModel = DevExpress.Reporting.Viewer.Editing.IEditingFieldViewModel;;
	export class PreviewEditingFieldsKeyboardHelper extends AccessibilityKeyboardHelperBase {
	    controlElementClassName: string;
	    accessibilityCompliantEnabled: boolean;
	    initialize(): void;
	    clickHandler(): void;
	    itemHandleEnterKey(e: any, index: any): boolean;
	    itemHandleSpaceKey(e: any, index: any): boolean;
	    createControlElement(element: HTMLElement, index?: number): PreviewEditingFieldsElement;
	} class PreviewEditingFieldsElement extends AccessibilityControlElementBase {
	    element: HTMLElement;
	    private model;
	    private _processFocus;
	    dispose(): void;
	    actionExecute(e: any): void;
	    private _activateHandler;
	    private _blur;
	    constructor(element: HTMLElement, model: IEditingFieldViewModel);
	}
	export {};

}
declare module DevExpress.Reporting.Viewer.Internal {
    import EditingField = DevExpress.Reporting.Viewer.Editing.EditingField;
    import IEditingFieldViewModel = DevExpress.Reporting.Viewer.Editing.IEditingFieldViewModel;;
    import IBrickNode = DevExpress.Reporting.Viewer.Utils.IBrickNode;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import PreviewEditingFieldsKeyboardHelper = DevExpress.Reporting.Viewer.PreviewEditingFieldsKeyboardHelper;;
	export interface IPreviewPageOwner {
	    _pageWidth: any;
	    _pageHeight: any;
	    _zoom: ko.Observable<number> | ko.Computed<number>;
	    _currentDocumentId: ko.Observable<string> | ko.Computed<string>;
	    _unifier: ko.Observable<string> | ko.Computed<string>;
	    _pageBackColor?: ko.Observable<string> | ko.Computed<string>;
	    _editingFields: ko.Observable<EditingField[]>;
	    loading?: ko.Observable<boolean> | ko.Computed<boolean>;
	    processClick?: (target: IBrickNode) => void;
	    _closeDocumentRequests?: {
	        [key: string]: boolean;
	    };
	}
	export class PreviewPage extends Disposable {
	    private _initializeEditingFields;
	    private _getPixelRatio;
	    private _onPageLoaded;
	    private _onPageLoadFailed;
	    constructor(preview: IPreviewPageOwner, pageIndex: number, processClick?: (target: IBrickNode) => void, loading?: ko.Observable<boolean>);
	    updateSize(zoom?: number): number;
	    clearBricks(): void;
	    dispose(): void;
	    _setPageImgSrc(documentId: string, unifier: string, zoom?: number): void;
	    _clear(): void;
	    initializeBrick(brick: IBrickNode, processClick: (target: IBrickNode) => void, zoom: ko.Observable<number> | ko.Computed<number>, editingFieldBricks: IBrickNode[]): void;
	    clickToBrick(s: PreviewPage, e: JQueryEventObject): void;
	    getBricksFlatList(brick: IBrickNode): IBrickNode[];
	    editingFields: ko.Computed<IEditingFieldViewModel[]>;
	    isClientVisible: ko.Observable<boolean>;
	    documentId: ko.Observable<string> | ko.Computed<string>;
	    originalHeight: ko.Observable<number>;
	    originalWidth: ko.Observable<number>;
	    selectBrick: (path: string, ctrlKey?: boolean) => void;
	    resetBrickRecusive: (brick: IBrickNode) => void;
	    getBricks: (pageIndex: number) => void;
	    loadingText: string;
	    realZoom: ko.Observable<number>;
	    actualResolution: number;
	    isEmpty: boolean;
	    pageIndex: number;
	    pageLoading: ko.Observable<boolean> | ko.Computed<boolean>;
	    _currentScaleFactor: any;
	    currentScaleFactor: ko.Observable<number>;
	    zoom: ko.Observable<number> | ko.Computed<number>;
	    width: ko.Observable<number> | ko.Computed<number>;
	    height: ko.Observable<number> | ko.Computed<number>;
	    color: string;
	    imageHeight: ko.Observable<number>;
	    imageWidth: ko.Observable<number>;
	    imageSrc: ko.Observable<string>;
	    displayImageSrc: ko.Observable<string>;
	    brick: ko.Observable<IBrickNode>;
	    brickLoading: ko.Observable<boolean>;
	    brickColumnWidthArray: Array<number>;
	    bricks: ko.Computed<IBrickNode[]>;
	    activeBricks: ko.Computed<IBrickNode[]>;
	    clickableBricks: ko.Computed<IBrickNode[]>;
	    active: ko.Observable<boolean>;
	    maxZoom: number;
	    disableResolutionReduction: boolean;
	    editingFieldsKeyboardHelper: PreviewEditingFieldsKeyboardHelper;
	    private _lastGetPageDeferred;
	    private _lastZoom;
	    private _selectedBrickPath;
	    private _isDisposed;
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
    import PreviewPage = DevExpress.Reporting.Viewer.Internal.PreviewPage;;
	export class PreviewSelection {
	    private _element;
	    private _page;
	    private _click;
	    static started: boolean;
	    static disabled: boolean;
	    private _$element;
	    private _$selectionContent;
	    private _bodyEvents;
	    private _startRect;
	    private _updateSelectionContent;
	    private _mouseMove;
	    private _mouseUp;
	    private _mouseDown;
	    constructor(_element: HTMLElement, _page: PreviewPage, _click: (pageIndex: number) => void);
	    private _dispose;
	    dispose: () => void;
	}

}
declare module DevExpress.Reporting.Viewer.Editing {
    import IEditingFieldViewModel = DevExpress.Reporting.Viewer.Editing.IEditingFieldViewModel;
    import EditingField = DevExpress.Reporting.Viewer.Editing.EditingField;
    import IBounds = DevExpress.Reporting.Viewer.Editing.IBounds;
    import ImageAlignment = DevExpress.Reporting.Viewer.Editing.ImageAlignment;
    import ImageSizeMode = DevExpress.Reporting.Viewer.Editing.ImageSizeMode;;
    import PictureEditMode = DevExpress.Reporting.Viewer.Widgets.PictureEditMode;;
    import IPictureEditorOptions = DevExpress.Reporting.Viewer.Widgets.Internal.IPictureEditorOptions;
    import IPictureEditorPopupTargetOptions = DevExpress.Reporting.Viewer.Widgets.Internal.IPictureEditorPopupTargetOptions;
    import IPictureEditorCallbacks = DevExpress.Reporting.Viewer.Widgets.Internal.IPictureEditorCallbacks;
    import PictureEditorModel = DevExpress.Reporting.Viewer.Widgets.Internal.PictureEditorModel;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export class ImageEditingFieldViewModel extends Disposable implements IEditingFieldViewModel {
	    field: EditingField;
	    zoom: ko.Observable<number> | ko.Computed<number>;
	    protected bounds: IBounds;
	    static __DefaultImageType: string;
	    protected popupTarget: string;
	    constructor(field: EditingField, pageWidth: number, pageHeight: number, zoom: ko.Observable<number> | ko.Computed<number>, bounds: IBounds);
	    getImage(): any;
	    getImageType(): any;
	    getPictureEditorOptions(): IPictureEditorOptions;
	    alignment: ko.Computed<ImageAlignment>;
	    sizeMode: ko.Computed<ImageSizeMode>;
	    editMode: PictureEditMode;
	    popupOptions: IPictureEditorPopupTargetOptions;
	    template: string;
	    active: ko.Observable<boolean>;
	    containerStyle: () => {};
	    callbacks: IPictureEditorCallbacks;
	    onKeyDown(_: any, e: any): void;
	    onFocusIn(s: PictureEditorModel): void;
	    onDraw(s: PictureEditorModel): void;
	    onBlur(s: PictureEditorModel): void;
	}

}
declare module DevExpress.Reporting.Viewer.Widgets.Internal {
    import ImageSizeMode = DevExpress.Reporting.Viewer.Editing.ImageSizeMode;
    import ImageAlignment = DevExpress.Reporting.Viewer.Editing.ImageAlignment;;
    import ImagePainter = DevExpress.Reporting.Viewer.Widgets.Internal.ImagePainter;;
    import SignaturePainter = DevExpress.Reporting.Viewer.Widgets.Internal.SignaturePainter;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export interface IPainterOptions {
	    imageSource: string;
	    imageType: string;
	    zoom: ko.Observable<number> | ko.Computed<number>;
	    sizeMode: ImageSizeMode;
	    alignment: ImageAlignment;
	    canDraw: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export class Painter extends Disposable {
	    private $element;
	    private _context;
	    private _getContextPoint;
	    private _pointerDownHandler;
	    private _pointerMoveHandler;
	    private _pointerLeaveHandler;
	    private _addEvents;
	    private _removeEvents;
	    private _setCanvasSize;
	    private _cleanCanvas;
	    constructor(options: IPainterOptions);
	    clear(): void;
	    refresh(): void;
	    initSize(element: JQuery, zoom: number): void;
	    initCanvas(element: JQuery, zoom: number): void;
	    imageFormatByType(imageType: string): string;
	    getImage(): string;
	    hasSignature(): boolean;
	    dispose(): void;
	    reset(initialImage: any, initialAlignment: any, initialSizeMode: any, initialImageType: any): void;
	    initialSize: {
	        width: number;
	        height: number;
	    };
	    canDraw: boolean;
	    height: number;
	    format: (newVal?: string) => string;
	    image: ko.Observable<string> | ko.Computed<string>;
	    imageSizeMode: ko.Observable<ImageSizeMode>;
	    imageAlignment: ko.Observable<ImageAlignment>;
	    zoom: ko.Observable<number> | ko.Computed<number>;
	    scale: ko.Observable<number> | ko.Computed<number>;
	    lineWidth: ko.Observable<number>;
	    lineColor: ko.Observable<string>;
	    imagePainter: ImagePainter;
	    signaturePainter: SignaturePainter;
	}

}
declare module DevExpress.Reporting.Viewer.Widgets.Internal {
    import PictureEditorToolbarItem = DevExpress.Reporting.Viewer.Widgets.Internal.PictureEditorToolbarItem;
    import PictureEditorToolbarItemWithPopup = DevExpress.Reporting.Viewer.Widgets.Internal.PictureEditorToolbarItemWithPopup;;
    import PictureEditorModel = DevExpress.Reporting.Viewer.Widgets.Internal.PictureEditorModel;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IImageEditorItem = DevExpress.Reporting.Viewer.Widgets.Internal.IImageEditorItem;;
	export class PictureEditorActionProvider extends Disposable {
	    private _editorModel;
	    private _popupOptions;
	    static colors: string[];
	    private _getValues;
	    private _getColorValues;
	    private _initPopupOptions;
	    createOpenFileAction(action: (e: any) => void): PictureEditorToolbarItem;
	    createImagePickerAction(images: IImageEditorItem[], filterEnabled: boolean, action: (base64: string) => void): PictureEditorToolbarItemWithPopup;
	    createSizingAction(): PictureEditorToolbarItemWithPopup;
	    createBrushAction(): PictureEditorToolbarItemWithPopup;
	    createResetItem(action: () => void): PictureEditorToolbarItem;
	    createClearItem(action: () => void): PictureEditorToolbarItem;
	    constructor(_editorModel: PictureEditorModel, _popupOptions: any);
	}

}
declare module DevExpress.Reporting.Viewer.Widgets.Internal {
    import ImageAlignment = DevExpress.Reporting.Viewer.Editing.ImageAlignment;
    import ImageSizeMode = DevExpress.Reporting.Viewer.Editing.ImageSizeMode;;
    import PictureEditMode = DevExpress.Reporting.Viewer.Widgets.PictureEditMode;;
    import IPictureEditorToolbarItem = DevExpress.Reporting.Viewer.Widgets.Internal.IPictureEditorToolbarItem;;
    import Painter = DevExpress.Reporting.Viewer.Widgets.Internal.Painter;;
    import PictureEditorActionProvider = DevExpress.Reporting.Viewer.Widgets.Internal.PictureEditorActionProvider;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export class PictureEditorModel extends Disposable {
	    private $element;
	    private _initialImage;
	    private _initialAlignment;
	    private _initialSizeMode;
	    private _initialImageType;
	    private _pointerDownHandler;
	    private _pointerUpHandler;
	    private _pointerCancelHandler;
	    private _callbacks;
	    private GESTURE_COVER_CLASS;
	    private ACTIVE_POPUP_CLASS;
	    private _getPopupContent;
	    private _takeFocus;
	    private _releaseFocus;
	    private _wrapButtonAction;
	    private _initActions;
	    private _loadImage;
	    private _addEvents;
	    constructor(options: IPictureEditorOptions, element: HTMLElement);
	    changeActiveButton(selectedItem: any): void;
	    applyBindings(): void;
	    dispose(): void;
	    getImage(): string;
	    reset(image: any, alignment: any, sizeMode: any, imageType: any): void;
	    getCurrentOptions(): IImageEditValue;
	    actionsProvider: PictureEditorActionProvider;
	    editMode: PictureEditMode;
	    actions: Array<IPictureEditorToolbarItem>;
	    painter: Painter;
	    active: ko.Observable<boolean> | ko.Computed<boolean>;
	    canDraw: ko.Observable<boolean> | ko.Computed<boolean>;
	    zoom: ko.Observable<number> | ko.Computed<number>;
	}
	export interface IPictureEditorCallbacks {
	    onFocusOut: (s: any) => void;
	    onFocusIn?: (s: any) => void;
	    onDraw: (s: any) => void;
	    customizeActions?: (s: PictureEditorModel, actions: Array<IPictureEditorToolbarItem>) => void;
	}
	export interface IImageEditValue {
	    sizeMode: ImageSizeMode;
	    alignment: ImageAlignment;
	    imageType: string;
	    image: string;
	}
	export interface IPictureEditorOptions {
	    image: ko.Observable<string> | ko.Computed<string>;
	    imageType: ko.Observable<string> | ko.Computed<string>;
	    imageMode: ko.Observable<PictureEditMode> | ko.Computed<PictureEditMode>;
	    sizeMode: ko.Observable<ImageSizeMode> | ko.Computed<ImageSizeMode>;
	    alignment: ko.Observable<ImageAlignment> | ko.Computed<ImageAlignment>;
	    callbacks: IPictureEditorCallbacks;
	    active: ko.Observable<boolean> | ko.Computed<boolean>;
	    zoom: ko.Observable<number> | ko.Computed<number>;
	    popupOptions: IPictureEditorPopupTargetOptions;
	}
	export interface IPictureEditorPopupTargetOptions {
	    target?: string;
	    container?: string;
	    boundary?: string;
	}
	export interface IClickEvent {
	    target: HTMLElement;
	}

}
declare module DevExpress.Reporting.Editing {
    import IImageEditorItem = DevExpress.Reporting.Viewer.Widgets.Internal.IImageEditorItem;;
	export interface IInplaceEditorInfo {
	    name: string;
	    category: string;
	    displayName: string;
	    template?: string;
	    options?: {};
	}
	export var Categories: {
	    Image: () => string;
	    Numeric: () => string;
	    DateTime: () => string;
	    Letters: () => string;
	};
	export interface IImageEditorRegistrationOptions {
	    name: string;
	    displayName: string;
	    images?: IImageEditorItem[];
	    customizeActions?: (sender: any, actions: any[]) => void;
	    searchEnabled?: boolean;
	    imageLoadEnabled?: boolean;
	    sizeOptionsEnabled?: boolean;
	    clearEnabled?: boolean;
	    drawingEnabled?: boolean;
	}
	export class EditingFieldExtensions {
	    private static _instance;
	    private _editors;
	    static instance(): EditingFieldExtensions;
	    private _registerStandartEditors;
	    static registerImageEditor(imageRegistrationOptions: IImageEditorRegistrationOptions): void;
	    static registerEditor(name: string, displayName: string, category: string, options?: {}, template?: string, validate?: (value: string) => boolean, defaultVal?: string): void;
	    static registerMaskEditor(editorID: string, displayName: string, category: string, mask: string): void;
	    static registerRegExpEditor(editorID: string, displayName: string, category: string, regExpEditing: RegExp, regExpFinal: RegExp, defaultVal: string): void;
	    static unregisterEditor(editorID: string): void;
	    categories(excludeCategories?: string[]): string[];
	    editors(): IInplaceEditorInfo[];
	    editorsByCategories(categories?: string[]): IInplaceEditorInfo[];
	    editor(editorID: string): IInplaceEditorInfo;
	}

}
declare module DevExpress.Reporting.Viewer.Editing {
    import IEditingFieldViewModel = DevExpress.Reporting.Viewer.Editing.IEditingFieldViewModel;
    import EditingField = DevExpress.Reporting.Viewer.Editing.EditingField;
    import IBounds = DevExpress.Reporting.Viewer.Editing.IBounds;;


	export class TextEditingFieldViewModelBase {
	    keypressAction(data: any, event: any): void;
	    hideEditor: (shouldCommit: boolean) => void;
	}
	export class TextEditingFieldViewModel extends TextEditingFieldViewModelBase implements IEditingFieldViewModel {
	    constructor(field: EditingField, pageWidth: number, pageHeight: number, zoom: ko.Observable<number> | ko.Computed<number>, bounds: IBounds);
	    dispose?: () => void;
	    template: string;
	    editorTemplate: string;
	    field: EditingField;
	    data: any;
	    textStyle: () => {};
	    containerStyle: () => {};
	    breakOffsetStyle: () => {};
	    borderStyle: () => {};
	    zoom: ko.Observable<number> | ko.Computed<number>;
	    htmlValue: () => string;
	    wordWrap: boolean;
	    active: ko.Observable<boolean>;
	    activateEditor(viewModel: any, e: any): void;
	}

}
declare module DevExpress.Reporting.Viewer.Editing {
    import TextEditingFieldViewModelBase = DevExpress.Reporting.Viewer.Editing.TextEditingFieldViewModelBase;;
    import IEditingFieldViewModel = DevExpress.Reporting.Viewer.Editing.IEditingFieldViewModel;
    import EditingField = DevExpress.Reporting.Viewer.Editing.EditingField;
    import IBounds = DevExpress.Reporting.Viewer.Editing.IBounds;;


	export class CharacterCombEditingFieldViewModel extends TextEditingFieldViewModelBase implements IEditingFieldViewModel {
	    field: EditingField;
	    constructor(field: EditingField, pageWidth: number, pageHeight: number, zoom: ko.Observable<number> | ko.Computed<number>, bounds: IBounds);
	    cells: {
	        text: string;
	        style: any;
	    }[];
	    rowsCount: number;
	    colsCount: number;
	    template: string;
	    containerStyle: () => {};
	    textStyle: () => {};
	    zoom: ko.Observable<number> | ko.Computed<number>;
	    active: ko.Observable<boolean>;
	    activateEditor(viewModel: any, e: any): void;
	    static setText(cells: {
	        text: string;
	    }[], textAlignment: string, rtl: boolean, text: string, rowsCount: number, colsCount: number): void;
	}

}
declare module DevExpress.Reporting.Viewer.Editing {
    import IPainterOptions = DevExpress.Reporting.Viewer.Widgets.Internal.IPainterOptions;;
    import IPopupComponent = DevExpress.Reporting.Viewer.Widgets.Internal.IPopupComponent;;
    import ImageEditingFieldViewModel = DevExpress.Reporting.Viewer.Editing.ImageEditingFieldViewModel;;
    import IEditingFieldViewModel = DevExpress.Reporting.Viewer.Editing.IEditingFieldViewModel;;

	export interface IImageEditingFieldPopupData {
	    contentData: PopupImageEditingFieldViewModel;
	    paintData: IPainterOptions;
	    contentTemplate: string;
	    isVisible: (element: HTMLElement) => boolean;
	    getContainer: () => string;
	    getPositionTarget: (element: HTMLElement) => JQuery;
	    showContent: ko.Observable<boolean>;
	    onShown: (e: {
	        element: any;
	        component: any;
	    }) => void;
	    onHiding: (e: {
	        element: any;
	        component: any;
	    }) => void;
	    onContentReady: (e: {
	        element: any;
	        component: IPopupComponent;
	    }) => void;
	    renderedHandler: (element: HTMLElement, model: any) => void;
	}
	export class PopupImageEditingFieldViewModel extends ImageEditingFieldViewModel implements IEditingFieldViewModel {
	    parentPopupClass: string;
	    private _popupInitializedClass;
	    private _getPopupContainer;
	    private _getPainterModel;
	    private _getPictureEditorModel;
	    private _resetPictureEditor;
	    private _resetPainter;
	    isPopupActive(element: any): boolean;
	    getPainter(): IPainterOptions;
	    getPopupData(): IImageEditingFieldPopupData;
	    activateEditor(viewModel: any, e: any): void;
	    popupData: IImageEditingFieldPopupData;
	    painterData: IPainterOptions;
	    template: string;
	}
	export var DefaultImageEditingFieldViewModel: typeof PopupImageEditingFieldViewModel;

}
declare module DevExpress.Reporting.Viewer.Editing {
    import GlyphStyle = DevExpress.Reporting.Viewer.Editing.GlyphStyle;;

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export interface IBounds {
	    left: number;
	    top: number;
	    width: number;
	    height: number;
	    offset: {
	        x: number;
	        y: number;
	    };
	}
	export enum ImageAlignment {
	    TopLeft = 1,
	    TopCenter = 2,
	    TopRight = 3,
	    MiddleLeft = 4,
	    MiddleCenter = 5,
	    MiddleRight = 6,
	    BottomLeft = 7,
	    BottomCenter = 8,
	    BottomRight = 9
	}
	export enum ImageSizeMode {
	    Normal = 0,
	    StretchImage = 1,
	    ZoomImage = 4,
	    Squeeze = 5,
	    Cover = 7
	}
	export interface IImageSourceBrickData {
	    image: string;
	    imageType: string;
	}
	export interface IImageBrickData extends IImageSourceBrickData {
	    alignment: ImageAlignment;
	    sizeMode: ImageSizeMode;
	}
	export interface IEditingFieldModel {
	    id: string;
	    groupID: string;
	    readOnly: boolean;
	    editorName: string;
	    editValue: any | IImageBrickData;
	    htmlValue: string;
	    pageIndex: number;
	    brickIndeces: string;
	    type: string;
	    bounds: IBounds;
	    brickOptions: {
	        rtl: boolean;
	        rtlLayout: boolean;
	        formatString: string;
	        wordWrap: boolean;
	        style: string;
	        checkBoxBounds?: IBounds;
	        characterCombBounds?: IBounds[];
	        checkBoxGlyphOptions?: {
	            customGlyphs: {
	                key: number;
	                value: IImageSourceBrickData;
	            }[];
	            glyphStyle: GlyphStyle;
	        };
	    };
	}
	export interface IEditingFieldViewModel {
	    template: string;
	    field: EditingField;
	    activateEditor?: (viewModel: any, e: any) => void;
	    hideEditor?: (shouldCommit: boolean) => void;
	    active?: ko.Observable<boolean>;
	    onClick?: (viewModel: any, e: any) => void;
	    dispose?: () => void;
	}
	export interface IEditingFieldHtmlProvider {
	    getEditingFieldHtml: (value: string, editingFieldIndex: number) => JQueryPromise<string>;
	}
	export class EditingField extends Disposable {
	    protected _model: IEditingFieldModel;
	    private _needToUseHtml;
	    private _index;
	    private _htmlProvider;
	    private _readOnly;
	    constructor(model: IEditingFieldModel, index: number, htmlProvider: IEditingFieldHtmlProvider);
	    private _refreshHtmlValue;
	    editingFieldChanged(field: EditingField, oldVal: any, newVal: any): any;
	    readOnly: ko.Observable<boolean> | ko.Computed<boolean>;
	    modelValue: ko.Observable | ko.Computed;
	    editValue: ko.Computed<any>;
	    _editorValue: ko.Observable | ko.Computed;
	    htmlValue: ko.Observable<string> | ko.Computed<string>;
	    editorName(): string;
	    id(): string;
	    groupID(): string;
	    pageIndex(): number;
	    type(): string;
	    model(): IEditingFieldModel;
	    createViewModel(zoom: ko.Observable<number> | ko.Computed<number>, pageWidth: number, pageHeight: number, editingFieldsProvider: () => EditingField[], bounds: IBounds): IEditingFieldViewModel;
	}

}
declare module DevExpress.Reporting.Viewer.Utils {
    import IKeyValuePair = DevExpress.Reporting.IKeyValuePair;;
    import IBounds = DevExpress.Reporting.Viewer.Editing.IBounds;;
    import ColumnSortOrder = DevExpress.Reporting.Viewer.Internal.ColumnSortOrder;;
	export interface IBrickNode {
	    top: number;
	    topP: string;
	    left: number;
	    leftP?: string;
	    rightP?: string;
	    height: number;
	    heightP: string;
	    width: number;
	    widthP: string;
	    bricks: IBrickNode[];
	    content: Array<IKeyValuePair<any>>;
	    indexes: string;
	    row: number;
	    col: number;
	    genlIndex: number;
	    active: ko.Observable<boolean> | ko.Computed<boolean>;
	    navigation?: IBrickNodeNavigation;
	    rtl: boolean;
	    efIndex?: number;
	    absoluteBounds?: IBounds;
	    text: () => string;
	    accessibleDescription: string;
	    onClick?: (args?: any) => void;
	}
	export interface IBrickNodeNavigation {
	    url?: string;
	    target?: string;
	    indexes?: string;
	    pageIndex?: number;
	    drillDownKey?: string;
	    sortData?: ISortingData;
	}
	export interface ISortingData {
	    target: string;
	    field: string;
	    order: ColumnSortOrder;
	}
	export interface IDocumentOperationResult {
	    documentId: string;
	    succeeded: boolean;
	    message?: string;
	    customData?: string;
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
    import IKeyValuePair = DevExpress.Reporting.IKeyValuePair;;
    import ISortingFieldInfo = DevExpress.Reporting.Viewer.Internal.ISortingFieldInfo;;
    import ISortingData = DevExpress.Reporting.Viewer.Utils.ISortingData;;
	export class SortingProcessor {
	    private _getSortingStage;
	    constructor(_getSortingStage: () => Array<IKeyValuePair<Array<ISortingFieldInfo>>>);
	    doSorting(sortData: ISortingData, shiftKey?: boolean, ctrlKey?: boolean): boolean;
	    private _applySorting;
	    private _appendSorting;
	    private _detachSorting;
	    private _changeSortOrder;
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
    import ReportPreview = DevExpress.Reporting.Viewer.ReportPreview;;
	export interface IProgressStatus {
	    requestAgain: boolean;
	    completed?: boolean;
	    progress?: number;
	    error?: string;
	}
	export interface IExportProgressStatus extends IProgressStatus {
	    token?: string;
	    uri?: string;
	}
	export interface IDocumentBuildStatus extends IProgressStatus {
	    pageCount?: number;
	}
	export class PreviewHandlersHelper {
	    private _preview;
	    constructor(preview: ReportPreview);
	    doneStartExportHandler(deffered: any, inlineResult: boolean, response: any, useSameTab?: boolean, printable?: boolean): void;
	    errorStartExportHandler(deffered: any, error: any): void;
	    doneExportStatusHandler(deffered: JQueryDeferred<any>, operationId: string, response: any): void;
	    errorExportStatusHandler(deffered: JQueryDeferred<IDocumentBuildStatus>, error: any): void;
	    doneStartBuildHandler(deffered: any, response: any, startBuildOperationId: string): void;
	    errorStartBuildHandler(deffered: any, error?: any): void;
	    errorGetBuildStatusHandler(deffered: JQueryDeferred<IDocumentBuildStatus>, error: any, ignoreError: () => boolean): void;
	    doneGetBuildStatusHandler(deffered: JQueryDeferred<IDocumentBuildStatus>, documentId: string, response: any, stopProcessingPredicate: () => boolean): void;
	}

}
declare module DevExpress.Reporting.Internal {

	export var editorTemplates: {
	    csvSeparator: {
	        header: string;
	        extendedOptions: {
	            placeholder: ko.PureComputed<string>;
	        };
	    };
	};

}
declare module DevExpress.Reporting.Export.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import IDisplayedValue = DevExpress.Analytics.Utils.IDisplayedValue;;
	export var pageBorderColor: ISerializationInfo;
	export var pageBorderWidth: ISerializationInfo;
	export var pageRange: ISerializationInfo;
	export var expotOptionsTitle: ISerializationInfo;
	export var htmlTableLayout: ISerializationInfo;
	export var docxTableLayout: ISerializationInfo;
	export var allowURLsWithJSContent: ISerializationInfo;
	export var rasterizationResolution: ISerializationInfo;
	export var rasterizeImages: ISerializationInfo;
	export var useHRefHyperlinks: ISerializationInfo;
	export var exportWatermarks: ISerializationInfo;
	export var inlineCss: ISerializationInfo;
	export var removeSecondarySymbols: ISerializationInfo;
	export var characterSet: ISerializationInfo;
	export function getExportModeValues(format?: string, preview?: boolean, merged?: boolean): Array<IDisplayedValue>;
	export var exportPageBreaks: ISerializationInfo;
	export var rtfExportMode: ISerializationInfo;
	export var docxExportMode: ISerializationInfo;
	export var htmlExportMode: ISerializationInfo;
	export var embedImagesInHTML: ISerializationInfo;
	export var imageExportMode: ISerializationInfo;
	export var xlsExportMode: ISerializationInfo;
	export var xlsxExportMode: ISerializationInfo;
	export var textExportMode: ISerializationInfo;
	export var xlsTextExportMode: ISerializationInfo;
	export var csvTextSeparator: ISerializationInfo;
	export var useCustomSeparator: ISerializationInfo;
	export var textEncodingType: ISerializationInfo;
	export var xlsExportHyperlinks: ISerializationInfo;
	export var xlsRawDataMode: ISerializationInfo;
	export var xlsShowGridLines: ISerializationInfo;
	export var xlsExportOptionsSheetName: ISerializationInfo;

}
declare module DevExpress.Reporting.Export.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var csvExportOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;

	export class CsvExportOptions {
	    static from(model: any, serializer?: IModelSerializer): CsvExportOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    isPropertyDisabled(name: string): boolean;
	    useCustomSeparator: ko.Observable<boolean> | ko.Computed<boolean>;
	    separator: ko.Observable<string> | ko.Computed<string>;
	    defaultSeparatorValue: string;
	}

}
declare module DevExpress.Reporting.Export {
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class AdditionalRecipientModel implements ISerializableModel {
	    static createNew: () => AdditionalRecipientModel;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	}
	export var additionalRecipientSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export var nativeFormatOptionsSerializationInfo: ISerializationInfoArray;
	export var additionalRecipients: ISerializationInfo;
	export var emailOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var htmlExportOptionsSerializationInfoBase: ISerializationInfoArray;
	export var htmlExportOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class HtmlExportOptions {
	    static from(model: any, serializer?: IModelSerializer): HtmlExportOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    isPropertyDisabled(name: string): boolean;
	    htmlExportMode: ko.Observable<string> | ko.Computed<string>;
	}

}
declare module DevExpress.Reporting.Export.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var imageExportOptionsSerializationInfoBase: ISerializationInfoArray;
	export var imageExportOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class ImageExportOptions {
	    static from(model: any, serializer?: IModelSerializer): ImageExportOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    isPropertyDisabled(name: string): boolean;
	    imageExportMode: ko.Observable<string> | ko.Computed<string>;
	}

}
declare module DevExpress.Reporting.Export.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var mhtExportOptionsSerializationInfoBase: ISerializationInfoArray;
	export var mhtExportOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class MhtExportOptions {
	    static from(model: any, serializer?: IModelSerializer): MhtExportOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    isPropertyDisabled(name: string): boolean;
	    htmlExportMode: ko.Observable<string> | ko.Computed<string>;
	}

}
declare module DevExpress.Reporting.Export {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export class PdfExportDocumentOptions {
	    static from(model: any, serializer?: IModelSerializer): PdfExportDocumentOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	}
	export var author: ISerializationInfo;
	export var application: ISerializationInfo;
	export var title: ISerializationInfo;
	export var subject: ISerializationInfo;
	export var pdfExportDocumentOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class PdfPermissionsOptions {
	    static from(model: any, serializer?: IModelSerializer): PdfPermissionsOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	}
	export var pdfExportPermissionsOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export class PdfPasswordSecurityOptions {
	    static from(model: any, serializer?: IModelSerializer): PdfPasswordSecurityOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    isPropertyDisabled(name: string): boolean;
	    hasSensitiveData(): boolean;
	    openPassword: ko.Observable<string> | ko.Computed<string>;
	    permissionsPassword: ko.Observable<string> | ko.Computed<string>;
	}
	export var pdfEncryptionLevel: ISerializationInfo;
	export var pdfExportPasswordSecurityOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import fromEnum = DevExpress.Analytics.Utils.fromEnum;;
	export var pdfACompatibilityValues: {
	    None: string;
	    PdfA1b: string;
	    PdfA2b: string;
	    PdfA3b: string;
	};
	export var pdfACompatibility: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: string;
	    from: typeof fromEnum;
	    valuesArray: {
	        value: string;
	        displayValue: string;
	        localizationId: string;
	    }[];
	};
	export var pdfUACompatibilityValues: {
	    None: string;
	    PdfUA1: string;
	};
	export var pdfUACompatibility: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: string;
	    from: typeof fromEnum;
	    valuesArray: {
	        value: string;
	        displayValue: string;
	        localizationId: string;
	    }[];
	};
	export var pdfExportOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import PdfPasswordSecurityOptions = DevExpress.Reporting.Export.PdfPasswordSecurityOptions;;
	export class PdfExportOptions {
	    static from(model: any, serializer?: IModelSerializer): PdfExportOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    isPropertyDisabled(propertyName: string): boolean;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    hasSensitiveData(): boolean;
	    pdfACompatibility: ko.Observable<string> | ko.Computed<string>;
	    pdfUACompatibility: ko.Observable<string>;
	    pdfPasswordSecurityOptions: PdfPasswordSecurityOptions;
	}

}
declare module DevExpress.Reporting.Export.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var printPreviewOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class PrintPreviewOptions {
	    static from(model: any, serializer?: IModelSerializer): PrintPreviewOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	}

}
declare module DevExpress.Reporting.Export.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var rtfExportOptionsSerializationInfoBase: ISerializationInfoArray;
	export var emptyFirstPageHeaderFooter: ISerializationInfo;
	export var keepRowHeight: ISerializationInfo;
	export var rtfExportOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class RtfExportOptions {
	    static from(model: any, serializer?: IModelSerializer): RtfExportOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    isPropertyDisabled(name: string): boolean;
	    rtfExportMode: ko.Observable<string> | ko.Computed<string>;
	}

}
declare module DevExpress.Reporting.Export.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var textExportOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class TextExportOptions {
	    static from(model: any, serializer?: IModelSerializer): TextExportOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	}

}
declare module DevExpress.Reporting.Export.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var xlsExportOptionsSerializationInfoCommon: ISerializationInfoArray;
	export var xlsExportOptionsSerializationInfoBase: ISerializationInfoArray;
	export var xlsExportOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class XlsExportOptions {
	    static from(model: any, serializer?: IModelSerializer): XlsExportOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    isPropertyDisabled(name: string): boolean;
	    hasSensitiveData(): boolean;
	    xlsExportMode: ko.Observable<string> | ko.Computed<string>;
	    encryptionOptions: {
	        password: ko.Observable<string>;
	    };
	}

}
declare module DevExpress.Reporting.Export.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var xlsxExportOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class XlsxExportOptions {
	    static from(model: any, serializer?: IModelSerializer): XlsxExportOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    isPropertyDisabled(name: string): boolean;
	    hasSensitiveData(): boolean;
	    xlsxExportMode: ko.Observable<string> | ko.Computed<string>;
	    encryptionOptions: {
	        password: ko.Observable<string>;
	    };
	}

}
declare module DevExpress.Reporting.Export {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class DocxExportDocumentOptions {
	    static from(model: any, serializer?: IModelSerializer): DocxExportDocumentOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	}
	export var docxExportDocumentOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var docxDocumentOptions: ISerializationInfo;
	export var docxExportOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class DocxExportOptions {
	    static from(model: any, serializer?: IModelSerializer): DocxExportOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    isPropertyDisabled(name: string): boolean;
	    docxExportMode: ko.Observable<string> | ko.Computed<string>;
	    tableLayout: ko.Observable<boolean> | ko.Computed<boolean>;
	}

}
declare module DevExpress.Reporting.Export.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var exportOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Export {
    import CsvExportOptions = DevExpress.Reporting.Export.CsvExportOptions;;
    import HtmlExportOptions = DevExpress.Reporting.Export.HtmlExportOptions;;
    import ImageExportOptions = DevExpress.Reporting.Export.ImageExportOptions;;
    import MhtExportOptions = DevExpress.Reporting.Export.MhtExportOptions;;
    import PdfExportOptions = DevExpress.Reporting.Export.PdfExportOptions;;
    import PrintPreviewOptions = DevExpress.Reporting.Export.PrintPreviewOptions;;
    import RtfExportOptions = DevExpress.Reporting.Export.RtfExportOptions;;
    import TextExportOptions = DevExpress.Reporting.Export.TextExportOptions;;
    import XlsExportOptions = DevExpress.Reporting.Export.XlsExportOptions;;
    import XlsxExportOptions = DevExpress.Reporting.Export.XlsxExportOptions;;
    import DocxExportOptions = DevExpress.Reporting.Export.DocxExportOptions;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class ExportOptions {
	    static from(model: any, serializer?: IModelSerializer): ExportOptions;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    csv: CsvExportOptions;
	    html: HtmlExportOptions;
	    image: ImageExportOptions;
	    mht: MhtExportOptions;
	    pdf: PdfExportOptions;
	    printPreview: PrintPreviewOptions;
	    rtf: RtfExportOptions;
	    textExportOptions: TextExportOptions;
	    xls: XlsExportOptions;
	    xlsx: XlsxExportOptions;
	    docx: DocxExportOptions;
	}

}
declare module DevExpress.Reporting.Viewer.Export {
    import CsvExportOptions = DevExpress.Reporting.Export.CsvExportOptions;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class CsvExportOptionsPreview extends CsvExportOptions {
	    static from(model: any, serializer?: IModelSerializer): CsvExportOptionsPreview;
	    isPropertyVisible(name: string): boolean;
	    isPropertyDisabled(name: string): boolean;
	}

}
declare module DevExpress.Reporting.Viewer.Export {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;

	export var rtfExportModeMergedPreview: ISerializationInfo;
	export var docxExportModeMergedPreview: ISerializationInfo;
	export function excludeModesForMergedDocuments(val: string): ko.Observable<string>;
	export function excludeDifferentFilesMode(val: string): ko.Observable<string>;
	export var htmlExportModePreviewBase: ISerializationInfo;
	export var htmlExportModePreview: ISerializationInfo;
	export var htmlExportModeMergedPreview: ISerializationInfo;
	export var xlsExportModePreviewBase: ISerializationInfo;
	export var xlsExportModePreview: ISerializationInfo;
	export var xlsExportModeMergedPreview: ISerializationInfo;
	export var imageExportModePreviewBase: ISerializationInfo;
	export var imageExportModePreview: ISerializationInfo;
	export var imageExportModeMergedPreview: ISerializationInfo;
	export var xlsxExportModePreviewBase: ISerializationInfo;
	export var xlsxExportModePreview: ISerializationInfo;
	export var xlsxExportModeMergedPreview: ISerializationInfo;

}
declare module DevExpress.Reporting.Viewer.Export {
    import HtmlExportOptions = DevExpress.Reporting.Export.HtmlExportOptions;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class HtmlExportOptionsPreview extends HtmlExportOptions {
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    _getVariableInfo(): ISerializationInfoArray;
	}
	export class HtmlExportOptionsMergedPreview extends HtmlExportOptionsPreview {
	    _getVariableInfo(): ISerializationInfoArray;
	    isPropertyDisabled(name: string): boolean;
	    constructor(model: any, serializer: any);
	}

}
declare module DevExpress.Reporting.Viewer.Export {
    import ImageExportOptions = DevExpress.Reporting.Export.ImageExportOptions;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class ImageExportOptionsPreview extends ImageExportOptions {
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    _getVariableInfo(): ISerializationInfoArray;
	}
	export class ImageExportOptionsMergedPreview extends ImageExportOptionsPreview {
	    _getVariableInfo(): ISerializationInfoArray;
	    isPropertyDisabled(name: string): boolean;
	    constructor(model: any, serializer: any);
	}

}
declare module DevExpress.Reporting.Viewer.Export {
    import MhtExportOptions = DevExpress.Reporting.Export.MhtExportOptions;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class MhtExportOptionsPreview extends MhtExportOptions {
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    _getVariableInfo(): ISerializationInfoArray;
	}
	export class MhtExportOptionsMergedPreview extends MhtExportOptionsPreview {
	    _getVariableInfo(): ISerializationInfoArray;
	    isPropertyDisabled(name: string): boolean;
	    constructor(model: any, serializer: any);
	}

}
declare module DevExpress.Reporting.Viewer.Export {
    import RtfExportOptions = DevExpress.Reporting.Export.RtfExportOptions;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class RtfExportOptionsPreview extends RtfExportOptions {
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    _getVariableInfo(): ISerializationInfoArray;
	}
	export class RtfExportOptionsMergedPreview extends RtfExportOptionsPreview {
	    _getVariableInfo(): ISerializationInfoArray;
	    isPropertyDisabled(name: string): boolean;
	    constructor(model: any, serializer: any);
	}

}
declare module DevExpress.Reporting.Viewer.Export {
    import XlsExportOptions = DevExpress.Reporting.Export.XlsExportOptions;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class XlsExportOptionsPreview extends XlsExportOptions {
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    _getVariableInfo(): ISerializationInfoArray;
	}
	export class XlsExportOptionsMergedPreview extends XlsExportOptionsPreview {
	    _getVariableInfo(): ISerializationInfoArray;
	    isPropertyDisabled(name: string): boolean;
	    constructor(model: any, serializer: any);
	}

}
declare module DevExpress.Reporting.Viewer.Export {
    import XlsxExportOptions = DevExpress.Reporting.Export.XlsxExportOptions;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class XlsxExportOptionsPreview extends XlsxExportOptions {
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    _getVariableInfo(): ISerializationInfoArray;
	}
	export class XlsxExportOptionsMergedPreview extends XlsxExportOptionsPreview {
	    _getVariableInfo(): ISerializationInfoArray;
	    isPropertyDisabled(name: string): boolean;
	    constructor(model: any, serializer: any);
	}

}
declare module DevExpress.Reporting.Viewer.Export {
    import DocxExportOptions = DevExpress.Reporting.Export.DocxExportOptions;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class DocxExportOptionsPreview extends DocxExportOptions {
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    _getVariableInfo(): ISerializationInfoArray;
	}
	export class DocxExportOptionsMergedPreview extends DocxExportOptionsPreview {
	    _getVariableInfo(): ISerializationInfoArray;
	    isPropertyDisabled(name: string): boolean;
	    constructor(model: any, serializer: any);
	}

}
declare module DevExpress.Reporting.Viewer.Export {
    import ExportOptions = DevExpress.Reporting.Export.ExportOptions;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class ExportOptionsPreview extends ExportOptions {
	    _generateFromFunction(exportType: any): (model: any, serializer: any) => any;
	    _generateInfo(): ISerializationInfoArray;
	    hasSensitiveData(): boolean;
	    getInfo(): ISerializationInfoArray;
	}
	export class ExportOptionsMergedPreview extends ExportOptionsPreview {
	    _generateInfo(): ISerializationInfoArray;
	}

}
declare module DevExpress.Reporting.Viewer.Widgets {
	export var viewerEditorTemplates: {
	    multiValue: {
	        header: string;
	        extendedOptions: {
	            onMultiTagPreparing: (args: any) => void;
	        };
	    };
	    rangeEditor: {
	        header: string;
	    };
	    multiValueEditable: {
	        custom: string;
	    };
	    selectBox: {
	        header: string;
	    };
	};

}
declare module DevExpress.Reporting.Viewer.Parameters {
    import IEnumType = DevExpress.Reporting.IEnumType;;
    import IParametersCustomizationHandler = DevExpress.Reporting.Viewer.Utils.IParametersCustomizationHandler;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import IDisplayedValue = DevExpress.Analytics.Utils.IDisplayedValue;;

    import ArrayStore =  DevExpress.data.ArrayStore ;;
    import DataSource =  DevExpress.data.DataSource ;;
	export interface IParameter {
	    getParameterDescriptor: () => IParameterDescriptor;
	    value: ko.Observable | ko.Computed;
	    type: any;
	    isMultiValue: any;
	    selectAllValues: any;
	    allowNull: any;
	    multiValueInfo: ko.Observable<ISerializationInfo> | ko.Computed<ISerializationInfo>;
	    tag?: any;
	}
	export interface IParameterDescriptor {
	    description: string;
	    name: string;
	    type: string;
	    value: any;
	    visible: boolean;
	    enabled: boolean;
	    multiValue?: boolean;
	    selectAllValues?: boolean;
	    allowNull?: boolean;
	    tag?: any;
	}
	export function getEditorType(typeString: any): any;
	export class ParameterHelper {
	    private _knownEnums;
	    private _customizeParameterEditors;
	    private _isKnownEnumType;
	    static getSerializationValue(value: any, dateConverter: any): any;
	    static createDefaultDataSource(store: ArrayStore): DataSource;
	    initialize(knownEnums?: Array<IEnumType>, callbacks?: IParametersCustomizationHandler): void;
	    createInfo(parameter: IParameter): ISerializationInfo;
	    addShowCleanButton(info: ISerializationInfo, parameter: IParameter): void;
	    assignValueStore(info: ISerializationInfo, parameter: IParameter): void;
	    createMultiValue(parameter: IParameter, value?: any): {
	        value: ko.Observable<any>;
	        getInfo: () => ISerializationInfo[];
	    };
	    createMultiValueArray(fromArray: Array<any>, parameter: IParameter, convertSingleValue?: (val: any) => any): ko.ObservableArray<{
	        value: ko.Observable<any>;
	        getInfo: () => ISerializationInfo[];
	    }>;
	    isEnumType(parameter: IParameter): boolean;
	    getItemsSource(parameterDescriptor: IParameterDescriptor, items: Array<IDisplayedValue>, sort?: boolean): any;
	    getEnumCollection(parameter: IParameter): Array<IDisplayedValue>;
	    getParameterInfo(parameter: IParameter): ISerializationInfo;
	    getValueConverter(type: string): (val: any) => any;
	    customizeParameterLookUpSource: (parameter: IParameterDescriptor, items: Array<IDisplayedValue>) => any;
	    getUnspecifiedDisplayText: () => any;
	}

}
declare module DevExpress.Reporting.Viewer.Parameters {
    import ParameterHelper = DevExpress.Reporting.Viewer.Parameters.ParameterHelper;;
    import ILookUpValue = DevExpress.Reporting.Viewer.Parameters.ILookUpValue;;
    import PreviewParameter = DevExpress.Reporting.Viewer.Parameters.PreviewParameter;;
    import IEnumType = DevExpress.Reporting.IEnumType;;
    import IParametersCustomizationHandler = DevExpress.Reporting.Viewer.Utils.IParametersCustomizationHandler;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import IDisplayedValue = DevExpress.Analytics.Utils.IDisplayedValue;;
	export class PreviewParameterHelper extends ParameterHelper {
	    callbacks?: IParametersCustomizationHandler;
	    mapLookUpValues(type: string, lookUpValues: Array<ILookUpValue>): Array<IDisplayedValue>;
	    static fixPropertyName(propertyName: string): string;
	    static getPrivatePropertyName(propertyName: string): string;
	    createInfo(parameter: PreviewParameter): ISerializationInfo;
	    assignValueStore(info: ISerializationInfo, parameter: PreviewParameter): void;
	    isEnumType(parameter: PreviewParameter): boolean;
	    getValueConverter(type: string): (val: any) => any;
	    getRangeEditor(): {
	        header: string;
	    };
	    constructor(knownEnums?: Array<IEnumType>, callbacks?: IParametersCustomizationHandler);
	}

}
declare module DevExpress.Reporting.Viewer.Parameters {
    import IDisplayedValue = DevExpress.Analytics.Utils.IDisplayedValue;;

	export class MultiValuesHelper {
	    items: Array<IDisplayedValue>;
	    constructor(value: ko.ObservableArray<any>, items: Array<IDisplayedValue>, selectAllValues: boolean);
	    selectedItems: ko.ObservableArray<any>;
	    isSelectedAll: ko.Observable<boolean> | ko.Computed<boolean>;
	    maxDisplayedTags: number;
	    dataSource: any;
	    value: ko.ObservableArray<any>;
	}

}
declare module DevExpress.Reporting.Viewer.Parameters {
    import IParameterDescriptor = DevExpress.Reporting.Viewer.Parameters.IParameterDescriptor;
    import IParameter = DevExpress.Reporting.Viewer.Parameters.IParameter;;
    import IPreviewParameterInfo = DevExpress.Reporting.Viewer.Parameters.IPreviewParameterInfo;;
    import PreviewParameterHelper = DevExpress.Reporting.Viewer.Parameters.PreviewParameterHelper;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import IDisplayedValue = DevExpress.Analytics.Utils.IDisplayedValue;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export interface IPreviewParameterDescriptor extends IParameterDescriptor {
	    hasLookUpValues?: boolean;
	}
	export class PreviewParameter extends Disposable implements IParameter {
	    static _compareValues(value1: any, value2: any): boolean;
	    constructor(parameterInfo: IPreviewParameterInfo, parameterHelper: PreviewParameterHelper);
	    getParameterDescriptor: () => IParameterDescriptor;
	    safeAssignObservable(name: string, value: ko.Observable<any>): void;
	    initialize(value: any, parameterHelper: PreviewParameterHelper): void;
	    valueInfo: ko.Observable<ISerializationInfo>;
	    value: ko.Observable<any>;
	    _value: ko.Observable<any>;
	    _originalLookUpValues: Array<IDisplayedValue>;
	    _originalValue: any;
	    isRange: boolean;
	    tag: any;
	    type: string;
	    path: string;
	    isFilteredLookUpSettings: boolean;
	    hasBindedExpressions: boolean;
	    hasVisibleExpression: boolean;
	    lookUpValues: ko.ObservableArray<IDisplayedValue>;
	    valueStoreCache: any;
	    allowNull: boolean;
	    isMultiValue: boolean;
	    selectAllValues: boolean;
	    isMultiValueWithLookUp: boolean;
	    multiValueInfo: ko.Observable<ISerializationInfo>;
	    visible: ko.Observable<boolean>;
	    enabled: ko.Observable<boolean>;
	    intTypes: string[];
	    floatTypes: string[];
	    isTypesCurrentType: (types: string[], type: string) => boolean;
	}

}
declare module DevExpress.Reporting.Viewer.Parameters {
    import IEnumType = DevExpress.Reporting.IEnumType;;
    import PreviewParameter = DevExpress.Reporting.Viewer.Parameters.PreviewParameter;;
    import ReportPreview = DevExpress.Reporting.Viewer.ReportPreview;;
    import IKeyValuePair = DevExpress.Reporting.IKeyValuePair;;
    import PreviewParameterHelper = DevExpress.Reporting.Viewer.Parameters.PreviewParameterHelper;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import TabInfo = DevExpress.Analytics.Utils.TabInfo;;

	export interface IReportParametersInfo {
	    shouldRequestParameters?: boolean;
	    parameters?: Array<IPreviewParameterInfo>;
	    knownEnums?: Array<IEnumType>;
	}
	export interface IPreviewParameterInfo {
	    Path: string;
	    Description: string;
	    Name: string;
	    Value: any;
	    TypeName: string;
	    ValueInfo?: any;
	    MultiValue?: boolean;
	    SelectAllValues?: boolean;
	    AllowNull?: boolean;
	    IsFilteredLookUpSettings?: boolean;
	    LookUpValues?: Array<ILookUpValue>;
	    Visible?: boolean;
	    Enabled?: boolean;
	    Tag?: any;
	    EnabledExpression?: string;
	    VisibleExpression?: string;
	}
	export interface IRange {
	    Start: any;
	    End: any;
	}
	export interface ILookUpValue {
	    Description: string;
	    Value: any;
	}
	export interface IUpdateParameterResponse {
	    enabled: boolean;
	    visible: boolean;
	    lookUpValues: any;
	}
	export class PreviewParametersViewModel extends Disposable {
	    private _parameters;
	    private readonly _visibleParameters;
	    private readonly _processedParameters;
	    private _shouldProcessParameter;
	    private _reportPreview;
	    private _convertLocalDateToUTC;
	    private _getParametersStateRequest;
	    private _getDoneGetParametersStateHandler;
	    private _add;
	    private _getFailGetParametersStateHandler;
	    private _setLookUpValues;
	    private _getParameterValuesContainedInLookups;
	    private _filterParameterValuesContainsInLookups;
	    constructor(reportPreview: ReportPreview, parameterHelper?: PreviewParameterHelper, enableKeyboardSupport?: boolean);
	    initialize(originalParametersInfo: IReportParametersInfo): void;
	    getPathsAfterPath(parameterPath: string): Array<string>;
	    serializeParameters(): Array<IKeyValuePair<any>>;
	    restore: () => void;
	    getInfo: ko.Observable<any>;
	    isPropertyDisabled(name: string): boolean;
	    isPropertyVisible(name: string): boolean;
	    updateParameters(changedParameter: PreviewParameter): void;
	    submit: () => void;
	    validateAndSubmit: (params: any) => void;
	    needToUpdateParameter: ko.Observable<boolean>;
	    isEmpty: ko.Observable<boolean>;
	    processInvisibleParameters: boolean;
	    parametersLoading: ko.Observable<boolean>;
	    tabInfo: TabInfo;
	    popupInfo: any;
	    parameterHelper: PreviewParameterHelper;
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IDisposable = DevExpress.Analytics.Utils.IDisposable;;

    import ListKeyboardHelper = DevExpress.Analytics.Internal.ListKeyboardHelper;;
	export interface IElementPosition {
	    top: boolean;
	    bottom?: boolean;
	    left: boolean;
	    right?: boolean;
	}
	export interface IProgressHandler extends IDisposable {
	    stop?: () => void;
	    cancelText?: ko.Observable<string> | ko.Computed<string>;
	    progress: ko.Observable<number> | ko.Computed<number>;
	    text: ko.Observable<string> | ko.Computed<string>;
	    visible: ko.Observable<boolean> | ko.Computed<boolean>;
	    startProgress: (onComplete?: () => void, onStop?: () => void) => void;
	    inProgress: ko.Observable<boolean> | ko.Computed<boolean>;
	    complete: () => void;
	    cssClasses: ko.Observable<string | {
	        [key: string]: boolean;
	    }>;
	    setPosition: (position: IElementPosition) => void;
	}
	export class ProgressViewModel extends Disposable implements IProgressHandler {
	    progress: ko.Observable<number>;
	    private _forceInvisible;
	    private _onComplete;
	    constructor(enableKeyboardSupport?: boolean);
	    stop: () => void;
	    inProgress: ko.Observable<boolean>;
	    cancelText: ko.Observable<any>;
	    text: ko.Observable<string>;
	    cssClasses: ko.Observable<{
	        [key: string]: boolean;
	    }>;
	    progressBarAccessibility: ListKeyboardHelper;
	    visible: ko.PureComputed<boolean>;
	    setPosition(position: IElementPosition): void;
	    complete: () => void;
	    startProgress: (onComplete?: () => void, onStop?: () => void) => void;
	}

}
declare module DevExpress.Reporting.Viewer {
	export var ActionId: {
	    Design: string;
	    FirstPage: string;
	    PrevPage: string;
	    Pagination: string;
	    NextPage: string;
	    LastPage: string;
	    MultipageToggle: string;
	    HighlightEditingFields: string;
	    ZoomOut: string;
	    ZoomSelector: string;
	    ZoomIn: string;
	    Print: string;
	    PrintPage: string;
	    ExportTo: string;
	    Search: string;
	    FullScreen: string;
	};
	export var ExportFormatID: {
	    PDF: {
	        text: string;
	        textId: string;
	        format: string;
	    };
	    XLS: {
	        text: string;
	        textId: string;
	        format: string;
	    };
	    XLSX: {
	        text: string;
	        textId: string;
	        format: string;
	    };
	    RTF: {
	        text: string;
	        textId: string;
	        format: string;
	    };
	    MHT: {
	        text: string;
	        textId: string;
	        format: string;
	    };
	    HTML: {
	        text: string;
	        textId: string;
	        format: string;
	    };
	    Text: {
	        text: string;
	        textId: string;
	        format: string;
	        propertyName: string;
	    };
	    CSV: {
	        text: string;
	        textId: string;
	        format: string;
	    };
	    Image: {
	        text: string;
	        textId: string;
	        format: string;
	    };
	    DOCX: {
	        text: string;
	        textId: string;
	        format: string;
	    };
	};
	export var PreviewElements: {
	    Toolbar: string;
	    Surface: string;
	    RightPanel: string;
	    ExportTool: string;
	};
	export var ZoomAutoBy: {
	    None: number;
	    WholePage: number;
	    PageWidth: number;
	};

}
declare module DevExpress.Reporting.Viewer {
    import AccessibilityControlElementBase = DevExpress.Analytics.Internal.AccessibilityControlElementBase;
    import KeyboardHelperWithArrowButtonBase = DevExpress.Analytics.Internal.KeyboardHelperWithArrowButtonBase;;
    import ReportPreview = DevExpress.Reporting.Viewer.ReportPreview;;
	export class PreviewBricksKeyboardHelper extends KeyboardHelperWithArrowButtonBase {
	    controlElementClassName: string;
	    liveRegionId: string;
	    private _needFocusNext;
	    private _currentPage;
	    private _firstSelectedBrickIndex;
	    private _lastSelectedBrickIndex;
	    private _resetBricksIndexes;
	    private _resetBricks;
	    private _activeBricksSubscription;
	    private _bricks;
	    private _getSelectedContent;
	    private _usePageKeyboardNavigation;
	    private _pages;
	    private _goToPage;
	    private _initTimeout;
	    private _liveRegionTimeout;
	    private _afterInitializeCallback;
	    dispose(): void;
	    delayedInit: () => void;
	    constructor(viewModel: ReportPreview);
	    reset: () => void;
	    initialize(): void;
	    clickHandler(): void;
	    itemHandleEscKey(e: any, index: any): boolean;
	    private _actionExecute;
	    private _getNonEmptyBrick;
	    private _pageChangeHandle;
	    private _activatePage;
	    itemHandleHomeKey(e: any, index: any): boolean;
	    itemHandleEndKey(e: any, index: any): boolean;
	    itemHandleLeftArrowKey(e: any, index: any): boolean;
	    itemHandleRightArrowKey(e: any, index: any): boolean;
	    itemHandleEnterKey(e: any, index: any): boolean;
	    itemHandleSpaceKey(e: any, index: any): boolean;
	    setFocusToPrevious(currentIndex: number): number;
	    setFocusToNext(currentIndex: number): number;
	    createControlElement(element: HTMLElement, index?: number): PreviewPageControlsElement;
	    active: boolean;
	} class PreviewPageControlsElement extends AccessibilityControlElementBase {
	    element: HTMLElement;
	    private _keyboardHelper;
	    dispose(): void;
	    private _focusHandler;
	    constructor(element: HTMLElement, _keyboardHelper: PreviewBricksKeyboardHelper);
	}
	export {};

}
declare module DevExpress.Reporting {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IExportProgressStatus = DevExpress.Reporting.Viewer.Internal.IExportProgressStatus;;
    import ReportPreview = DevExpress.Reporting.Viewer.ReportPreview;;
    import IExportSettings = DevExpress.Reporting.Viewer.Utils.IExportSettings;;
	export class ExportResultRequestData {
	    RequestUrl: string;
	    FormData: Object;
	    QueryParameters: Object;
	}
	export class ExportHandler extends Disposable {
	    private preview;
	    exportActionUri: ko.Observable<string>;
	    exportFormData: ko.Observable<any[]>;
	    reportDisplayName: ko.Observable<string>;
	    popupVisible: ko.Observable<boolean>;
	    popupWidth: ko.Observable<number>;
	    popupHeight: ko.Observable<number>;
	    exportingFrame: HTMLIFrameElement;
	    postingForm: HTMLFormElement;
	    exportingFrameName: string;
	    popupButtons: {
	        toolbar: string;
	        location: string;
	        widget: string;
	        options: {
	            text: any;
	            onClick: () => any;
	        };
	    }[];
	    printingLinkCallback: () => void;
	    printingTextPrefix: ko.Observable<string>;
	    printingTextPostfix: ko.Observable<string>;
	    getPopupTitle: () => string;
	    onExportCustomEvent: (data: any) => void;
	    private _exportResultRequestData;
	    private _showPrintNotificationDialog;
	    private _useSameTabExport;
	    private _useAsynchronousExport;
	    private _workerTicker;
	    private _workerFunctionBlobUrl;
	    private _workerTickerFunction;
	    constructor(exportSetting: IExportSettings, preview: ReportPreview);
	    private _getUrlObject;
	    private _createWorker;
	    private _terminateWorker;
	    private _callPrint;
	    private _window;
	    private _clearExportingFrame;
	    private _initPrintingWindow;
	    private _setPrintingLinkCallback;
	    private _formSubmit;
	    private _doExportSync;
	    private _initExportWindow;
	    private _startExportAsync;
	    export(args: string, actionUri: string, inlineResult?: boolean, printable?: boolean): JQuery.Promise<boolean, any, any>;
	    private _isNewBrowser;
	    private _showAsyncExportError;
	    private _printUsingBlob;
	    private _addQueryParamsToUri;
	    private _replaceLocation;
	    private _timeouts;
	    dispose(): void;
	    updateExportStatus(progress: number): void;
	    getExportStatus(operationId: string): JQueryPromise<IExportProgressStatus>;
	    getExportResult(operationId: string, inlineDisposition: boolean, useSameTab: boolean, token?: string, printable?: boolean, uri?: string): void;
	}

}
declare module DevExpress.Reporting.Viewer {
    import EditingField = DevExpress.Reporting.Viewer.Editing.EditingField;;
    import PreviewRequestWrapper = DevExpress.Reporting.Viewer.Internal.PreviewRequestWrapper;;
    import IBrickNode = DevExpress.Reporting.Viewer.Utils.IBrickNode;
    import IDocumentOperationResult = DevExpress.Reporting.Viewer.Utils.IDocumentOperationResult;
    import IBrickNodeNavigation = DevExpress.Reporting.Viewer.Utils.IBrickNodeNavigation;;
    import PreviewPage = DevExpress.Reporting.Viewer.Internal.PreviewPage;;
    import PreviewHandlersHelper = DevExpress.Reporting.Viewer.Internal.PreviewHandlersHelper;
    import IDocumentBuildStatus = DevExpress.Reporting.Viewer.Internal.IDocumentBuildStatus;;
    import IPreviewCustomizationHandler = DevExpress.Reporting.Viewer.Utils.IPreviewCustomizationHandler;
    import IPreviewInitialize = DevExpress.Reporting.Viewer.Utils.IPreviewInitialize;
    import IPreviewExportOptionsCustomizationArgs = DevExpress.Reporting.Viewer.Utils.IPreviewExportOptionsCustomizationArgs;
    import IExportSettings = DevExpress.Reporting.Viewer.Utils.IExportSettings;;
    import ExportOptionsPreview = DevExpress.Reporting.Viewer.Export.ExportOptionsPreview;;
    import IReportParametersInfo = DevExpress.Reporting.Viewer.Parameters.IReportParametersInfo;;
    import IBookmarkNode = DevExpress.Reporting.Viewer.Internal.IBookmarkNode;;
    import IProgressHandler = DevExpress.Reporting.Viewer.Internal.IProgressHandler;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import PreviewBricksKeyboardHelper = DevExpress.Reporting.Viewer.PreviewBricksKeyboardHelper;;
    import ExportHandler = DevExpress.Reporting.ExportHandler;;
	export class ReportPreview extends Disposable {
	    private enableKeyboardSupport?;
	    predefinedZoomLevels: ko.ObservableArray<number>;
	    _pageWidth: ko.Observable<number>;
	    _pageHeight: ko.Observable<number>;
	    _pageBackColor: ko.Observable<string>;
	    _currentReportId: ko.Observable<string>;
	    _currentReportUrl: ko.Observable<string>;
	    _currentDocumentId: ko.Observable<string>;
	    _unifier: ko.Observable<string>;
	    _currentOperationId: ko.Observable<string>;
	    _stopBuildRequests: {
	        [key: string]: boolean;
	    };
	    _closeReportRequests: {
	        [key: string]: boolean;
	    };
	    _closeDocumentRequests: {
	        [key: string]: boolean;
	    };
	    _editingFields: ko.Observable<EditingField[]>;
	    private _openReportOperationDeferred;
	    _startBuildOperationId: string;
	    private _editingValuesSubscriptions;
	    private _drillDownState;
	    private _sortingState;
	    private _sortingProcessor;
	    private _getBuildStatusDeferreds;
	    private _onGetBuildStatus;
	    private _onGetDocumentDetails;
	    private _doDrillDown;
	    private _doSorting;
	    private _timeouts;
	    private _deferreds;
	    dispose(): void;
	    removeEmptyPages(all?: boolean): void;
	    private _initialize;
	    createPage(pageIndex: number, processClick?: (target: IBrickNode) => void, loading?: ko.Observable<boolean>): PreviewPage;
	    private _cleanTabInfo;
	    private _clearReportInfo;
	    createBrickClickProcessor(cyclePageIndex: number): (brick: IBrickNode, e?: JQueryEventObject) => void;
	    constructor(handlerUri?: string, previewRequestWrapper?: PreviewRequestWrapper, previewHandlersHelper?: PreviewHandlersHelper, callbacks?: IPreviewCustomizationHandler, rtl?: boolean, enableKeyboardSupport?: boolean, exportSettings?: IExportSettings);
	    delayedInit(): void;
	    openReport(reportName: string): JQueryPromise<IPreviewInitialize>;
	    drillThrough(customData?: string, closeCurrentReport?: boolean): JQuery.Promise<IPreviewInitialize, any, any>;
	    initialize(initializeDataPromise: JQueryPromise<IPreviewInitialize>): JQueryPromise<IPreviewInitialize>;
	    private _deserializeExportOptions;
	    deactivate(): void;
	    startBuild(): JQuery.Promise<boolean, any, any>;
	    customDocumentOperation(customData?: string, hideMessageFromUser?: boolean): JQueryPromise<IDocumentOperationResult>;
	    _initializeStartBuild(): boolean;
	    _startBuildRequest(): JQuery.Promise<boolean, any, any>;
	    getBuildStatus(documentId: string): JQueryPromise<IDocumentBuildStatus>;
	    getDoGetBuildStatusFunc(): (documentId: string) => void;
	    getDocumentData(documentId: any): void;
	    exportDocumentTo(format: string, inlineResult?: boolean): void;
	    printDocument(pageIndex?: number): void;
	    stopBuild(documentId?: string): void;
	    closeDocument(documentId?: string): void;
	    closeReport(): void;
	    goToPage(pageIndex: number, forcePageChanging?: boolean, throttle?: number): void;
	    private _goToPageTimer;
	    getSelectedContent: (punctuationMark?: string) => string;
	    createEditingField(item: any, index: any): EditingField;
	    rtlReport: ko.Observable<boolean>;
	    rtlViewer: boolean;
	    exportHandler: ExportHandler;
	    previewHandlersHelper: PreviewHandlersHelper;
	    currentPage: ko.Observable<PreviewPage>;
	    originalParametersInfo: ko.Observable<IReportParametersInfo>;
	    pageIndex: ko.Observable<number>;
	    showMultipagePreview: ko.Observable<boolean>;
	    documentMap: ko.Observable<IBookmarkNode>;
	    exportOptionsModel: ko.Observable<ExportOptionsPreview>;
	    pageLoading: ko.Observable<boolean>;
	    errorMessage: ko.Observable<string>;
	    documentBuilding: ko.Observable<boolean>;
	    reportOpening: ko.Observable<boolean>;
	    progressBar: IProgressHandler;
	    pages: ko.ObservableArray<PreviewPage>;
	    customProcessBrickClick: (pageNamber: number, brick: IBrickNode, defaultHandler: () => void) => boolean;
	    brickClickDocumentMapHandler: (navigationBrick: IBrickNodeNavigation) => void;
	    editingFieldChanged: (field: EditingField, oldVal: any, newVal: any) => void;
	    customizeExportOptions: (options: IPreviewExportOptionsCustomizationArgs) => void;
	    isAutoFit: ko.Observable<boolean>;
	    autoFitBy: ko.Observable<number>;
	    exportDisabled: ko.PureComputed<boolean>;
	    _zoom: ko.Observable<number>;
	    zoom: ko.PureComputed<any>;
	    editingFieldsProvider: () => EditingField[];
	    _currentPageText: ko.PureComputed<any>;
	    currentPageAriaLabelImgAlt(index: any): string;
	    _getErrorMessage(jqXHR: any): any;
	    _processError(error: string, jqXHR?: any, showForUser?: boolean): void;
	    _raiseOnSizeChanged: () => void;
	    previewSize: ko.Observable<number>;
	    onSizeChanged: ko.Observable<any>;
	    previewVisible: ko.Observable<boolean>;
	    editingFieldsHighlighted: ko.Observable<boolean>;
	    canSwitchToDesigner: boolean;
	    allowURLsWithJSContent: boolean;
	    requestWrapper: PreviewRequestWrapper;
	    zoomStep: ko.Observable<number>;
	    private _progressFirstTime;
	    emptyDocumentCaption: ko.PureComputed<string>;
	    readonly reportId: string;
	    readonly reportUrl: string;
	    readonly documentId: string;
	    exportOptionsTabVisible: ko.Observable<boolean>;
	    previewBrickKeyboardHelper: PreviewBricksKeyboardHelper;
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;
    import ITreeListController = DevExpress.Analytics.Widgets.Internal.ITreeListController;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;

	export class DocumentMapTreeListController implements ITreeListController {
	    itemsFilter(item: IDataMemberInfo): boolean;
	    hasItems(item: IDataMemberInfo): boolean;
	    canSelect(value: TreeListItemViewModel): boolean;
	    select(value: TreeListItemViewModel): void;
	    showIconsForChildItems(): boolean;
	    selectedItem: ko.Observable<TreeListItemViewModel>;
	    clickHandler: (item: TreeListItemViewModel) => any;
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
    import IBookmarkNode = DevExpress.Reporting.Viewer.Internal.IBookmarkNode;
    import IBookmarkDataMemberInfo = DevExpress.Reporting.Viewer.Internal.IBookmarkDataMemberInfo;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
	export class DocumentMapItemsProvider implements IItemsProvider {
	    constructor(bookmark: IBookmarkNode);
	    getItems: (IPathRequest: any) => JQueryPromise<IBookmarkDataMemberInfo[]>;
	    private _selectNode;
	    static fillNode(bookmark: IBookmarkNode): IBookmarkDataMemberInfo[];
	    private _getRootNode;
	    bookmarkDict: {};
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
    import ReportPreview = DevExpress.Reporting.Viewer.ReportPreview;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import TabInfo = DevExpress.Analytics.Utils.TabInfo;;

    import ITreeListOptions = DevExpress.Analytics.Widgets.Internal.ITreeListOptions;;
	export interface IBookmarkNode {
	    text: string;
	    pageIndex: number;
	    indexes: string;
	    nodes?: Array<IBookmarkNode>;
	}
	export interface IBookmarkDataMemberInfo extends IDataMemberInfo {
	    bookmark: IBookmarkNode;
	}
	export class DocumentMapModel extends Disposable {
	    private _selectedPath;
	    private _setSelectedPathByNavigationNode;
	    constructor(reportPreview: ReportPreview);
	    dispose(): void;
	    tabInfo: TabInfo;
	    isEmpty: ko.Computed<boolean>;
	    documentMapOptions: ko.Computed<ITreeListOptions>;
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
    import IFoundText = DevExpress.Reporting.Viewer.Internal.IFoundText;
    import SearchViewModel = DevExpress.Reporting.Viewer.Internal.SearchViewModel;;
    import ReportPreview = DevExpress.Reporting.Viewer.ReportPreview;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export interface ISearchResultNavigator {
	    next: (up: boolean) => boolean;
	    getFirstMatchFromPage: (pageIndex: number, up: boolean, thisPageOnly?: boolean) => IFoundText;
	    currentResult: ko.Observable<IFoundText>;
	    goToResult: (resultId: number) => void;
	    searchResult: ko.Observable<IFoundText[]>;
	}
	export class SearchResultNavigator extends Disposable implements ISearchResultNavigator {
	    constructor(searchModel: SearchViewModel, reportPreview: ReportPreview);
	    next: (up: boolean) => boolean;
	    getFirstMatchFromPage: (pageIndex: number, up: boolean, thisPageOnly?: boolean) => IFoundText;
	    currentResult: ko.Observable<any>;
	    goToResult: (resultId: number) => void;
	    searchResult: ko.Observable<IFoundText[]>;
	}

}
declare module DevExpress.Reporting.Viewer {
    import ListKeyboardHelper = DevExpress.Analytics.Internal.ListKeyboardHelper;;
    import SearchViewModel = DevExpress.Reporting.Viewer.Internal.SearchViewModel;;
	export class SearchKeyboardHelper extends ListKeyboardHelper {
	    liveRegionId: string;
	    constructor(searchModel: SearchViewModel);
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
    import SearchResultNavigator = DevExpress.Reporting.Viewer.Internal.SearchResultNavigator;;
    import ReportPreview = DevExpress.Reporting.Viewer.ReportPreview;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IAction = DevExpress.Analytics.Utils.IAction;
    import TabInfo = DevExpress.Analytics.Utils.TabInfo;;

    import IActionsProvider = DevExpress.Analytics.Internal.IActionsProvider;;
    import DataSource =  DevExpress.data.DataSource ;;
	export interface IFoundText {
	    pageIndex: number;
	    indexes: string;
	    id: number;
	    text: string;
	}
	export interface ISearchResult {
	    matches: Array<IFoundText>;
	    success: boolean;
	}
	export interface ISearchEditorModel {
	    findUp: () => void;
	    findDown: () => void;
	    loading: ko.Observable<boolean> | ko.Computed<boolean>;
	    searchText: ko.Observable<string> | ko.Computed<string>;
	    focusRequested: ko.Subscribable<boolean>;
	}
	export class SearchViewModel extends Disposable implements ISearchEditorModel, IActionsProvider {
	    private _cachedRequests;
	    private _cachedWholeWordRequests;
	    private _cachedCaseSensitiveRequests;
	    private _cachedWholeWordWithCaseRequests;
	    private _resultNavigator;
	    private _timeoutItemRendered;
	    private _searchTimeout;
	    private _searchIgnoreObs;
	    static createResultNavigator: (seacrhModel: SearchViewModel, reportPreview: ReportPreview) => SearchResultNavigator;
	    resetSearchResult(): void;
	    findTextRequestDone(result: ISearchResult, cache: any): void;
	    constructor(reportPreview: ReportPreview, enableKeyboardSupport?: boolean);
	    itemClickAction: (e: any) => void;
	    onItemRendered(e: any): void;
	    getActions(context: any): IAction<any>[];
	    noResultText(): string;
	    tabInfo: TabInfo;
	    actions: IAction[];
	    findUp: () => void;
	    findDown: () => void;
	    goToResult: (result: IFoundText) => void;
	    focusRequested: ko.Observable<boolean>;
	    matchWholeWord: ko.Observable<boolean>;
	    matchCase: ko.Observable<boolean>;
	    searchUp: ko.Observable<boolean>;
	    searchText: ko.Observable<string>;
	    searchResult: ko.Observable<IFoundText[]>;
	    readonly disabled: boolean;
	    loading: ko.Observable<boolean>;
	    _renderedSearchResult: ko.Observable<{
	        data: IFoundText;
	    }[]>;
	    searchResultDataSource: ko.Observable<DataSource> | ko.Computed<DataSource>;
	    findNext: () => void;
	    clean: () => void;
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
    import IBrickNode = DevExpress.Reporting.Viewer.Utils.IBrickNode;
    import IDocumentOperationResult = DevExpress.Reporting.Viewer.Utils.IDocumentOperationResult;;
    import IBookmarkNode = DevExpress.Reporting.Viewer.Internal.IBookmarkNode;;
    import IKeyValuePair = DevExpress.Reporting.IKeyValuePair;;
    import IEditingFieldModel = DevExpress.Reporting.Viewer.Editing.IEditingFieldModel;
    import IEditingFieldHtmlProvider = DevExpress.Reporting.Viewer.Editing.IEditingFieldHtmlProvider;;
    import ReportPreview = DevExpress.Reporting.Viewer.ReportPreview;;
    import PreviewParametersViewModel = DevExpress.Reporting.Viewer.Parameters.PreviewParametersViewModel;;
    import SearchViewModel = DevExpress.Reporting.Viewer.Internal.SearchViewModel;;
    import IPreviewCustomizationHandler = DevExpress.Reporting.Viewer.Utils.IPreviewCustomizationHandler;;
	export interface IGetPageResponse extends IGetBrickMapResult {
	    width: number;
	    height: number;
	    base64string: string;
	}
	export interface IGetBrickMapResult {
	    brick: IBrickNode;
	    columnWidthArray: Array<number>;
	}
	export enum ColumnSortOrder {
	    None = 0,
	    Ascending = 1,
	    Descending = 2
	}
	export interface ISortingFieldInfo {
	    fieldName?: string;
	    sortOrder?: ColumnSortOrder;
	}
	export interface IGeneratedDocumentData {
	    documentMap?: IBookmarkNode;
	    drillDownKeys?: Array<IKeyValuePair<boolean>>;
	    sortingState?: Array<IKeyValuePair<Array<ISortingFieldInfo>>>;
	    exportOptions?: string;
	    canPerformContinuousExport?: boolean;
	    editingFields?: Array<IEditingFieldModel>;
	    displayName?: string;
	    errors?: any;
	}
	export class PreviewRequestWrapper implements IEditingFieldHtmlProvider {
	    private _callbacks?;
	    private _reportPreview;
	    private _parametersModel;
	    private _searchModel;
	    constructor(handlers?: {
	        [key: string]: Function;
	    }, _callbacks?: IPreviewCustomizationHandler);
	    static getProcessErrorCallback(reportPreview?: ReportPreview, defaultErrorMessage?: string, showMessage?: boolean): (message: string, jqXHR: any, textStatus: any) => void;
	    static getPage(url: any, ignoreError?: () => boolean): JQueryPromise<IGetPageResponse>;
	    initialize(reportPreview: ReportPreview, parametersModel: PreviewParametersViewModel, searchModel: SearchViewModel): void;
	    findTextRequest(text: any, ignore: ko.Observable<boolean>): JQueryPromise<any>;
	    stopBuild(id: any): void;
	    sendCloseRequest(documentId: string, reportId?: string): void;
	    startBuildRequest(shouldIgnoreError?: () => boolean): JQueryPromise<any>;
	    getBuildStatusRequest(documentId: any, shouldIgnoreError: () => boolean): JQueryPromise<any>;
	    getDocumentData(documentId: any, shouldIgnoreError: () => boolean): JQueryPromise<IGeneratedDocumentData>;
	    customDocumentOperation(documentId: string, serializedExportOptions: string, editindFields: any[], customData: string, hideMessageFromUser?: boolean): JQueryPromise<IDocumentOperationResult>;
	    openReport(reportName: any): any;
	    drillThrough(customData: string): any;
	    getStartExportOperation(arg: string): any;
	    getExportStatusRequest(operationId: string): any;
	    getEditingFieldHtml(value: string, editingFieldIndex: number): any;
	}

}
declare module DevExpress.Reporting.Viewer.Utils {
    import IGeneratedDocumentData = DevExpress.Reporting.Viewer.Internal.IGeneratedDocumentData;;
    import IReportParametersInfo = DevExpress.Reporting.Viewer.Parameters.IReportParametersInfo;
    import PreviewParametersViewModel = DevExpress.Reporting.Viewer.Parameters.PreviewParametersViewModel;;
    import ReportPreview = DevExpress.Reporting.Viewer.ReportPreview;;
    import IParameterDescriptor = DevExpress.Reporting.Viewer.Parameters.IParameterDescriptor;
    import IParameter = DevExpress.Reporting.Viewer.Parameters.IParameter;;
    import IKeyValuePair = DevExpress.Reporting.IKeyValuePair;;
    import IBrickNode = DevExpress.Reporting.Viewer.Utils.IBrickNode;;
    import EditingField = DevExpress.Reporting.Viewer.Editing.EditingField;;
    import ExportOptionsPreview = DevExpress.Reporting.Viewer.Export.ExportOptionsPreview;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import IDisplayedValue = DevExpress.Analytics.Utils.IDisplayedValue;
    import TabPanel = DevExpress.Analytics.Utils.TabPanel;;
    import ILocalizationSettings = DevExpress.Analytics.Internal.ILocalizationSettings;
    import ICommonCustomizationHandler = DevExpress.Analytics.Internal.ICommonCustomizationHandler;
    import IDesignerPart = DevExpress.Analytics.Internal.IDesignerPart;
    import IGlobalizeSettings = DevExpress.Analytics.Internal.IGlobalizeSettings;;
	export interface IPreviewInitialize {
	    reportId?: string;
	    documentData?: IGeneratedDocumentData;
	    reportUrl?: string;
	    documentId?: string;
	    pageSettings?: IPreviewPageInitialSettings;
	    exportOptions?: string;
	    parametersInfo?: IReportParametersInfo;
	    rtlReport?: boolean;
	    error?: any;
	}
	export interface IPreviewModel {
	    tabPanel: TabPanel;
	    reportPreview: ReportPreview;
	    Close: () => void;
	    ExportTo: (format?: string, inlineResult?: boolean) => void;
	    GetCurrentPageIndex: () => number;
	    GetParametersModel: () => PreviewParametersViewModel;
	    GoToPage: (pageIndex: number) => void;
	    OpenReport: (reportUrl: string) => void;
	    Print: (pageIndex?: number) => JQueryPromise<boolean>;
	    ResetParameters: () => void;
	    StartBuild: () => void;
	}
	export interface IPreviewPageInitialSettings {
	    height?: number;
	    width?: number;
	    color?: string;
	}
	export interface IParametersCustomizationHandler {
	    customizeParameterEditors?: (parameter: IParameterDescriptor, info: ISerializationInfo) => void;
	    customizeParameterLookUpSource?: (parameter: IParameterDescriptor, items: Array<IDisplayedValue>) => any;
	    parametersReset?: (parametersViewModel: PreviewParametersViewModel, parameters: IParameter[]) => void;
	    parametersSubmitted?: (parametersViewModel: PreviewParametersViewModel, parameters: Array<IKeyValuePair<any>>) => void;
	    parametersInitialized?: (parametersModel: PreviewParametersViewModel, actualParametersInfo: any[], submit: () => void, shouldRequestParameters: boolean) => void;
	}
	export interface IPreviewCustomizationHandler extends IParametersCustomizationHandler, ICommonCustomizationHandler {
	    _onGetBuildStatus?: (status: any) => void;
	    _onGetDocumentDetails?: (respose: any) => void;
	    customizeParts?: (parts: IDesignerPart[]) => void;
	    previewClick?: (pageIndex: number, brick: IBrickNode, defaultHandler: () => void) => boolean;
	    editingFieldChanged?: (field: EditingField, oldValue: any, newValue: any) => any;
	    documentReady?: (documentId: string, reportId: string, pageCount: number) => void;
	    customizeExportOptions?: (options: IPreviewExportOptionsCustomizationArgs) => void;
	    onExport?: (exportResultRequestData: any) => void;
	}
	export interface IPreviewExportOptionsCustomizationArgs {
	    exportOptions: ExportOptionsPreview;
	    panelVisible: boolean;
	}
	export interface IMobileModeSettings {
	    readerMode?: boolean;
	    animationEnabled?: boolean;
	}
	export interface ITabPanelSettings {
	    position?: string;
	    width?: number | string;
	}
	export interface IProgressBarSettings {
	    position?: string;
	    keepOnVisibleArea?: boolean;
	}
	export interface IRemoteSettings {
	    authToken?: string;
	    serverUri?: string;
	}
	export interface IExportSettings {
	    useSameTab?: boolean;
	    useAsynchronousExport?: boolean;
	    showPrintNotificationDialog?: boolean;
	}
	export interface IWebDocumentViewerSettings extends ILocalizationSettings {
	    handlerUri?: string;
	    allowURLsWithJSContent?: boolean;
	    rtl?: boolean;
	    accessibilityCompliant?: boolean;
	    isMobile?: boolean;
	    mobileModeSettings?: IMobileModeSettings;
	    remoteSettings?: IRemoteSettings;
	    tabPanelSettings?: ITabPanelSettings;
	    progressBarSettings?: IProgressBarSettings;
	    exportSettings?: IExportSettings;
	}
	export interface IWebDocumentViewerModel extends IPreviewInitialize, IWebDocumentViewerSettings, IGlobalizeSettings {
	    cultureInfoList?: {
	        [key: string]: string;
	    };
	    previewVisible?: boolean;
	}
	export interface IBindingSettings {
	    element: Element;
	    model: IWebDocumentViewerModel;
	    callbacks?: IPreviewCustomizationHandler;
	    applyBindings?: boolean;
	}

}
declare module DevExpress.Reporting {
    import IPreviewExportOptionsCustomizationArgs = DevExpress.Reporting.Viewer.Utils.IPreviewExportOptionsCustomizationArgs;;
	export class CustomizeExportOptionsEventArgs {
	    constructor(options: IPreviewExportOptionsCustomizationArgs);
	    HideExportOptionsPanel(): void;
	    HideFormat(format: any): void;
	    HideProperties(format: any, ...paths: (string | string[])[]): void;
	    GetExportOptionsModel(format: any): any;
	    _options: IPreviewExportOptionsCustomizationArgs;
	}

}
declare module DevExpress.Reporting {
	export class EventGenerator {
	    static generateCustomizeLocalizationCallback(fireEvent: (eventName: any, args?: any) => void): (localizationCallbacks: JQueryPromise<any>[]) => void;
	    static generateDesignerEvents(fireEvent: (eventName: any, args?: any) => void): {
	        customizeActions: (actions: any) => void;
	        reportTabClosing: (tab: any, deffered: any) => boolean;
	        reportTabClosed: (tab: any) => void;
	        customizeParameterEditors: (parameter: any, info: any) => void;
	        customizeParameterLookUpSource: (parameter: any, items: any) => any;
	        exitDesigner: () => void;
	        reportSaving: (args: any) => void;
	        reportSaved: (args: any) => void;
	        reportOpening: (args: any) => void;
	        reportOpened: (args: any) => void;
	        tabChanged: (tab: any) => void;
	        onServerError: (args: any) => void;
	        customizeParts: (parts: any) => void;
	        componentAdded: (args: any) => void;
	        customizeSaveDialog: (popup: any) => void;
	        customizeSaveAsDialog: (popup: any) => void;
	        customizeOpenDialog: (popup: any) => void;
	        customizeToolbox: (controlsFactory: any) => void;
	        customizeLocalization: (localizationCallbacks: JQueryPromise<any>[]) => void;
	        customizeFieldListActions: (item: any, actions: any) => void;
	        beforeRender: (designerModel: any) => void;
	        customizeWizard: (type: string, wizard: any) => void;
	    };
	    static generatePreviewEvents(fireEvent: (eventName: any, args?: any) => void, prefix?: string): {
	        previewClick: (pageIndex: any, brick: any, defaultHandler: any) => boolean;
	        documentReady: (documentId: any, reportId: any, pageCount: any) => void;
	        editingFieldChanged: (field: any, oldValue: any, newValue: any) => any;
	        parametersSubmitted: (model: any, parameters: any) => void;
	        parametersInitialized: (model: any, info: any, submit: any, shouldRequestParameters: any) => void;
	        parametersReset: (model: any, parameters: any) => void;
	        customizeParameterLookUpSource: (parameter: any, items: any) => any;
	        customizeParameterEditors: (parameter: any, info: any) => void;
	        customizeActions: (actions: any) => void;
	        customizeParts: (parts: any) => void;
	        customizeExportOptions: (options: any) => void;
	        onServerError: (args: any) => void;
	        onExport: (args: any) => void;
	    };
	}

}
declare module DevExpress.Reporting.Internal {
	export class Locker {
	    constructor();
	    lock: (action: () => void) => void;
	    isUpdate: boolean;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import Editor = DevExpress.Analytics.Widgets.Editor;;

	export class LinesEditor extends Editor {
	    collapsed: ko.Observable<boolean>;
	    protected _shouldSkipHighlighting(propertyName: string): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
	export interface IExpressionBinding {
	    eventName: ko.Observable<string>;
	    propertyName: ko.Observable<string>;
	    expression: ko.Observable<string>;
	}

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var expressionBindingSerializationsInfo: ISerializationInfoArray;
	export var expressionBindings: ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Widgets {
    import IExpressionEditorFunction = DevExpress.Analytics.Widgets.Internal.IExpressionEditorFunction;;
	export var reportFunctionDisplay: IExpressionEditorFunction[];

}
declare module DevExpress.Reporting.Designer.Internal {
	export function addVariablesToExpressionEditor(categories: any, customizeItems?: (items: any[]) => any[]): void;

}
declare module DevExpress.Reporting.Designer.Widgets {

    import WrappedExpressionOptions = DevExpress.Reporting.Designer.Internal.WrappedExpressionOptions;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export class ReportExpressionEditorAdapter extends Disposable {
	    private values;
	    value: ko.Observable<WrappedExpressionOptions> | ko.Computed<WrappedExpressionOptions>;
	    private _relatedControlClassName;
	    private _onHidingPopup;
	    private _onShowingPopup;
	    constructor(values: ko.Observable<any[]> | ko.Computed<any[]>, value: ko.Observable<WrappedExpressionOptions> | ko.Computed<WrappedExpressionOptions>);
	    patchOptions(reportExplorerProvider: any, editableObject: any): boolean;
	    private _createReportItems;
	    private _createValuesTab;
	    popupVisible: ko.Observable<boolean>;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {

    import IExpressionObject = DevExpress.Reporting.Designer.Internal.IExpressionObject;
    import WrappedExpressionOptions = DevExpress.Reporting.Designer.Internal.WrappedExpressionOptions;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import ExpressionEditor = DevExpress.Analytics.Widgets.ExpressionEditor;;
    import getParentContainer = DevExpress.Analytics.Internal.getParentContainer;;
    import ReportExpressionEditorAdapter = DevExpress.Reporting.Designer.Widgets.ReportExpressionEditorAdapter;;
	export interface IExpressionEditorProperty {
	    propertyName: string;
	    displayName: string;
	    isSelected?: ko.Observable<boolean> | ko.Computed<boolean>;
	    isBinded?: () => boolean;
	    collapsed?: ko.Observable<boolean> | ko.Computed<boolean>;
	    content?: WrappedExpressionOptions;
	    items?: IExpressionEditorProperty[];
	    templateName?: string;
	    value?: ko.Observable<any>;
	    click?: () => void;
	}
	export class ReportExpressionEditorWrapper extends Disposable {
	    control: ko.Observable;
	    value: ko.Observable<WrappedExpressionOptions> | ko.Computed<WrappedExpressionOptions>;
	    _allProperties: IExpressionEditorProperty[];
	    _undoEngine: UndoEngine;
	    private _createMainPopupButtons;
	    constructor(control: ko.Observable, value: ko.Observable<WrappedExpressionOptions> | ko.Computed<WrappedExpressionOptions>);
	    apply(sender: any): boolean;
	    onShowing(e: any): void;
	    onHiding(e: any): void;
	    createExpressionEditorProperties(expressionObj: IExpressionObject, properties: any, selected: any): any;
	    switchExpression(property: IExpressionEditorProperty): void;
	    updateExpression(expression: any): void;
	    title: () => any;
	    getPopupContainer: typeof getParentContainer;
	    adapter: ko.Observable<ReportExpressionEditorAdapter>;
	    editor: ko.Observable<ExpressionEditor>;
	    properties: ko.Observable<IExpressionEditorProperty[]>;
	    popupVisible: ko.Observable<boolean>;
	    buttonItems: any[];
	    currentProperty: IExpressionEditorProperty;
	}

}
declare module DevExpress.Reporting.Designer.Bands {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import Margins = DevExpress.Analytics.Elements.Margins;;
	export class MultiColumn extends SerializableModel {
	    static unitProperties: string[];
	    constructor(model: any, pageWidth: ko.Observable<number> | ko.Computed<number>, margins: Margins, serializer?: IModelSerializer);
	    mode: ko.Observable<string> | ko.Computed<string>;
	    realColumnWidth: ko.Observable<number> | ko.Computed<number>;
	    grayAreaWidth: ko.Observable<number>;
	    columnWidth: ko.Observable<number> | ko.Computed<number>;
	    columnCount: ko.Observable<number> | ko.Computed<number>;
	    columnSpacing: any;
	}
	export var multiColumnSerializationsInfo: ISerializationInfoArray;
	export class MultiColumnSurface extends Disposable {
	    constructor(multiColumn: MultiColumn, context: ISurfaceContext);
	    grayAreaWidth: ko.Computed<number>;
	    columnWidth: ko.Computed<number>;
	    columnSpacing: ko.Computed<number>;
	    columnSpacingLeft: ko.Computed<number>;
	    grayAreaLeft: ko.Computed<number>;
	    haveColumns: ko.Computed<boolean>;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import EditorTemplates = DevExpress.Analytics.Widgets.EditorTemplates;;
	export var designerEditorTemplates: EditorTemplates<ReportDesignerEditors>;
	export {};

}
declare module DevExpress.Reporting.Designer.Bands.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var groupFields: ISerializationInfo;
	export var sortFields: ISerializationInfo;
	export var groupFieldSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Bands {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;;

	export class GroupFieldModel extends Disposable implements ISerializableModel {
	    static createNew: () => GroupFieldModel;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    sortOrder: ko.Observable<string> | ko.Computed<string>;
	    sortOrderClass: ko.Computed<{
	        class: string;
	        template: string;
	    }>;
	    changeSortOrder: () => void;
	    fieldName: ko.Observable<string> | ko.Computed<string>;
	}

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var styleSerializationInfo: ISerializationInfoArray;
	export var styleName: ISerializationInfo;
	export var evenStyleName: ISerializationInfo;
	export var oddStyleName: ISerializationInfo;
	export var stylePriority: ISerializationInfo;
	export var pivotGridStyles: ISerializationInfoArray;
	export var crossTabStyles: ISerializationInfoArray;
	export var crossTabStylesDefaults: {
	    generalStyleName: {
	        '@Name': string;
	        '@BorderStyle': string;
	        '@Padding': string;
	        '@Font': string;
	        '@ForeColor': string;
	        '@BackColor': string;
	        '@BorderColor': string;
	        '@Sides': string;
	        '@StringFormat': string;
	    };
	    dataAreaStyleName: {
	        '@Name': string;
	        '@BorderStyle': string;
	        '@StringFormat': string;
	        '@TextAlignment': string;
	    };
	    headerAreaStyleName: {
	        '@Name': string;
	        '@BorderStyle': string;
	        '@BackColor': string;
	        '@StringFormat': string;
	        '@TextAlignment': string;
	    };
	    totalAreaStyleName: {
	        '@Name': string;
	        '@BorderStyle': string;
	        '@StringFormat': string;
	        '@TextAlignment': string;
	    };
	};
	export var stylesInfo: ISerializationInfoArray;
	export var stylesObj: ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Bands.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export var drillDownDetailReportExpanded: ISerializationInfo;
	export var printAtBottom: ISerializationInfo;
	export var printAcrossBands: ISerializationInfo;
	export var repeatEveryPage: ISerializationInfo;
	export var pageBreakWithoutAfterValues: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[];
	export var pageBreakValues: any[];
	export var pageBreak: ISerializationInfo;
	export var keepTogetherWithDetailReports: ISerializationInfo;
	export var height: ISerializationInfo;
	export var level: ISerializationInfo;
	export var drillDownControl: ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var afterPrint: ISerializationInfo;
	export var beforePrint: ISerializationInfo;
	export var sizeChanged: ISerializationInfo;
	export var evaluateBinding: ISerializationInfo;
	export var truncatedControlEventsSerializationInfo: ISerializationInfoArray;
	export var truncatedControlScripts: ISerializationInfo;
	export var commonScripts: ISerializationInfo;
	export var controlScripts: ISerializationInfo;
	export var textControlScripts: ISerializationInfo;
	export var labelScripts: ISerializationInfo;
	export var chartScripts: ISerializationInfo;
	export var pivotScripts: ISerializationInfo;
	export var subreportScripts: ISerializationInfo;
	export var pdfContentScripts: ISerializationInfo;
	export var commonBandScripts: ISerializationInfo;
	export var groupBandScripts: ISerializationInfo;
	export var groupHeaderBandScripts: ISerializationInfo;
	export var detailReportBandScripts: ISerializationInfo;
	export var reportScripts: ISerializationInfo;
	export var allScripts: ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Controls {
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

	export class FormattingRule extends Disposable {
	    static createNew(report?: any): FormattingRule;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, parent: ReportViewModel, serializer?: IModelSerializer);
	    getPath(propertyName: any): string;
	    className: () => string;
	    displayType(): any;
	    controlType: string;
	    selected: ko.Observable<boolean> | ko.Computed<boolean>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    parent: ReportViewModel;
	    dataSource: ko.Observable<ObjectStorageItem> | ko.Computed<ObjectStorageItem>;
	    dataMember: ko.Observable<string> | ko.Computed<string>;
	    condition: ko.Observable<string> | ko.Computed<string>;
	}
	export class FormattingRuleLink {
	    static createNew(rule: FormattingRule): FormattingRuleLink;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    value: ko.Observable<FormattingRule> | ko.Computed<FormattingRule>;
	}

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export var formattingRuleLinkSerializationsInfo: ISerializationInfoArray;
	export var formattingRuleLinks: ISerializationInfo;
	export var defaultBooleanVisible: ISerializationInfo;
	export var formattingSerializationsInfo: ISerializationInfoArray;
	export var conditionObj: ISerializationInfo;
	export var formatting: ISerializationInfo;
	export var formattingRuleSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var sortingOptionsSerializationsInfo: ISerializationInfoArray;
	export var interactiveSorting: ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var sizeLocation: ISerializationInfoArray;
	export var bordersProperties: ISerializationInfoArray;
	export var baseControlProperties: ISerializationInfoArray;
	export var commonBandProperties: ISerializationInfoArray;
	export var commonControlProperties: ISerializationInfoArray;
	export var fontGroup: ISerializationInfoArray;
	export var bookmarkGroup: ISerializationInfoArray;
	export var navigationGroup: ISerializationInfoArray;
	export var datasourcePrintOptionsGroup: ISerializationInfoArray;
	export var processGroup: ISerializationInfoArray;
	export var canGrowShrinkGroup: ISerializationInfoArray;
	export var labelGroup: ISerializationInfoArray;
	export var unknownSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Bands.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var expanded: ISerializationInfo;
	export var commonBandSerializationInfo: ISerializationInfoArray;
	export var bandSerializationInfo: ISerializationInfoArray;
	export var reportHeaderBandSerializationInfo: ISerializationInfoArray;
	export var reportFooterBandSerializationInfo: ISerializationInfoArray;
	export var popularPropertiesReportHeader: string[];
	export var popularPropertiesReportFooter: string[];

}
declare module DevExpress.Reporting.Designer.Bands.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export var multiColumn: ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Bands.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export var hierarchyPrintOptions: ISerializationInfo;
	export var fillEmptySpace: ISerializationInfo;
	export var generalBandSerializationInfo: ISerializationInfoArray;
	export var subBandSerializationInfo: ISerializationInfoArray;
	export var generalBandPopularProperties: string[];
	export var detailBandSerializationInfo: ISerializationInfoArray;
	export var popularPropertiesDetail: string[];

}
declare module DevExpress.Reporting.Designer.Bands {
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;
    import BandSurface = DevExpress.Reporting.Designer.Bands.BandSurface;;
    import MultiColumn = DevExpress.Reporting.Designer.Bands.MultiColumn;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;

	interface IHierarchyPrintOptions {
	    keyFieldName: ko.Observable<string>;
	    childListFieldName: ko.Observable<string>;
	    parentFieldName: ko.Observable<string>;
	    indent: ko.Observable<number>;
	    keepTogetherWithFirstChild: ko.Observable<boolean>;
	    isPropertyDisabled: (propertyName: string) => boolean;
	    getPath: (propertyName?: string) => string;
	}
	export class DetailBand extends BandViewModel {
	    static unitProperties: any[];
	    dispose(): void;
	    preInit(band: any, parent: ElementViewModel, serializer?: ModelSerializer): void;
	    hasHierarchyPrintOptions(): boolean;
	    constructor(band: any, parent: any, serializer: any);
	    isPropertyDisabled(name: string): any;
	    multiColumn: MultiColumn;
	    hierarchyPrintOptions: IHierarchyPrintOptions;
	    sortFields: ko.ObservableArray<GroupFieldModel>;
	}
	export class DetailBandSurface extends BandSurface {
	    protected _initMultiColumn(): void;
	    _control: DetailBand;
	}
    import GroupFieldModel = DevExpress.Reporting.Designer.Bands.GroupFieldModel;;
	export {};

}
declare module DevExpress.Reporting.Designer.Bands {
	export var bandSurfaceCollapsedHeight: number;

}
declare module DevExpress.Reporting.Designer.Bands.Internal {
    import BandSurface = DevExpress.Reporting.Designer.Bands.BandSurface;;
    import ReportSurface = DevExpress.Reporting.Designer.Controls.ReportSurface;;
    import VerticalBandSurface = DevExpress.Reporting.Designer.Bands.VerticalBandSurface;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;;
	export class VerticalBandsContainerSurface extends Disposable {
	    private _parent;
	    markerWidth: ko.Observable<number>;
	    dispose(): void;
	    getBandPosition(): number;
	    isLocked(): boolean;
	    createScrollViewOptions(target: VerticalBandsContainerSurface, selection: SurfaceSelection): {
	        direction: string;
	        showScrollbar: string;
	        useNative: boolean;
	        scrollByContent: boolean;
	        scrollByThumb: boolean;
	        onStart: () => void;
	        onScroll: (e: any) => void;
	        onEnd: () => void;
	    };
	    constructor(_parent: ReportSurface | BandSurface);
	    markerClick(selection: SurfaceSelection): void;
	    getBandsWidth(bands: VerticalBandSurface[]): number;
	    _getTopOffset(): number;
	    name: string;
	    focused: ko.Computed<boolean>;
	    bandOffset: number;
	    leftOffset: ko.Computed<number>;
	    collapsed: ko.Computed<boolean>;
	    selected: ko.Computed<boolean>;
	    canResize: ko.Computed<boolean>;
	    width: ko.Observable<number> | ko.Computed<number>;
	    height: ko.Observable<number> | ko.Computed<number>;
	    _height: ko.Computed<number>;
	    leftMargin: ko.Computed<number>;
	    readonly visible: boolean;
	    templateName: string;
	    selectionTemplate: string;
	    vrulerTemplate: string;
	    leftMarginTemplate: string;
	    leftMarginSelectionTemplate: string;
	    verticalBands: ko.ObservableArray<VerticalBandSurface>;
	    minHeight: ko.Computed<number>;
	    bandPosition: ko.Computed<number>;
	    topOffset: ko.Computed<number>;
	    readonly zoom: ko.Observable<number> | ko.Computed<number>;
	    grayAreaWidth: ko.Observable<number> | ko.Computed<number>;
	    grayAreaLeft: ko.Observable<number> | ko.Computed<number>;
	    scrollOffset: ko.Observable<number>;
	    locked: ko.Computed<boolean>;
	}

}
declare module DevExpress.Reporting.Designer.Bands.Internal {
    import BandSurface = DevExpress.Reporting.Designer.Bands.BandSurface;;
    import MultiColumnSurface = DevExpress.Reporting.Designer.Bands.MultiColumnSurface;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export interface IBandsHolder {
	    bands: ko.ObservableArray<BandSurface>;
	    verticalBandsContainer?: VerticalBandsContainerSurface;
	}
	export class BandsHolder extends Disposable implements IBandsHolder {
	    private _container;
	    dispose(): void;
	    private _createBandsMapCollection;
	    private _addHorizontalBand;
	    private _addVerticalBand;
	    initialize(bands: any): void;
	    constructor(_container: ReportSurface | BandSurface);
	    getHeight(): number;
	    getTotalHeight(): number;
	    getBandAbsolutePositionY(band: BandSurface): number;
	    checkUnderCursor(): boolean;
	    bands: ko.ObservableArray<BandSurface>;
	    verticalBandsContainer: VerticalBandsContainerSurface;
	    multiColumn: ko.Computed<MultiColumnSurface>;
	}
    import ReportSurface = DevExpress.Reporting.Designer.Controls.ReportSurface;;
    import VerticalBandsContainerSurface = DevExpress.Reporting.Designer.Bands.Internal.VerticalBandsContainerSurface;;

}
declare module DevExpress.Reporting.Designer.Bands.Internal {
    import IBandsHolder = DevExpress.Reporting.Designer.Bands.Internal.IBandsHolder;;
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;;
    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import IArea = DevExpress.Analytics.Elements.IArea;;
	export function sortBands(band1: any, band2: any): number;
	export function setMarkerWidth(bandHolder: IBandsHolder, levelCount: any, currentLevel?: number): void;
	export function getLevelCount(bandHolder: IBandsHolder): number;
	export function insertBand(bands: ko.ObservableArray<BandViewModel>, newBand: BandViewModel): void;
	export function initLevels(bands: BandViewModel[]): void;
	export function generateArray(allbands: BandViewModel[], controlType: string, newLevel?: number): any[];
	export function _getUnitAbsoluteRect(bandSurface: SurfaceElementBase<BandViewModel>, getPositionInParent: Function): IArea;

}
declare module DevExpress.Reporting.Designer.Bands {
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;
    import BandSurface = DevExpress.Reporting.Designer.Bands.BandSurface;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
	export class SubBandViewModel extends BandViewModel {
	    constructor(band: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    isPropertyDisabled(name: string): any;
	    isAllowedParent(target: IElementViewModel): boolean;
	}
	export class SubBandSurface extends BandSurface {
	    getAbsolutePositionY(): number;
	    getBackgroundRect(): {
	        top: number;
	        bottom: any;
	        height: number;
	    };
	    protected _initMultiColumn(): void;
	    parent: BandSurface;
	    leftMarginTemplate: string;
	}

}
declare module DevExpress.Reporting.Designer {
    import ParameterHelper = DevExpress.Reporting.Viewer.Parameters.ParameterHelper;;
	export class ReportParameterHelper extends ParameterHelper {
	}

}
declare module DevExpress.Reporting.Designer.Data {
	export interface IParameterType {
	    value: string;
	    displayValue: string;
	    defaultVal: any;
	    specifics: string;
	    valueConverter: (val: any) => any;
	}
	export interface IParameterTypeValue {
	    value: string;
	    displayValue: string;
	    defaultValue: any;
	    specifics: string;
	    valueConverter: (val: any, defaultValue?: any) => any;
	    icon?: string;
	    localizationId?: string;
	}
	export class ParameterTypesHelper {
	    static defaultGuidValue: string;
	    static typeValues: IParameterTypeValue[];
	    private _getTypeInfo;
	    private _tryConvertValue;
	    convertSingleValue(value: any, typeName: string): any;
	    getSpecifics(typeName: string): string;
	    getIcon(typeName: string): string;
	    getDefaultValue(typeName: string): any;
	}

}
declare module DevExpress.Reporting.Designer.Data {
    import IParameterTypeValue = DevExpress.Reporting.Designer.Data.IParameterTypeValue;;
	export var parameterSeparator: string;
	export var parameterTypeValues: IParameterTypeValue[];

}
declare module DevExpress.Reporting.Designer.Data.Metadata {
    import Parameter = DevExpress.Reporting.Designer.Data.Parameter;;
	export function parameterValueToJsonObject(value: any): any;
	export function collectAvailableParameters(parameters: Parameter[]): any[];

}
declare module DevExpress.Reporting.Designer.Bands.Internal {
    import DetailReportBand = DevExpress.Reporting.Designer.Bands.DetailReportBand;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;;
	export function addBandToContainer(container: DetailReportBand | ReportViewModel, control: BandViewModel): void;

}
declare module DevExpress.Reporting.Designer.Bands {
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;
    import BandSurface = DevExpress.Reporting.Designer.Bands.BandSurface;;
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
    import VerticalBandsContainerSurface = DevExpress.Reporting.Designer.Bands.Internal.VerticalBandsContainerSurface;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;;

    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import FilterStringOptions = DevExpress.Analytics.Widgets.FilterStringOptions;;
	export class DetailReportBand extends BandViewModel {
	    dispose(): void;
	    initHeight(): void;
	    createChildsArray(band: any, serializer: ModelSerializer): void;
	    addChild(control: IElementViewModel): void;
	    constructor(band: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    dataMember: ko.Observable<string> | ko.Computed<string>;
	    dataSource: ko.Observable<ObjectStorageItem>;
	    _filterString: ko.Observable<string> | ko.Computed<string>;
	    filterString: FilterStringOptions;
	}
	export class DetailReportBandSurface extends BandSurface {
	    dispose(): void;
	    getChildrenCollection(): ko.ObservableArray<BandSurface>;
	    createUnderCursor(): void;
	    getTotalHeight(): number;
	    getHeight(): number;
	    getHasOwnRuler(): boolean;
	    constructor(band: DetailReportBand, context: ISurfaceContext);
	    verticalBandsContainer: VerticalBandsContainerSurface;
	    templateName: string;
	    selectionTemplate: string;
	    leftMarginTemplate: string;
	}

}
declare module DevExpress.Reporting.Designer.Bands {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
    import ReportSurface = DevExpress.Reporting.Designer.Controls.ReportSurface;;
    import DetailReportBandSurface = DevExpress.Reporting.Designer.Bands.DetailReportBandSurface;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import IArea = DevExpress.Analytics.Elements.IArea;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;

    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;;
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;;
	export class VerticalBandViewModel extends BandViewModel {
	    static unitProperties: any[];
	    dispose(): void;
	    initSize(): void;
	    preInit(band: any, parent: ElementViewModel, serializer?: ModelSerializer): void;
	    constructor(band: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    surface: VerticalBandSurface;
	    controls: ko.ObservableArray<XRControlViewModel>;
	    width: ko.Observable<number> | ko.Computed<number>;
	    height: ko.Observable<number> | ko.Computed<number>;
	    widthFromControls: ko.Computed<number>;
	}
	export class VerticalBandSurface extends SurfaceElementBase<VerticalBandViewModel> {
	    static markerHeight: number;
	    static _unitProperties: IUnitProperties<VerticalBandViewModel>;
	    isSomeParentCollapsed: ko.Observable<boolean>;
	    private _resize;
	    private _getRtlAbsolutePositionX;
	    private _getUnitPositionInParent;
	    private readonly _unitAbsoluteRect;
	    constructor(band: VerticalBandViewModel, context: ISurfaceContext, unitProperties?: IUnitProperties<VerticalBandViewModel>);
	    getAbsolutePositionX(): number;
	    updateAbsolutePosition(): void;
	    minimumHeight(): number;
	    minimumWidth(): number;
	    collapsed: ko.Observable<boolean> | ko.Computed<boolean>;
	    resizeHandles: ko.Computed<string>;
	    templateName: string;
	    selectiontemplate: string;
	    contentSelectionTemplate: string;
	    backgroundRect: ko.Computed<IArea>;
	    parent: ReportSurface | DetailReportBandSurface;
	    readonly verticalBandsContainer: DevExpress.Reporting.Designer.Bands.Internal.VerticalBandsContainerSurface;
	    height: ko.Observable<number> | ko.Computed<number>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    coordinateGridOptions: any;
	    canResize: ko.Computed<boolean>;
	    heightFromControls: ko.Computed<number>;
	    widthFromControls: ko.Computed<number>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import XRReportElementViewModel = DevExpress.Reporting.Designer.Controls.XRReportElementViewModel;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export function createObjectFromInfo(control: XRReportElementViewModel, serializationsInfo: ISerializationInfoArray): any;
	export function findFirstParentWithPropertyName(control: any, propertyName: any): any;

}
declare module DevExpress.Reporting.Designer.Bands.Internal {
    import BandSurface = DevExpress.Reporting.Designer.Bands.BandSurface;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export class PrintAcrossBandsPlaceHolder extends Disposable {
	    band: BandSurface;
	    private findNextUntransparentSiblingBand;
	    private findFirstNonAcrossBand;
	    constructor(band: BandSurface);
	    readonly bandModel: DevExpress.Reporting.Designer.Bands.BandViewModel;
	    isVisible: ko.Computed<boolean>;
	    absolutePositionY: ko.Computed<number>;
	    height: ko.Computed<number>;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import IPoint = DevExpress.Analytics.Elements.IPoint;
    import ISize = DevExpress.Analytics.Elements.ISize;;
	export interface IAnchoringProperties {
	    size?: ISize;
	    location?: IPoint;
	    root: any;
	}
	export class Anchoring extends Disposable {
	    static states: {
	        inProgress: string;
	        complete: string;
	        fromControls: string;
	    };
	    anchoring: ko.Observable<string> | ko.Computed<string>;
	    subscribtion: ko.Subscription;
	    dispose(): void;
	    constructor(subscrible: ko.Observable<number> | ko.Computed<number>, model: IAnchoringProperties, anchoringProperty: ko.Observable<string> | ko.Computed<string>);
	    start(subscrible: ko.Observable<number> | ko.Computed<number>, model: IAnchoringProperties): void;
	    anchorSubscribtion: (parentSizeValue: number, oldValue: ko.Observable<number> | ko.Computed<number>, model: IAnchoringProperties) => void;
	    state: string;
	}
	export class VerticalAcnhoring extends Anchoring {
	    anchorSubscribtion: (parentSizeValue: number, oldValue: ko.Observable<number> | ko.Computed<number>, model: IAnchoringProperties) => void;
	    constructor(subscrible: ko.Observable<number> | ko.Computed<number>, model: IAnchoringProperties, anchoringProperty: ko.Observable<string> | ko.Computed<string>);
	}
	export class HorizontalAnchoring extends Anchoring {
	    anchorSubscribtion: (parentSizeValue: number, oldValue: ko.Observable<number> | ko.Computed<number>, model: IAnchoringProperties) => void;
	    constructor(subscrible: ko.Observable<number> | ko.Computed<number>, model: IAnchoringProperties, anchoringProperty: ko.Observable<string> | ko.Computed<string>);
	}

}
declare module DevExpress.Reporting.Designer.Bands {
	export type ReportBandsType = 'TopMarginBand' | 'ReportHeaderBand' | 'PageHeaderBand' | 'GroupHeaderBand' | 'DetailBand' | 'VerticalHeaderBand' | 'VerticalDetailBand' | 'VerticalTotalBand' | 'DetailReportBand' | 'GroupFooterBand' | 'ReportFooterBand' | 'PageFooterBand' | 'BottomMarginBand' | 'SubBand';

}
declare module DevExpress.Reporting.Designer.Internal {
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;;
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
	export function isHeaderOrFooterBandType(band: ElementViewModel): any;
	export function getExistTableOfContents(band: BandViewModel | XRControlViewModel): XRControlViewModel;

}
declare module DevExpress.Reporting.Designer.Bands {

    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import Size = DevExpress.Analytics.Elements.Size;
    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import IArea = DevExpress.Analytics.Elements.IArea;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;;
    import XRReportElementViewModel = DevExpress.Reporting.Designer.Controls.XRReportElementViewModel;;
	export class BandViewModel extends XRReportElementViewModel {
	    static unitProperties: string[];
	    dispose(): void;
	    createChildsArray(band: any, serializer: ModelSerializer): void;
	    initHeight(): void;
	    preInit(band: any, parent: ElementViewModel, serializer?: ModelSerializer): void;
	    constructor(band: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    addChild(control: IElementViewModel): void;
	    getPath(propertyName: any): any;
	    initSize(): void;
	    initialize(): void;
	    removeChild(control: ElementViewModel): void;
	    static isReorderingBand(control: ElementViewModel): boolean;
	    isAllowedParent(target: IElementViewModel): boolean;
	    private _isHeaderBandTypeOrThemSubBands;
	    isPropertyVisible(name: string): any;
	    isPropertyDisabled(name: string): any;
	    level: ko.Observable<number> | ko.Computed<number>;
	    _level: ko.Observable<number> | ko.Computed<number>;
	    size: Size;
	    name: ko.Observable<string> | ko.Computed<string>;
	    height: ko.Observable<number> | ko.Computed<number>;
	    bands: ko.ObservableArray<BandViewModel>;
	    controls: ko.ObservableArray<XRControlViewModel>;
	    heightFromControls: ko.Computed<number>;
	    expanded: ko.Observable<boolean> | ko.Computed<boolean>;
	    parentModel: ko.Observable<BandViewModel | ReportViewModel>;
	    controlType: ReportBandsType;
	    maxLevel: ko.PureComputed;
	}
	export class BandSurface extends SurfaceElementBase<BandViewModel> {
	    private _getMarginWidth;
	    coordinateGridOptions: any;
	    dispose(): void;
	    static _unitProperties: IUnitProperties<BandViewModel>;
	    isSomeParentCollapsed: ko.Observable<boolean>;
	    private _resize;
	    private _isHeaderBandTypeOrThemSubBands;
	    private _getUnitPositionInParent;
	    private readonly _unitAbsoluteRect;
	    createChildCollection(band: BandViewModel): void;
	    createUnderCursor(): void;
	    getTotalHeight(): number;
	    getHeight(): number;
	    getHasOwnRuler(): boolean;
	    getBackgroundRect(): {
	        top: number;
	        bottom: any;
	        height: number;
	    };
	    protected _initMultiColumn(): void;
	    constructor(band: BandViewModel, context: ISurfaceContext, unitProperties?: IUnitProperties<BandViewModel>);
	    getAbsolutePositionY(): number;
	    updateAbsolutePosition(): void;
	    markerClick(selection: SurfaceSelection): void;
	    showMarker: boolean;
	    templateName: string;
	    selectionTemplate: string;
	    vrulerTemplate: string;
	    contentSelectionTemplate: string;
	    leftMarginTemplate: string;
	    leftMarginSelectionTemplate: string;
	    canDrop(): boolean;
	    minHeight: ko.Computed<number>;
	    allowMultiselect: boolean;
	    heightFromControls: ko.Computed<number>;
	    subBandsHeight: ko.Computed<number>;
	    heightWithoutSubBands: ko.Computed<number>;
	    hasOwnRuler: ko.Computed<boolean>;
	    rulerHeight: ko.Computed<number>;
	    height: ko.Computed<number>;
	    markerWidth: ko.Observable<number>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    parent: ReportSurface | BandSurface;
	    bandsHolder: BandsHolder;
	    controls: ko.ObservableArray<XRControlSurface>;
	    readonly zoom: ko.Observable<number> | ko.Computed<number>;
	    collapsed: ko.Observable<boolean> | ko.Computed<boolean>;
	    checkParent(surfaceParent: XRControlSurfaceBase<any>): boolean;
	    canResize: ko.Computed<boolean>;
	    backgroundRect: ko.Computed<IArea>;
	    _totalHeight: ko.Computed<number>;
	    multiColumn: ko.Computed<MultiColumnSurface>;
	    printAcrossBandsPlaceHolder: PrintAcrossBandsPlaceHolder;
	    printAcrossBands: ko.Observable<boolean>;
	}
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;
    import ReportSurface = DevExpress.Reporting.Designer.Controls.ReportSurface;;
    import BandsHolder = DevExpress.Reporting.Designer.Bands.Internal.BandsHolder;;
    import PrintAcrossBandsPlaceHolder = DevExpress.Reporting.Designer.Bands.Internal.PrintAcrossBandsPlaceHolder;;
    import MultiColumnSurface = DevExpress.Reporting.Designer.Bands.MultiColumnSurface;;
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;
    import XRControlSurfaceBase = DevExpress.Reporting.Designer.Controls.XRControlSurfaceBase;;
    import ReportBandsType = DevExpress.Reporting.Designer.Bands.ReportBandsType;;

}
declare module DevExpress.Reporting.Designer.Internal {
	export enum DataBindingMode {
	    Bindings = "Bindings",
	    Expressions = "Expressions",
	    ExpressionsAdvanced = "ExpressionsAdvanced"
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;;

	export class SortingOptions extends Disposable implements ISerializableModel {
	    private _info;
	    private _fieldNameInfo;
	    targetBand: ko.Observable<BandViewModel>;
	    fieldName: ko.Observable<string> | ko.Computed<string>;
	    private _getFieldNames;
	    getInfo(): ISerializationInfoArray;
	    isPropertyDisabled(name: string): boolean;
	    resetValue(): void;
	    constructor(model: {}, report: ReportViewModel, serializer?: IModelSerializer);
	    getPath(propertyName: string): any;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;;
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;;
	export function getNearestBand(target: IElementViewModel): BandViewModel;

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRReportElementViewModel = DevExpress.Reporting.Designer.Controls.XRReportElementViewModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import IArea = DevExpress.Analytics.Elements.IArea;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;;

    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
    import IExpressionOptions = DevExpress.Analytics.Widgets.IExpressionOptions;;
    import IReportControlMetadata = DevExpress.Reporting.Designer.Controls.IReportControlMetadata;;
    import IExpressionBinding = DevExpress.Reporting.Designer.Controls.IExpressionBinding;;
    import DataBinding = DevExpress.Reporting.Designer.Data.DataBinding;;
    import IAnchoringProperties = DevExpress.Reporting.Designer.Controls.IAnchoringProperties;
    import VerticalAcnhoring = DevExpress.Reporting.Designer.Controls.VerticalAcnhoring;
    import HorizontalAnchoring = DevExpress.Reporting.Designer.Controls.HorizontalAnchoring;;
    import SortingOptions = DevExpress.Reporting.Designer.Controls.SortingOptions;;
	export class XRControlViewModel extends XRReportElementViewModel {
	    dispose(): void;
	    anchoring(parent: IAnchoringProperties): void;
	    constructor(control: any, parent: ElementViewModel, serializer?: IModelSerializer);
	    getNearestParent(target: IElementViewModel): any;
	    isPropertyDisabled(name: any): any;
	    isPropertyVisible(name: any): boolean;
	    hasExpressionBindings(): boolean;
	    hasDataBindingByName(property?: string): boolean;
	    readonly hasDefaultBindingProperty: boolean;
	    getExpressionBinding(property?: string, event?: string): string;
	    setExpressionBinding(value: string, property?: string, event?: string): void;
	    getControlInfo(): IReportControlMetadata;
	    getDefaultBinding(): IExpressionOptions | DataBinding;
	    textArea: ko.Observable<string> | ko.Computed<string>;
	    multiline: ko.Observable<boolean> | ko.Computed<boolean>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    text: ko.Observable<string> | ko.Computed<string>;
	    textFormatString: ko.Observable<string> | ko.Computed<string>;
	    controls: ko.ObservableArray<XRControlViewModel>;
	    popularDataBinding: any;
	    anchorVertical: ko.Observable<string> | ko.Computed<string>;
	    anchorHorizontal: ko.Observable<string> | ko.Computed<string>;
	    vertAnchoring: VerticalAcnhoring;
	    horAnchoring: HorizontalAnchoring;
	    hasBindings: ko.Computed<boolean>;
	    interactiveSorting: SortingOptions;
	    expressionBindings: ko.ObservableArray<IExpressionBinding>;
	    dataBindingsAreValid: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export class XRControlSurfaceBase<M extends ElementViewModel> extends SurfaceElementBase<M> {
	    private delta;
	    private _isThereIntersectionWithUsefulArea;
	    static _appendValue(accumulator: string, value: string, needToAppend?: boolean): string;
	    protected readonly _unitAbsoluteRect: IArea;
	    private readonly _unitRect;
	    constructor(control: M, context: ISurfaceContext, unitProperties: IUnitProperties<M>);
	    checkParent(surfaceParent: ISelectionTarget): boolean;
	    isThereIntersection(rect1: IArea, rect2: IArea): boolean;
	    isThereIntersectionWithParent(parentRect: IArea, childRect: IArea): boolean;
	    isThereIntersectionWithUsefulArea(): boolean;
	    isThereIntersectionWithCrossBandControls(currentRect?: IArea): boolean;
	    isThereIntersectionWithControls(): boolean;
	    isThereIntersectionWithParentCollection(currentRect: any, controlRectProperty?: string): boolean;
	    isThereIntersectionWithChildCollection(controlRectProperty?: string): boolean;
	    isThereIntersectionWithNeighborsCollection(currentRect: any, collectionControls: any, controlRectProperty?: string): boolean;
	    isThereIntersectionWithChildControls(collectionControls: any, controlRectProperty?: string): boolean;
	    getAdornTemplate(): string;
	    hasDataBindingByName(propertyName: string): boolean;
	    readonly hasBindings: boolean;
	    readonly bindingsIsValid: any;
	    readonly bindingsHasWarning: any;
	    contentSizes: any;
	    contentHeightWithoutZoom: any;
	    contentWidthWithoutZoom: any;
	    borderCss: any;
	    template: string;
	    selectiontemplate: string;
	    contenttemplate: string;
	    isIntersect: ko.Computed<boolean>;
	    adorntemplate: ko.Computed<string>;
	    displayNameParameters: ko.PureComputed<{
	        text: any;
	        isExpression: boolean;
	        dataSource: any;
	        dataMember: any;
	        dataMemberOffset: any;
	        allowMarkupText: boolean;
	        wordWrap: boolean;
	        fontSize: number;
	        fontUnit: any;
	    }>;
	    displayName: ko.PureComputed<any>;
	    displayText(): any;
	}
	export class XRControlSurface extends XRControlSurfaceBase<XRControlViewModel> {
	    dispose(): void;
	    static _unitProperties: IUnitProperties<XRControlViewModel>;
	    constructor(control: XRControlViewModel, context: ISurfaceContext);
	    controls: ko.ObservableArray<XRControlSurface>;
	}

}
declare module DevExpress.Reporting.Designer {
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
	export class ReportStorageWeb {
	    static getErrorMessageHandler(defaultErrorMessage?: string): (message: string, jqXHR: JQueryXHR, textStatus: string) => void;
	    static getReportByUrl(url: string): JQueryPromise<ReportViewModel>;
	    static getData(url: string): any;
	    static setData(layout: string, url: string): any;
	    static setNewData(layout: string, url: string): JQueryPromise<any>;
	    static getUrls(subreports?: any): any;
	}

}
declare module DevExpress.Reporting.Designer.Tools {
    import ReportDesignerContext = DevExpress.Reporting.Designer.ReportDesignerContext;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;
    import IDisposable = DevExpress.Analytics.Utils.IDisposable;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export interface INavigateTab extends IDisposable {
	    displayName: ko.Computed<string>;
	    isDirty: ko.Observable<boolean> | ko.Computed<boolean>;
	    close?: JQueryDeferred<any>;
	    icon?: string;
	    context: ko.Observable<ReportDesignerContext> | ko.Computed<ReportDesignerContext>;
	    undoEngine: UndoEngine;
	    report: ko.Computed<ReportViewModel>;
	    url: ko.Computed<string>;
	}
	export interface INavigateTabCallbacks {
	    createContext: (report: ReportViewModel, url: string | ko.Observable<string> | ko.Computed<string>) => ReportDesignerContext;
	    afterInititalize: (tab: NavigateTab) => void;
	}
	export interface INavigateTabOptions {
	    report: ReportViewModel;
	    url: string | ko.Observable<string> | ko.Computed<string>;
	    isReportLoading: ko.Observable<boolean> | ko.Computed<boolean>;
	    callbacks: INavigateTabCallbacks;
	}
	export class NavigateTab extends Disposable implements INavigateTab {
	    dispose(): void;
	    private _generateDisplayName;
	    private _createReport;
	    private _createReportUrl;
	    changeContext(report: ReportViewModel, reportUrl: string): void;
	    resetIsModified(): void;
	    refresh(resetState: boolean): void;
	    constructor(options: INavigateTabOptions);
	    private _callbacks;
	    displayName: ko.Computed<string>;
	    isDirty: ko.Observable<boolean> | ko.Computed<boolean>;
	    isModified: ko.Observable<boolean> | ko.Computed<boolean>;
	    close: JQueryDeferred<any>;
	    icon: string;
	    undoEngine: UndoEngine;
	    _isReportLoading: ko.Observable<boolean> | ko.Computed<boolean>;
	    report: ko.Computed<ReportViewModel>;
	    url: ko.Computed<string>;
	    context: ko.Observable<ReportDesignerContext> | ko.Computed<ReportDesignerContext>;
	}

}
declare module DevExpress.Reporting.Designer.Tools {
    import INavigateTab = DevExpress.Reporting.Designer.Tools.INavigateTab;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export interface IDialogModel {
	    getUrl: () => string;
	    setUrl: (url: string) => void;
	    onShow: (tab: INavigateTab) => void;
	    popupButtons: any[];
	}
	export class ReportDialogBase extends Disposable {
	    private _visible;
	    dispose(): void;
	    show(tab: INavigateTab): void;
	    customize(template: string, model: IDialogModel): void;
	    constructor();
	    width: ko.Observable<any>;
	    height: ko.Observable<any>;
	    template: ko.Observable<string>;
	    buttons: any[];
	    model: ko.Observable<IDialogModel>;
	    tab: ko.Observable<INavigateTab>;
	    disabled: ko.Observable<boolean>;
	    visible: ko.Computed<boolean>;
	    cancel(): void;
	    container: (element: HTMLElement) => JQuery<HTMLElement>;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class ExtensionModel {
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    key: ko.Observable<string> | ko.Computed<string>;
	    value: ko.Observable<string> | ko.Computed<string>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
	export class TextElementSizeHelper {
	    private _spaceSymbol;
	    private _$createElement;
	    $createTextElement(text: string, options: Object): JQuery<HTMLElement>;
	    $createSpaceElement(options: Object): JQuery<HTMLElement>;
	    getTextContainerSize(text: any, options: any, increaseHeight?: number): {
	        width: number;
	        height: number;
	    };
	}

}
declare module DevExpress.Reporting.Designer.Actions {
    import XRTextControlSurfaceBase = DevExpress.Reporting.Designer.Controls.XRTextControlSurfaceBase;;
    import TextElementSizeHelper = DevExpress.Reporting.Designer.Internal.TextElementSizeHelper;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
	export class FitTextToBoundsAction {
	    _control: XRTextControlSurfaceBase<ElementViewModel>;
	    textElementHelper: TextElementSizeHelper;
	    private _getTextSide;
	    private _calculateFont;
	    private _getAvailableFont;
	    fit(): void;
	    constructor(_control: XRTextControlSurfaceBase<ElementViewModel>, textElementHelper?: TextElementSizeHelper);
	}

}
declare module DevExpress.Reporting.Designer.Actions {
    import XRTextControlSurfaceBase = DevExpress.Reporting.Designer.Controls.XRTextControlSurfaceBase;;
    import TextElementSizeHelper = DevExpress.Reporting.Designer.Internal.TextElementSizeHelper;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
	export class FitBoundsToTextAction {
	    _control: XRTextControlSurfaceBase<ElementViewModel>;
	    textElementHelper: TextElementSizeHelper;
	    private _getNewRectForVetical;
	    private _findWidth;
	    private _getNewRectForHorizontal;
	    private _getTextContainerSize;
	    private _getTextHeight;
	    fitWidth(): void;
	    fitHeight(): void;
	    fitBounds(): void;
	    constructor(_control: XRTextControlSurfaceBase<ElementViewModel>, textElementHelper?: TextElementSizeHelper);
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlSurfaceBase = DevExpress.Reporting.Designer.Controls.XRControlSurfaceBase;;
    import FitTextToBoundsAction = DevExpress.Reporting.Designer.Actions.FitTextToBoundsAction;;
    import FitBoundsToTextAction = DevExpress.Reporting.Designer.Actions.FitBoundsToTextAction;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;;

    import FontModel = DevExpress.Analytics.Widgets.Internal.FontModel;;
	export class XRTextControlSurfaceBase<M extends ElementViewModel> extends XRControlSurfaceBase<M> {
	    private _$element;
	    private _font;
	    characterHeight: ko.Computed<number>;
	    contenttemplate: string;
	    getAlignments(): {
	        vertical: string;
	        horizontal: string;
	    };
	    getWordWrap(): any;
	    getCssContent(content?: Object): Object;
	    getContentSize(): any;
	    getText(): string;
	    getFontModel(): FontModel;
	    setFontSize(size: any): void;
	    cacheElementContent($element: JQuery): void;
	    fitTextToBounds(): void;
	    fitWidthToText(): void;
	    fitHeightToText(): void;
	    fitBoundsToText(): void;
	    constructor(control: M, context: ISurfaceContext, units?: IUnitProperties<any>);
	    fitTextToBoundsAction: FitTextToBoundsAction;
	    fitBoundsToTextAction: FitBoundsToTextAction;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import XRTextControlSurfaceBase = DevExpress.Reporting.Designer.Controls.XRTextControlSurfaceBase;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import IArea = DevExpress.Analytics.Elements.IArea;;
	export enum TableActionDirection {
	    vertical = 0,
	    horizontal = 1
	}
	export class TableComponentSurface<T extends ElementViewModel> extends XRTextControlSurfaceBase<T> {
	    private _getNeededProperties;
	    private _generateRect;
	    beforeRectUpdated(rect: IArea): IArea;
	    direction: TableActionDirection;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
    import XRTableControlViewModel = DevExpress.Reporting.Designer.Controls.XRTableControlViewModel;;
    import XRTableCellViewModel = DevExpress.Reporting.Designer.Controls.XRTableCellViewModel;
    import XRTableCellSurface = DevExpress.Reporting.Designer.Controls.XRTableCellSurface;;
    import TableComponentSurface = DevExpress.Reporting.Designer.Internal.TableComponentSurface;
    import TableActionDirection = DevExpress.Reporting.Designer.Internal.TableActionDirection;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;

    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;;
	export class XRTableRowViewModel extends XRControlViewModel {
	    static unitProperties: any[];
	    dispose(): void;
	    constructor(control: any, parent: XRTableControlViewModel, serializer?: ModelSerializer);
	    hasCalculationNode(cellIndex: number): boolean;
	    addCellToCalculation(cellIndex: number, delta: number): void;
	    addColumnToCalculation(diff: number, last?: boolean): void;
	    addTableOffset(width?: number, left?: number): void;
	    addChild(control: IElementViewModel, position?: number, onComponentAdded?: any): void;
	    insertCellCopy(selectedCell: XRTableCellViewModel, isRight: boolean, onComponentAdded: any): void;
	    removeChild(selectedCell: XRTableCellViewModel): void;
	    parentModel: ko.Observable<XRTableControlViewModel>;
	    cells: ko.ObservableArray<XRTableCellViewModel>;
	    cellsTotalWeight: ko.Computed<number>;
	    pixelWidthWeight: ko.Computed<number>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    weight: ko.Observable<number> | ko.Computed<number>;
	    width: ko.Observable<number> | ko.Computed<number>;
	    height: ko.Computed<number>;
	    top: ko.Observable<number> | ko.Computed<number>;
	    surface: XRTableRowSurface;
	}
	export class XRTableRowSurface extends TableComponentSurface<XRTableRowViewModel> {
	    static _unitProperties: IUnitProperties<XRTableRowViewModel>;
	    _getChildrenHolderName(): string;
	    dispose(): void;
	    constructor(control: XRTableRowViewModel, context: ISurfaceContext);
	    getAdornTemplate(): string;
	    direction: TableActionDirection;
	    y: ko.Observable<number> | ko.Computed<number>;
	    cells: ko.ObservableArray<XRTableCellSurface>;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;;
    import XRTableRowViewModel = DevExpress.Reporting.Designer.Controls.XRTableRowViewModel;;
    import TableComponentSurface = DevExpress.Reporting.Designer.Internal.TableComponentSurface;
    import TableActionDirection = DevExpress.Reporting.Designer.Internal.TableActionDirection;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import IArea = DevExpress.Analytics.Elements.IArea;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;

	export class XRTableCellViewModel extends XRControlViewModel {
	    static unitProperties: string[];
	    constructor(model: any, parent: XRTableRowViewModel, serializer?: ModelSerializer);
	    weight: ko.Observable<number> | ko.Computed<number>;
	    width: ko.Computed<number>;
	    height: ko.Computed<number>;
	    left: ko.Observable<number> | ko.Computed<number>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    text: ko.Observable<string> | ko.Computed<string>;
	    surface: XRTableCellSurface;
	    borders: ko.Observable<string> | ko.Computed<string>;
	    parentModel: ko.Observable<XRTableRowViewModel>;
	}
	export class XRTableCellSurface extends TableComponentSurface<XRTableCellViewModel> {
	    private _row;
	    private _table;
	    private _cellIndex;
	    private _rowIndex;
	    private _getAdjacentCellByRowIndex;
	    private _isShowBorder;
	    static _unitProperties: IUnitProperties<XRTableCellViewModel>;
	    dispose(): void;
	    constructor(control: XRTableCellViewModel, context: ISurfaceContext);
	    direction: TableActionDirection;
	    controls: ko.ObservableArray<XRControlSurface>;
	    x: ko.Observable<number> | ko.Computed<number>;
	    rowSpan: ko.Computed<number>;
	    heightWithRowSpan: () => number;
	    offsetZIndex: () => number;
	    selectColumn(selection: ISelectionProvider): void;
	    checkParent(surfaceParent: ISelectionTarget): boolean;
	    isThereIntersectionWithUsefulArea(): boolean;
	    isThereIntersectionWithCrossBandControls(): boolean;
	    isThereIntersectionWithNeighborsCollection(): boolean;
	    isThereIntersectionWithParentCollection(): boolean;
	    beforeRectUpdated(rect: IArea): IArea;
	    canDrop(): boolean;
	    getAdornTemplate(): string;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import XRTableControlViewModel = DevExpress.Reporting.Designer.Controls.XRTableControlViewModel;;
	export interface ITableCalculationNode {
	    column: number;
	    row: number;
	    calc: () => void;
	}
	export class TableCalculationProvider {
	    private _table;
	    private _tableOffset;
	    private _calculationStarted;
	    private _calculationTimeout;
	    private _calculationNodes;
	    private _resetState;
	    private _startCalculation;
	    constructor(_table: XRTableControlViewModel);
	    addTableOffset(width: any, left: any): void;
	    addCalculationNode(node: ITableCalculationNode): void;
	    hasCalculationNode(rowIndex: number, cellIndex: number): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;
    import XRControlSurfaceBase = DevExpress.Reporting.Designer.Controls.XRControlSurfaceBase;;
    import XRTableCellViewModel = DevExpress.Reporting.Designer.Controls.XRTableCellViewModel;
    import XRTableCellSurface = DevExpress.Reporting.Designer.Controls.XRTableCellSurface;;
    import XRTableRowViewModel = DevExpress.Reporting.Designer.Controls.XRTableRowViewModel;
    import XRTableRowSurface = DevExpress.Reporting.Designer.Controls.XRTableRowSurface;;
    import TableCalculationProvider = DevExpress.Reporting.Designer.Internal.TableCalculationProvider;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import Point = DevExpress.Analytics.Elements.Point;
    import Size = DevExpress.Analytics.Elements.Size;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;

    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
	export class XRTableControlViewModel extends XRControlViewModel {
	    private _getAdjacentCells;
	    dispose(): void;
	    constructor(control: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    updateRowLocation(row: XRTableRowViewModel, deltaHeight: number): void;
	    addChild(control: IElementViewModel, position?: number, onComponentAdded?: any): void;
	    insertRow(selectedRow: XRTableRowViewModel, isRowAbove: boolean, onComponentAdded: any): void;
	    removeChild(selectedRow: XRTableRowViewModel): void;
	    insertColumn(selectedCell: XRTableCellViewModel, isRight: boolean, onComponentAdded: any): void;
	    addColumnToCalculation(diff: number, last?: boolean): void;
	    tableCalculationProvider: TableCalculationProvider;
	    rows: ko.ObservableArray<XRTableRowViewModel>;
	    rowsTotalWeight: ko.Computed<number>;
	    pixelHeightWeight: ko.Computed<number>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    size: Size;
	    location: Point;
	    surface: XRTableSurface;
	}
	export class XRTableSurface extends XRControlSurfaceBase<XRTableControlViewModel> {
	    private _isUpdating;
	    static _unitProperties: IUnitProperties<XRTableControlViewModel>;
	    _getChildrenHolderName(): string;
	    dispose(): void;
	    constructor(control: XRTableControlViewModel, context: ISurfaceContext);
	    private _isCellInColumn;
	    selectColumn(selection: ISelectionProvider, cellSurface: XRTableCellSurface): void;
	    isThereIntersectionWithChildCollection(): boolean;
	    rows: ko.ObservableArray<XRTableRowSurface>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
	export function getDataSourceDataMember(control: any): {
	    dataSource: ObjectStorageItem;
	    dataMember: string;
	};

}
declare module DevExpress.Reporting.Designer.Internal {
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import PathRequest = DevExpress.Analytics.Utils.PathRequest;;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISize = DevExpress.Analytics.Elements.ISize;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
	export function selectTreeListItem(item: TreeListItemViewModel, event: JQueryEventObject): void;
	export function getExpressionPath(container: any, pathRequest: string | PathRequest): string;
	export function getFirstSurfaceParentByType(target: ISelectionTarget, checkBandsType: (target: ISelectionTarget) => boolean): any;
	export function getUsefulReportWidth(surface?: ReportSurface): ISize;
	export function createPictureBox(container: ElementViewModel, bindingPath: string, dataBindingMode: string): any;
	export var _checkBandsType: (target: any) => boolean;
	export function createSimpleControl(controlType: string, dropTargetControl: ElementViewModel): any;
	export function assignBinding(control: any, container: any, bindingName: string, item: TreeListItemViewModel, dataBindingMode: any): any;
	export function isList(data: IDataMemberInfo): boolean;
	export function dragDropComponentAdded(model: any, parent: any): void;
    import ReportSurface = DevExpress.Reporting.Designer.Controls.ReportSurface;;

}
declare module DevExpress.Reporting.Designer.Internal {
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import ObjectItem = DevExpress.Reporting.Designer.Data.ObjectItem;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;;

    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
	export function addDataSourceToReport(dataSourceHelper: DataSourceHelper, report: ReportViewModel, undoEngine: UndoEngine, itemsProvider: IItemsProvider, dataSource: IDataSourceInfo, forceAssigning?: boolean): void;
	export function includeNonListItem(dataMembers: IDataMemberInfo[]): boolean;
	export function removeDataSourceFromReport(dataSourceHelper: DataSourceHelper, reportDataSource: ko.Observable<ObjectItem> | ko.Computed<ObjectItem>, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, dataSource: IDataSourceInfo): void;

}
declare module DevExpress.Reporting.Designer.Internal {
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;
    import TableQuery = DevExpress.Analytics.Data.TableQuery;;
    import IObjectDataSourceWizardState = DevExpress.Analytics.Wizard.IObjectDataSourceWizardState;;
	export class ReportDataSourceService {
	    static fieldListCallback(request: IPathRequest): JQueryPromise<IDataMemberInfo[]>;
	    static getCustomQueriesPreset(dataSource: SqlDataSource): JQueryPromise<TableQuery[]>;
	    static sqlDataSourceFromBase64(base64: string): JQueryPromise<{
	        sqlDataSourceJSON: string;
	        queryName: string;
	        relationsEditing: boolean;
	    }>;
	    static getSqlDataSourceBase64(dataSource: SqlDataSource): JQueryPromise<string>;
	    static getJsonDataSourceBase64(dataSource: JsonDataSource): JQueryPromise<{
	        base64: string;
	        schema: string;
	    }>;
	    static getObjectDataSourceBase64(json: IObjectDataSourceWizardState): JQueryPromise<string>;
	    static editObjectDataSourceParameters(json: IObjectDataSourceWizardState, base64: string): JQueryPromise<string>;
	    static objectDataSourceFromBase64(base64: string): JQueryPromise<IObjectDataSourceWizardState>;
	    static jsonDataSourceFromBase64(base64: string): JQueryPromise<{
	        jsonDataSourceJSON: string;
	    }>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
	export var QBRequestWrapper: (newVal?: RequestWrapper) => RequestWrapper;

}
declare module DevExpress.Reporting.Designer.Internal {
    import DataSourceEditorBase = DevExpress.Reporting.Designer.Internal.DataSourceEditorBase;
    import IDataSourceInfo = DevExpress.Reporting.Designer.Internal.IDataSourceInfo;;
    import DataSourceWizardPageIterator = DevExpress.Analytics.Wizard.DataSourceWizardPageIterator;
    import IDataSourceWizardState = DevExpress.Analytics.Wizard.IDataSourceWizardState;
    import IDataSourceWizardConnectionStrings = DevExpress.Analytics.Wizard.IDataSourceWizardConnectionStrings;;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;;
    import IAction = DevExpress.Analytics.Utils.IAction;;
	export class JsonEditSchemaIterator extends DataSourceWizardPageIterator {
	    getNextPageId(pageId: any): any;
	}
	export class JsonDataSourceEditor extends DataSourceEditorBase {
	    private _applyDataSourceChange;
	    editSchema(dataSourceID: string): void;
	    applyDataSourceWizardChanges(dataSourceWizardModel: IDataSourceWizardState): JQueryPromise<IDataSourceInfo>;
	    saveJsonSource(state: IDataSourceWizardState, connections: IDataSourceWizardConnectionStrings): JQuery.Promise<any, any, any>;
	    static createJsonDataSourceInfo(source: JsonDataSource): JQueryPromise<IDataSourceInfo>;
	    editSchemaAction: {
	        clickAction: (item: any) => void;
	        position: number;
	        imageClassName: string;
	        imageTemplateName: string;
	        text: any;
	    };
	    getActions(context: any): IAction<any>[];
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import DataSourceEditorBase = DevExpress.Reporting.Designer.Internal.DataSourceEditorBase;
    import IDataSourceInfo = DevExpress.Reporting.Designer.Internal.IDataSourceInfo;;
    import DataSourceWizardPageIterator = DevExpress.Analytics.Wizard.DataSourceWizardPageIterator;
    import IObjectDataSourceWizardState = DevExpress.Analytics.Wizard.IObjectDataSourceWizardState;
    import IDataSourceWizardState = DevExpress.Analytics.Wizard.IDataSourceWizardState;;
    import IAction = DevExpress.Analytics.Utils.IAction;;
    import ObjectDataSource = DevExpress.Analytics.Data.ObjectDataSource;;
	export class ObjectDataSourceEditParametersIterator extends DataSourceWizardPageIterator {
	    getNextPageId(pageId: any): any;
	}
	export class ObjectDataSourceEditor extends DataSourceEditorBase {
	    static createObjectDataSourceInfo(objectDataSourceWizard: IObjectDataSourceWizardState, objectDataSource: ObjectDataSource, base64?: string): JQueryPromise<IDataSourceInfo>;
	    applyDataSourceWizardChanges(dataSourceWizardModel: IDataSourceWizardState): JQuery.Promise<IDataSourceInfo, any, any>;
	    getActions(context: any): IAction[];
	    editSchema(dataSourceID: string): void;
	    editParametersAction: {
	        clickAction: (item: any) => void;
	        position: number;
	        imageClassName: string;
	        imageTemplateName: string;
	        text: any;
	    };
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import IActionsProvider = DevExpress.Analytics.Internal.IActionsProvider;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;
    import IAction = DevExpress.Analytics.Utils.IAction;;
	export class DataSourceActions implements IActionsProvider {
	    private _dsHelper;
	    private _reportViewModel;
	    private _undoEngine;
	    private _findDataSource;
	    constructor(dsHelper: ko.Observable<DataSourceHelper> | ko.Computed<DataSourceHelper>, reportViewModel: ko.Observable<ReportViewModel> | ko.Computed<ReportViewModel>, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>);
	    removeDataSource(dataSourceID: string): void;
	    removeDataSourceAction: {
	        clickAction: (item: any) => void;
	        position: number;
	        imageClassName: string;
	        imageTemplateName: string;
	        text: any;
	    };
	    getActions(context: any): IAction<any>[];
	}

}
declare module DevExpress.Reporting.Designer.Internal {

	export interface ISummaryOptions {
	    columnName: string;
	    flags: number;
	}
	export class SummaryOptionsWrapper {
	    private _name;
	    private static _getNumber;
	    constructor(name: string, displayName: string);
	    columnName: string;
	    avg: ko.Observable<boolean>;
	    count: ko.Observable<boolean>;
	    max: ko.Observable<boolean>;
	    min: ko.Observable<boolean>;
	    sum: ko.Observable<boolean>;
	    getOptions(): ISummaryOptions;
	}

}
declare module DevExpress.Reporting.Designer.Wizard {
	export enum ReportLayout {
	    stepped = 0,
	    block = 1,
	    outline1 = 2,
	    outline2 = 3,
	    alignLeft1 = 4,
	    alignLeft2 = 5,
	    columnar = 6,
	    tabular = 7,
	    justified = 8
	}
	export class LayoutTypeItem {
	    layoutType: ReportLayout;
	    margin: number;
	    constructor(textValue: string, textID: string, layoutType: ReportLayout, margin: number);
	    text: string;
	    readonly imageClassName: string;
	}
	export enum PageOrientation {
	    Portrait = 0,
	    Landscape = 1
	}
	export class PageOrientationItem {
	    orientation: PageOrientation;
	    constructor(textValue: string, textID: string, orientation: PageOrientation);
	    text: string;
	}

}
declare module DevExpress.Reporting.Designer.Wizard {
	export enum ReportStyle {
	    Bold = 0,
	    Casual = 1,
	    Compact = 2,
	    Corporate = 3,
	    Formal = 4
	}
	export class ReportStyleItem {
	    reportStyle: ReportStyle;
	    constructor(textDefault: string, textID: string, reportStyle: ReportStyle);
	    text: string;
	    readonly className: string;
	}

}
declare module DevExpress.Reporting.Designer.Wizard {
    import GraphicsUnit = DevExpress.Reporting.Designer.Wizard.GraphicsUnit;;
	export interface ILabelProduct {
	    id: number;
	    name: string;
	}
	export interface IPaperKind {
	    id: number;
	    enumId: number;
	    name: string;
	    width: number;
	    height: number;
	    isRollPaper: boolean;
	    unit: GraphicsUnit;
	}
	export interface ILabelDetails {
	    id: number;
	    productId: number;
	    paperKindId: number;
	    name: string;
	    width: number;
	    height: number;
	    hPitch: number;
	    vPitch: number;
	    topMargin: number;
	    leftMargin: number;
	    rightMargin: number;
	    bottomMargin: number;
	    unit: GraphicsUnit;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IAction = DevExpress.Analytics.Utils.IAction;;
    import IActionsProvider = DevExpress.Analytics.Internal.IActionsProvider;
    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;
    import ITreeListController = DevExpress.Analytics.Widgets.Internal.ITreeListController;;
	export class FieldListController implements ITreeListController {
	    private _actionProviders;
	    private _fieldListActionWrapper;
	    private _customizeFieldListActions;
	    private _selectedItems;
	    dispose(): void;
	    constructor(actionProviders?: IActionsProvider[], fieldListActionWrapper?: (actions: IAction[]) => void, dragDropHandler?: DragDropHandler, customizeFieldListActions?: (item: IDataMemberInfo, actions: IAction[]) => void);
	    itemsFilter(item: IDataMemberInfo): boolean;
	    static isList(item: IDataMemberInfo): boolean;
	    hasItems: typeof FieldListController.isList;
	    select(item: TreeListItemViewModel): void;
	    canSelect(item: TreeListItemViewModel): boolean;
	    getActions(item: TreeListItemViewModel): IAction<any>[];
	    canMultiSelect(item: TreeListItemViewModel): any;
	    multiSelect(item: TreeListItemViewModel, isShiftPressed?: boolean, isCtrlPressed?: boolean): void;
	    isDraggable(item: TreeListItemViewModel): boolean;
	    dragDropHandler: DragDropHandler;
	    selectedItem: TreeListItemViewModel;
	    selectedItems(): TreeListItemViewModel[];
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import FieldListController = DevExpress.Reporting.Designer.Internal.FieldListController;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;

    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;
    import DataMemberTreeListController = DevExpress.Analytics.Widgets.Internal.DataMemberTreeListController;;
    import DataMemberTreeNode = DevExpress.Analytics.Wizard.Internal.DataMemberTreeNode;
    import FieldTreeNode = DevExpress.Analytics.Wizard.Internal.FieldTreeNode;;
    import FieldInfo = DevExpress.Reporting.Designer.Internal.FieldInfo;;
	export interface IMasterDetailInfoBase {
	    name: string;
	    displayName: string;
	    specifics: string;
	}
	export interface IMasterDetailFieldInfo extends IMasterDetailInfoBase {
	    checked: boolean;
	}
	export interface IMasterDetailQueryInfo extends IMasterDetailInfoBase {
	    path: string;
	    checked: boolean;
	    fields: IMasterDetailFieldInfo[];
	    relations: IMasterDetailQueryInfo[];
	}
	export class MasterDetailInfoBase implements IMasterDetailInfoBase {
	    name: string;
	    specifics: string;
	    constructor(name: string, specifics: string, displayName?: string);
	    displayName: string;
	}
	export interface IMasterDetailReportTree {
	    name: string;
	    displayName?: string;
	    path: string;
	    fields: IDataMemberInfo[];
	    level: number;
	}
	export class MasterDetailFieldInfo extends MasterDetailInfoBase implements IMasterDetailFieldInfo {
	    constructor(field: FieldTreeNode);
	    checked: boolean;
	}
	export class MasterDetailQueryInfo extends MasterDetailInfoBase implements IMasterDetailQueryInfo {
	    private _complexFields;
	    private _complexRelations;
	    private _expandComplexFieds;
	    constructor(dataMember: DataMemberTreeNode);
	    path: string;
	    checked: boolean;
	    fields: IMasterDetailFieldInfo[];
	    relations: IMasterDetailQueryInfo[];
	}
	export class DataMemberCustomCheckedTreeNode extends DataMemberTreeNode {
	    constructor(name: string, displayName: string, specifics: string, isChecked: boolean, path: string, afterCheckToggled?: (node: DataMemberTreeNode) => void);
	    setChecked(value: boolean): void;
	}
	export class MasterDetailTreeListController extends DataMemberTreeListController {
	    constructor(hideDataMemberSubItems: any);
	    canSelect(value: TreeListItemViewModel): boolean;
	    hasItems(item: IDataMemberInfo): boolean;
	    hideDataMemberSubItems: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export class AvailableFieldsTreeListController extends FieldListController {
	    constructor(rootItems: any);
	    itemsFilter(item: DataMemberTreeNode): boolean;
	    isDraggable(item: TreeListItemViewModel): boolean;
	    rootItems: any;
	}
	export interface ISummaryDataMemberInfo extends IDataMemberInfo {
	    path?: string;
	    fields?: ISummaryDataMemberInfo[];
	    parent?: {
	        path?: string;
	        displayName?: string;
	    };
	}
	export class SummaryInfo extends FieldInfo {
	}
	export class SummaryInfoFieldlist extends SummaryInfo {
	    constructor();
	    field: ko.Observable<ISummaryDataMemberInfo>;
	    selectedPath: ko.Observable<string>;
	    displayName: ko.Computed<string>;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;

    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class EditOptionsEditorNameEditorModel extends Editor {
	    constructor(modelPropertyInfo: ISerializationInfo, level: any, parentDisabled?: ko.Observable<boolean>, textToSearch?: any);
	    itemsProvider: IItemsProvider;
	    displayValue: ko.Observable<string>;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;;
	export class EditOptions implements ISerializableModel {
	    id: ko.Observable<string> | ko.Computed<string>;
	    enabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    constructor(model: {}, serializer?: IModelSerializer);
	    getInfo(): ISerializationInfoArray;
	    isEmpty(): boolean;
	    isPropertyDisabled(name: string): boolean;
	}
	export class CheckEditOptions extends EditOptions {
	    groupID: ko.Observable<string> | ko.Computed<string>;
	    constructor(model: {}, serializer?: IModelSerializer);
	    getInfo(): ISerializationInfoArray;
	}
	export class ImageEditOptions extends EditOptions {
	    editorName: ko.Observable<string> | ko.Computed<string>;
	    constructor(model: {}, serializer?: IModelSerializer);
	    getInfo(): ISerializationInfoArray;
	}
	export class TextEditOptions extends EditOptions {
	    editorName: ko.Observable<string> | ko.Computed<string>;
	    constructor(model: {}, serializer?: IModelSerializer);
	    getInfo(): ISerializationInfoArray;
	}

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var editOptionsSerializationInfo: ISerializationInfoArray;
	export var editOptions: ISerializationInfo;
	export var textEditOptions: ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export var anchorVertical: ISerializationInfo;
	export var anchorHorizontal: ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Data.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var dataBindingBaseSerializationInfo: ISerializationInfoArray;
	export var dataBindingSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Data.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export var dataBindings: (dataBindingsArray: string[]) => ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Internal {
    import ISerializationInfoWithBindings = DevExpress.Reporting.Designer.Controls.Metadata.ISerializationInfoWithBindings;;
    import IDisplayedValue = DevExpress.Analytics.Utils.IDisplayedValue;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var createSinglePopularBindingInfos: (propertyName: string) => ISerializationInfoArray;
	export var createPopularBindingInfos: (options: ISerializationInfoWithBindings) => ISerializationInfoArray;
	export var createPopularBindingInfo: (options: ISerializationInfoWithBindings, isExpression?: boolean) => ISerializationInfoWithBindings;
	export function valuesArrayAsEnumWithLocalizationId(info: ISerializationInfo, prefix: string): IDisplayedValue[];

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var imageUrl: ISerializationInfo;
	export var imageSource: ISerializationInfo;
	export var sizing: ISerializationInfo;
	export var imageAlignment: ISerializationInfo;
	export var imageEditOptions: ISerializationInfo;
	export var pictureBoxSerializationsInfo: ISerializationInfoArray;
	export var popularPropertiesPicture: string[];

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var foreColorWatermark: ISerializationInfo;
	export var fontWatermark: ISerializationInfo;
	export var watermarkSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var paperKind: ISerializationInfo;
	export var landscape: ISerializationInfo;
	export var margins: ISerializationInfo;
	export var pageColor: ISerializationInfo;
	export var measureUnit: ISerializationInfo;
	export var snapGridSize: ISerializationInfo;
	export var drawWatermark: ISerializationInfo;
	export var showPreviewMarginLines: ISerializationInfo;
	export var verticalContentSplitting: ISerializationInfo;
	export var reportExportOptionsSerializationInfo: ISerializationInfo;
	export var watermark: ISerializationInfo;
	export var rollPaper: ISerializationInfo;
	export var requestParameters: ISerializationInfo;
	export var formattingRuleSheet: ISerializationInfo;
	export var pageWidth: ISerializationInfo;
	export var pageHeight: ISerializationInfo;
	export var localizationItems: ISerializationInfo;
	export var language: ISerializationInfo;
	export var scriptLanguage: ISerializationInfo;
	export var scriptReferencesString: ISerializationInfo;
	export var calculatedFields: ISerializationInfo;
	export var parametersInfo: ISerializationInfo;
	export var parameterPanelLayoutItemsInfo: ISerializationInfo;
	export var bookmarkDuplicateSuppress: ISerializationInfo;
	export var horizontalContentSplitting: ISerializationInfo;
	export var rtlLayout: ISerializationInfo;
	export var rtlReport: ISerializationInfo;
	export var reportSerializationInfo: ISerializationInfoArray;
	export var popularPropertiesReport: string[];

}
declare module DevExpress.Reporting.Designer.Internal {
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import ColumnSortOrder = DevExpress.Reporting.Viewer.Internal.ColumnSortOrder;;
    import PivotSummaryType = DevExpress.Reporting.Designer.Wizard.PivotSummaryType;;
	export interface ICrossTabGroupFieldInfo extends IDataMemberInfo {
	    sortOrder: string;
	}
	export interface ICrossTabDataFieldInfo extends IDataMemberInfo {
	    summaryType: string;
	}
	export class CrossTabFieldInfoBase {
	    constructor(info: IDataMemberInfo);
	    __type: string;
	    FieldName: string;
	    DisplayText: string;
	}
	export class CrossTabGroupFieldInfo extends CrossTabFieldInfoBase {
	    constructor(info: ICrossTabGroupFieldInfo);
	    SortOrder: ColumnSortOrder;
	}
	export class CrossTabColumnFieldInfo extends CrossTabGroupFieldInfo {
	    __type: string;
	}
	export class CrossTabRowFieldInfo extends CrossTabGroupFieldInfo {
	    __type: string;
	}
	export class CrossTabDataFieldInfo extends CrossTabFieldInfoBase {
	    __type: string;
	    constructor(info: ICrossTabDataFieldInfo);
	    SummaryType: PivotSummaryType;
	}

}
declare module DevExpress.Reporting.Designer.Wizard {
    import ISummaryOptions = DevExpress.Reporting.Designer.Internal.ISummaryOptions;;
    import ReportLayout = DevExpress.Reporting.Designer.Wizard.ReportLayout;;
    import ReportStyle = DevExpress.Reporting.Designer.Wizard.ReportStyle;;
    import ILabelDetails = DevExpress.Reporting.Designer.Wizard.ILabelDetails;;
    import IMasterDetailQueryInfo = DevExpress.Reporting.Designer.Internal.IMasterDetailQueryInfo;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import IDataSourceWizardState = DevExpress.Analytics.Wizard.IDataSourceWizardState;;
    import ICrossTabDataFieldInfo = DevExpress.Reporting.Designer.Internal.ICrossTabDataFieldInfo;
    import ICrossTabGroupFieldInfo = DevExpress.Reporting.Designer.Internal.ICrossTabGroupFieldInfo;;
    import FieldTreeNode = DevExpress.Analytics.Wizard.Internal.FieldTreeNode;;
	export enum ReportType {
	    Empty = 3,
	    Databound = 0,
	    Vertical = 1,
	    Label = 2,
	    CrossTab = 6
	}
	export enum PivotSummaryType {
	    Count = 0,
	    Sum = 1,
	    Min = 2,
	    Max = 3,
	    Average = 4,
	    StdDev = 5,
	    StdDevp = 6,
	    Var = 7,
	    Varp = 8,
	    Custom = 9,
	    CountDistinct = 10,
	    Median = 11,
	    Mode = 12
	}
	export enum GraphicsUnit {
	    World = 0,
	    Display = 1,
	    Pixel = 2,
	    Point = 3,
	    Inch = 4,
	    Document = 5,
	    Millimeter = 6
	}
	export interface IPageSetup {
	    paperKind: string;
	    unit: GraphicsUnit;
	    width: number;
	    height: number;
	    landscape?: boolean;
	    marginLeft: number;
	    marginRight: number;
	    marginTop: number;
	    marginBottom: number;
	}
	export interface ILegacyReportWizardState extends IReportWizardState {
	    fields?: Array<IDataMemberInfo>;
	    groups?: string[][];
	    summaryOptionsColumns?: Array<IDataMemberInfo>;
	    summaryOptions?: Array<ISummaryOptions>;
	    ignoreNullValuesForSummary?: boolean;
	    dataSource?: string;
	    newDataSource?: string;
	    fitFieldsToPage?: boolean;
	    layout?: ReportLayout;
	    portrait?: boolean;
	    style?: ReportStyle;
	}
	export interface IColorSchemeState {
	    baseColor?: string;
	    name?: string;
	}
	export interface IReportTitleState {
	    reportTitle?: string;
	}
	export interface IReportWizardState extends IDataSourceWizardState {
	    pageSetup: IPageSetup;
	    colorScheme: IColorSchemeState;
	    reportType?: ReportType;
	    labelDetails?: ILabelDetails;
	    reportTitle?: string;
	    dataMember?: string;
	    masterDetailInfoCollection?: IMasterDetailQueryInfo[];
	    masterDetailGroups?: any[];
	    masterDetailSummaryOptionsColumns?: any;
	    ignoreNullValuesForSummary?: boolean;
	    dataSource?: string;
	    newDataSource?: string;
	    masterDetailSummariesInfo?: {
	        [key: string]: {
	            column: IDataMemberInfo;
	            summaryFunctions: number[];
	        }[];
	    };
	    dataMemberPath?: string;
	    dataMemberInfo?: IDataMemberInfo;
	    crossTabFields?: FieldTreeNode[];
	    crossTabColumnsFieldInfo?: ICrossTabGroupFieldInfo[];
	    crossTabRowsFieldInfo?: ICrossTabGroupFieldInfo[];
	    crossTabDataFieldInfo?: ICrossTabDataFieldInfo[];
	}
	export var defaultPageSetupState: IPageSetup;
	export var defaultReportWizardState: IReportWizardState;

}
declare module DevExpress.Reporting.Designer.Internal {
    import GraphicsUnit = DevExpress.Reporting.Designer.Wizard.GraphicsUnit;
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
	export interface ICustomLabelInformation {
	    Height: number;
	    HorizontalPitch: number;
	    LeftMargin: number;
	    RightMargin: number;
	    PaperKindDataId: number;
	    TopMargin: number;
	    BottomMargin: number;
	    Unit: GraphicsUnit;
	    VerticalPitch: number;
	    Width: number;
	}
	export class CommonRequestModel {
	    CustomLabelInformation: ICustomLabelInformation;
	    IgnoreNullValuesForSummary: boolean;
	    LabelProductId: number;
	    LabelProductDetailId: number;
	    ReportTitle: string;
	    ReportType: number;
	    DataMemberName: {
	        'DisplayName': string;
	        'Name': string;
	        'DataMemberType': number;
	    };
	    constructor(state: IReportWizardState);
	}

}
declare module DevExpress.Reporting.Designer.Utils {
	export enum PaperKind {
	    Custom = 0,
	    Letter = 1,
	    LetterSmall = 2,
	    Tabloid = 3,
	    Ledger = 4,
	    Legal = 5,
	    Statement = 6,
	    Executive = 7,
	    A3 = 8,
	    A4 = 9,
	    A4Small = 10,
	    A5 = 11,
	    B4 = 12,
	    B5 = 13,
	    Folio = 14,
	    Quarto = 15,
	    Standard10x14 = 16,
	    Standard11x17 = 17,
	    Note = 18,
	    Number9Envelope = 19,
	    Number10Envelope = 20,
	    Number11Envelope = 21,
	    Number12Envelope = 22,
	    Number14Envelope = 23,
	    CSheet = 24,
	    DSheet = 25,
	    ESheet = 26,
	    DLEnvelope = 27,
	    C5Envelope = 28,
	    C3Envelope = 29,
	    C4Envelope = 30,
	    C6Envelope = 31,
	    C65Envelope = 32,
	    B4Envelope = 33,
	    B5Envelope = 34,
	    B6Envelope = 35,
	    ItalyEnvelope = 36,
	    MonarchEnvelope = 37,
	    PersonalEnvelope = 38,
	    USStandardFanfold = 39,
	    GermanStandardFanfold = 40,
	    GermanLegalFanfold = 41,
	    IsoB4 = 42,
	    JapanesePostcard = 43,
	    Standard9x11 = 44,
	    Standard10x11 = 45,
	    Standard15x11 = 46,
	    InviteEnvelope = 47,
	    LetterExtra = 50,
	    LegalExtra = 51,
	    TabloidExtra = 52,
	    A4Extra = 53,
	    LetterTransverse = 54,
	    A4Transverse = 55,
	    LetterExtraTransverse = 56,
	    APlus = 57,
	    BPlus = 58,
	    LetterPlus = 59,
	    A4Plus = 60,
	    A5Transverse = 61,
	    B5Transverse = 62,
	    A3Extra = 63,
	    A5Extra = 64,
	    B5Extra = 65,
	    A2 = 66,
	    A3Transverse = 67,
	    A3ExtraTransverse = 68,
	    JapaneseDoublePostcard = 69,
	    A6 = 70,
	    JapaneseEnvelopeKakuNumber2 = 71,
	    JapaneseEnvelopeKakuNumber3 = 72,
	    JapaneseEnvelopeChouNumber3 = 73,
	    JapaneseEnvelopeChouNumber4 = 74,
	    LetterRotated = 75,
	    A3Rotated = 76,
	    A4Rotated = 77,
	    A5Rotated = 78,
	    B4JisRotated = 79,
	    B5JisRotated = 80,
	    JapanesePostcardRotated = 81,
	    JapaneseDoublePostcardRotated = 82,
	    A6Rotated = 83,
	    JapaneseEnvelopeKakuNumber2Rotated = 84,
	    JapaneseEnvelopeKakuNumber3Rotated = 85,
	    JapaneseEnvelopeChouNumber3Rotated = 86,
	    JapaneseEnvelopeChouNumber4Rotated = 87,
	    B6Jis = 88,
	    B6JisRotated = 89,
	    Standard12x11 = 90,
	    JapaneseEnvelopeYouNumber4 = 91,
	    JapaneseEnvelopeYouNumber4Rotated = 92,
	    Prc16K = 93,
	    Prc32K = 94,
	    Prc32KBig = 95,
	    PrcEnvelopeNumber1 = 96,
	    PrcEnvelopeNumber2 = 97,
	    PrcEnvelopeNumber3 = 98,
	    PrcEnvelopeNumber4 = 99,
	    PrcEnvelopeNumber5 = 100,
	    PrcEnvelopeNumber6 = 101,
	    PrcEnvelopeNumber7 = 102,
	    PrcEnvelopeNumber8 = 103,
	    PrcEnvelopeNumber9 = 104,
	    PrcEnvelopeNumber10 = 105,
	    Prc16KRotated = 106,
	    Prc32KRotated = 107,
	    Prc32KBigRotated = 108,
	    PrcEnvelopeNumber1Rotated = 109,
	    PrcEnvelopeNumber2Rotated = 110,
	    PrcEnvelopeNumber3Rotated = 111,
	    PrcEnvelopeNumber4Rotated = 112,
	    PrcEnvelopeNumber5Rotated = 113,
	    PrcEnvelopeNumber6Rotated = 114,
	    PrcEnvelopeNumber7Rotated = 115,
	    PrcEnvelopeNumber8Rotated = 116,
	    PrcEnvelopeNumber9Rotated = 117,
	    PrcEnvelopeNumber10Rotated = 118
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import CommonRequestModel = DevExpress.Reporting.Designer.Internal.CommonRequestModel;;
    import PaperKind = DevExpress.Reporting.Designer.Utils.PaperKind;;
    import GraphicsUnit = DevExpress.Reporting.Designer.Wizard.GraphicsUnit;
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
	export class MasterDetailRequestModel extends CommonRequestModel {
	    private _masterRelationMap;
	    private _collectionByPath;
	    DataSourceName: string;
	    MasterDetailInfo: any;
	    MasterDetailGroupsInfo: {
	        [key: string]: any;
	    };
	    MasterDetailSummariesInfo: {
	        [key: string]: any;
	    };
	    CrossTabFieldInfo: any;
	    Portrait: boolean;
	    PaperKind: PaperKind;
	    PaperSize: {
	        width: number;
	        height: number;
	    };
	    Margins: {
	        Top: number;
	        Right: number;
	        Bottom: number;
	        Left: number;
	    };
	    Unit: GraphicsUnit;
	    UseMasterDetailBuilder: boolean;
	    DataMemberName: {
	        'DisplayName': string;
	        'Name': string;
	        'DataMemberType': number;
	    };
	    constructor(state: IReportWizardState);
	}

}
declare module DevExpress.Reporting.Designer.Wizard {
	export var LegacyReportWizardPageId: {
	    ChooseDataMemberPage: string;
	    SelectColumnsPage: string;
	    AddGroupingLevelPage: string;
	    ChooseSummaryOptionsPage: string;
	    ChooseReportLayoutPage: string;
	    ChooseReportStylePage: string;
	};
	export var ReportWizardPageId: {
	    SelectReportTypePage: string;
	    ChooseAvailableDataSourcePage: string;
	    SelectLabelTypePage: string;
	    CustomizeLabelPage: string;
	    SelectDataMembersPage: string;
	    AddGroupingLevelPage: string;
	    ChooseSummaryOptionsPage: string;
	    ConfigureReportPageSettingsPage: string;
	    ChooseReportColorSchemePage: string;
	    SetReportTitlePage: string;
	};
	export var FullscreenReportWizardPageId: {
	    SelectReportTypePage: string;
	    SelectDataSourcePage: string;
	    SpecifySqlDataSourceSettingsPage: string;
	    SpecifyJsonDataSourceSettingsPage: string;
	    DefineReportLayoutPage: string;
	    DefineCrossTabPage: string;
	    SpecifyPageSettingsPage: string;
	    SpecifyLabelSettingsPage: string;
	};
	export var FullscreenReportWizardSectionId: {
	    ChooseAvailableDataSourcePage: string;
	    SelectLabelTypePage: string;
	    CustomizeLabelPage: string;
	    SelectDataMembersPage_Members: string;
	    SelectDataMembersPage_Fields: string;
	    SelectSingleDataMemberPage: string;
	    AddGroupFieldsPage: string;
	    AddSummaryFieldsPage: string;
	    ConfigurePageSettingsPage: string;
	    SpecifyReportTitlePage: string;
	    ChooseDataSourceTypePage: string;
	    ChooseJsonSchemaPage: string;
	    SpecifyJsonConnectionPage: string;
	    ConfigureMasterDetailRelationshipsPage: string;
	    ConfigureQueryParametersPage: string;
	    ChooseSqlConnectionPage: string;
	    ConfigureQueryPage: string;
	    ChooseJsonSourcePage: string;
	    ConfigureCrossTabColumnsPage: string;
	    ConfigureCrossTabRowsPage: string;
	    ConfigureCrossTabDataPage: string;
	};

}
declare module DevExpress.Reporting.Designer.Internal {
    import CommonRequestModel = DevExpress.Reporting.Designer.Internal.CommonRequestModel;;
    import ReportLayout = DevExpress.Reporting.Designer.Wizard.ReportLayout;;
    import ReportStyle = DevExpress.Reporting.Designer.Wizard.ReportStyle;;
    import PaperKind = DevExpress.Reporting.Designer.Utils.PaperKind;;
    import GraphicsUnit = DevExpress.Reporting.Designer.Wizard.GraphicsUnit;
    import ILegacyReportWizardState = DevExpress.Reporting.Designer.Wizard.ILegacyReportWizardState;;
	export class LegacyReportRequestModel extends CommonRequestModel {
	    AdjustFieldWidth: boolean;
	    Columns: Array<string>;
	    ColumnInfo: {
	        Name: string;
	        DisplayName: string;
	        TypeSpecifics: number;
	    }[];
	    DataSourceName: string;
	    GroupingLevels: string[][];
	    Layout: ReportLayout;
	    Portrait: boolean;
	    ReportStyleId: ReportStyle;
	    SummaryOptions: {
	        ColumnName: string;
	        Flags: number;
	    }[];
	    UseMasterDetailBuilder: boolean;
	    PaperKind: PaperKind;
	    PaperSize: {
	        width: number;
	        height: number;
	    };
	    Margins: {
	        Top: number;
	        Right: number;
	        Bottom: number;
	        Left: number;
	    };
	    Unit: GraphicsUnit;
	    constructor(state: ILegacyReportWizardState);
	}

}
declare module DevExpress.Reporting.Designer.Wizard {
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;
    import AnalyticChooseDataSourceTypePage = DevExpress.Analytics.Wizard.AnalyticChooseDataSourceTypePage;;
	interface ISelectReportTypePageOptions {
	    canCreateDatabound: boolean | (() => boolean);
	    showVertical?: boolean;
	}
	export class SelectReportTypePage extends AnalyticChooseDataSourceTypePage {
	    private _options;
	    constructor(_options: ISelectReportTypePageOptions);
	    _addDataboundReportType(): void;
	    canNext(): boolean;
	    canFinish(): boolean;
	    commit(): JQuery.Promise<any, any, any>;
	    initialize(state: any): JQuery.Promise<any, any, any>;
	    _extendCssClass: (rightPath: any) => string;
	}
	export class ChooseDataSourceTypePage extends AnalyticChooseDataSourceTypePage {
	    constructor(dataSourceWizardOptions: _ReportWizardOptions);
	}
	export function _registerSelectReportTypePage(factory: FullscreenWizardPageFactory, options: ISelectReportTypePageOptions): void;
	export function _registerChooseDataSourceTypePage(factory: PageFactory, dataSourceWizardOptions: _ReportWizardOptions): void;
	export {};

}
declare module DevExpress.Reporting.Designer.Data.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var lookUpValueSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Data {
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

	export class LookUpValue {
	    static createNew(): LookUpValue;
	    static from(model: any, serializer: ModelSerializer): LookUpValue;
	    static toJson(value: any, serializer: any, refs: any): any;
	    constructor(model: any, serializer?: IModelSerializer);
	    getInfo(): ISerializationInfoArray;
	    description: ko.Observable<string> | ko.Computed<string>;
	    _value: ko.Observable<ObjectStorageItem> | ko.Computed<ObjectStorageItem>;
	    value: ko.Computed<any>;
	    valueInfo: ko.Observable<ISerializationInfo> | ko.Computed<ISerializationInfo>;
	    readonly isEmpty: boolean;
	}

}
declare module DevExpress.Reporting.Designer.Data.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export var dynamicListLookUpSettingsInfoBase: ISerializationInfoArray;
	export var editedStaticListLookUpSettingsInfo: ISerializationInfo;
	export var readonlyStaticListLookUpSettingsInfo: ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Data {
    import ObjectItem = DevExpress.Reporting.Designer.Data.ObjectItem;
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import LookUpValue = DevExpress.Reporting.Designer.Data.LookUpValue;;
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

	export class LookUpSettings extends ObjectItem {
	    getInfo(): ISerializationInfoArray;
	    updateFilter(parameter: any, report: ReportViewModel): void;
	    constructor(model: any, dsHelperProvider?: any, serializer?: IModelSerializer);
	    filterString: any;
	    _filterString: any;
	}
	export class StaticListLookUpSettings extends LookUpSettings {
	    getInfo(): ISerializationInfoArray;
	    preInitProperties(model: any, helper: any, serializer: any): void;
	    afterDeserialization(model: any, serializer: any): void;
	    updateFilter(parameter: any, report: ReportViewModel): void;
	    constructor(model: any, dsHelperProvider?: any, serializer?: IModelSerializer);
	    _isEditing: ko.Observable<boolean>;
	    lookUpValues: ko.ObservableArray<LookUpValue>;
	}
	export class DynamicListLookUpSettings extends LookUpSettings {
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, dsHelperProvider?: any, serializer?: IModelSerializer);
	    dsHelperProvider: () => DataSourceHelper;
	    dataSource: ko.Observable<ObjectStorageItem>;
	    dataMember: ko.Observable<string> | ko.Computed<string>;
	    getPath(propertyName: any): any;
	    isPropertyDisabled(name: string): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Data.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export var parameterExpressionBindingSerializationsInfo: ISerializationInfoArray;
	export var parameterExpressionBindings: ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Data {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export interface IParameterExpressionBinding {
	    propertyName: ko.Observable<string>;
	    expression: ko.Observable<string>;
	}
	export function createExpressionProperty(object: any, propertyName: string, suffix?: string): {
	    value: any;
	    customizeCategories: (tool: any, categories: any[]) => void;
	    functions: DevExpress.Analytics.Widgets.Internal.IExpressionEditorFunction[];
	};
	export class ParameterExpressionBinding implements IParameterExpressionBinding {
	    static expressionSuff: string;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    isEmpty(): boolean;
	    propertyName: ko.Observable<string>;
	    expression: ko.Observable<string>;
	}

}
declare module DevExpress.Reporting.Designer.Data.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
    import PropertyGridEditorFlat = DevExpress.Analytics.Widgets.PropertyGridEditorFlat;;
	export var rangeEditor: {
	    custom: string;
	    editorType: typeof PropertyGridEditorFlat;
	};
	export var rangeBoundaryParameterInfos: (ISerializationInfo | {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    defaultVal: string;
	    validationRules: {
	        type: string;
	        validationCallback: (options: any) => boolean;
	        readonly message: any;
	    }[];
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	})[];
	export var rangeSettingsInfos: ISerializationInfo[];

}
declare module DevExpress.Reporting.Designer.Data {
    import Parameter = DevExpress.Reporting.Designer.Data.Parameter;;
    import ObjectItem = DevExpress.Reporting.Designer.Data.ObjectItem;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

	export class RangeParametersSettings extends ObjectItem {
	    constructor(model: any, dsHelperProvider?: any, serializer?: IModelSerializer);
	    private _updateInfo;
	    preInitProperties(model: any, helper: any, serializer: any): void;
	    getInfo(): ISerializationInfoArray;
	    initalizeRangeParameter(rangeParameter: RangeBoundaryParameter, parameter: Parameter, namePostfix?: string): void;
	    assingParameterInfo(parameter: Parameter): void;
	    initializeParameters(parameter: Parameter): void;
	    _isEditing: ko.Observable<boolean>;
	    startParameter: ko.Observable<RangeBoundaryParameter>;
	    endParameter: ko.Observable<RangeBoundaryParameter>;
	}
	export class RangeBoundaryParameter extends ObjectItem {
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, dsHelperProvider: any, serializer?: IModelSerializer);
	    readonly name: string;
	    readonly displayName: string;
	    readonly specifics: string;
	    _specifics: ko.Observable<string>;
	    valueInfo: ko.Observable<ISerializationInfo> | ko.Computed<ISerializationInfo>;
	    parameterName: ko.Observable<string>;
	    value: ko.Observable | ko.Computed;
	    templateName: string;
	    _type: ko.Observable | ko.Computed;
	}
	export class RangeStartParameter extends RangeBoundaryParameter {
	    constructor(model: any, dsHelperProvider: any, serializer?: IModelSerializer);
	}
	export class RangeEndParameter extends RangeBoundaryParameter {
	    constructor(model: any, dsHelperProvider: any, serializer?: IModelSerializer);
	}

}
declare module DevExpress.Reporting.Designer.Data {
    import ObjectItem = DevExpress.Reporting.Designer.Data.ObjectItem;
    import ObjectStorageParameter = DevExpress.Reporting.Designer.Data.ObjectStorageParameter;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;

    import FilterStringOptions = DevExpress.Analytics.Widgets.FilterStringOptions;;
	export class TableInfoCollectionItem extends SerializableModel {
	    constructor(model: any, dataSource: any, dsHelper: any, serializer?: IModelSerializer);
	    filterString: ko.Observable<FilterStringOptions>;
	}
	export class UniversalDataSource extends ObjectItem {
	    dispose(): void;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, dsHelperProvider?: any, serializer?: IModelSerializer);
	    parameters: ko.ObservableArray<ObjectStorageParameter>;
	    tableInfoCollection: ko.ObservableArray<TableInfoCollectionItem>;
	    spParameterInfoCollection: ko.ObservableArray<SerializableModel>;
	}

}
declare module DevExpress.Reporting.Designer.Data {
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;;

	export interface ISerializableDataFederationDataSourceInfo {
	    dataSource: any;
	    dataSources: any;
	}
	export interface ISerializableDataFederationDataSource extends ISerializableModel {
	    dataSources: ko.ObservableArray<any>;
	    dataSource: DataFederationDataSource;
	    serialize: () => ISerializableDataFederationDataSourceInfo;
	}
	export class DataFederationDataSource extends ObjectStorageItem {
	    private _dsHelperProvider;
	    private _serializer;
	    private _serializableModel;
	    preInitProperties(model: any): void;
	    constructor(model: any, _dsHelperProvider: any, _serializer: any);
	    getSerializableModel(): SerializableDataFederationDataSource;
	    serializableSourceMap: ko.ObservableArray<any>;
	}
	export class SerializableDataFederationDataSource implements ISerializableDataFederationDataSource {
	    getInfo(): ISerializationInfoArray;
	    constructor(dataSource: DataFederationDataSource, model?: ISerializableDataFederationDataSourceInfo, dsHelperProvider?: any, serializer?: ModelSerializer);
	    serialize(): any;
	    serializer: ModelSerializer;
	    dataSources: ko.ObservableArray<ObjectStorageItem>;
	    dataSource: DataFederationDataSource;
	}

}
declare module DevExpress.Reporting.Designer.Data {
    import ObjectItem = DevExpress.Reporting.Designer.Data.ObjectItem;;
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export function createNewObjectItem(model: any, dsHelperProvider?: () => DataSourceHelper, serializer?: IModelSerializer): ObjectItem;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;
    import ChooseAvailableItemPage = DevExpress.Analytics.Wizard.ChooseAvailableItemPage;;
	export function _convertToStateDataSource(dataSource: any): string;
	export function _restoreDataSourceFromState(dataSource: any): any;
	export class ChooseAvailableDataSourcePage extends ChooseAvailableItemPage {
	    commit(): JQuery.Promise<any, any, any>;
	    _getSelectedItem(state: any): any;
	    readonly createNewOperationText: any;
	}
	export function _registerChooseAvailableDataSourcePage(factory: PageFactory, reportWizardOptions: _ReportWizardOptions): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import FieldListProvider = DevExpress.Analytics.Internal.FieldListProvider;;
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
    import DataMemberTreeListController = DevExpress.Analytics.Widgets.Internal.DataMemberTreeListController;;
	export class LegacyChooseDataMemberPage extends WizardPageBase {
	    private _rootItems;
	    private _selectedPath;
	    private _fieldListCallBack;
	    private _createSqlDataSourceInfo;
	    private _dataSource;
	    private _hideDataMemberSubItems;
	    private _wrapFieldListCallback;
	    private readonly dataSourcePath;
	    private _beginInternal;
	    constructor(reportWizardOptions: _ReportWizardOptions);
	    canNext(): boolean;
	    canFinish(): boolean;
	    initialize(state: IReportWizardState): JQueryPromise<any>;
	    commit(): JQuery.Promise<{
	        dataMemberPath?: string;
	        dataMemberInfo?: IDataMemberInfo;
	    }, any, any>;
	    scrollViewHeight: string;
	    fieldListModel: {
	        itemsProvider: FieldListProvider;
	        selectedPath: any;
	        treeListController: DataMemberTreeListController;
	    };
	}
	export function _registerLegacyChooseDataMemberPage(factory: PageFactory, reportWizardOptions: _ReportWizardOptions): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import IReportWizardFieldsCallback = DevExpress.Reporting.Designer.Internal.IReportWizardFieldsCallback;;
    import ILegacyReportWizardState = DevExpress.Reporting.Designer.Wizard.ILegacyReportWizardState;;
    import ListViewModel = DevExpress.Reporting.Designer.Internal.ListViewModel;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class LegacySelectColumnsPage extends WizardPageBase {
	    private _fieldListsCallback;
	    private _selectedPath;
	    private _fields;
	    constructor(getFieldListItems: IReportWizardFieldsCallback);
	    canFinish(): boolean;
	    canNext(): boolean;
	    selectedPath(): any;
	    reset(): void;
	    initialize(state: ILegacyReportWizardState): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<{
	        fields?: IDataMemberInfo[];
	    }, any, any>;
	    isSelectEnable(): boolean;
	    isUnselectEnable(): boolean;
	    select: () => void;
	    selectAll: () => void;
	    unselect: () => void;
	    unselectAll: () => void;
	    availableFieldDblClick: (field: any) => void;
	    availableFieldClick: (e: {
	        itemData: any;
	    }) => void;
	    selectedFieldDblClick: (field: any) => void;
	    selectedFieldClick: (e: {
	        itemData: any;
	    }) => void;
	    availableFields: ListViewModel<IDataMemberInfo>;
	    selectedFields: ListViewModel<IDataMemberInfo>;
	}
	export function _registerLegacySelectColumnsPage(factory: PageFactory, fieldListItemsCallback: IReportWizardFieldsCallback): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import ListViewModel = DevExpress.Reporting.Designer.Internal.ListViewModel;;
    import ILegacyReportWizardState = DevExpress.Reporting.Designer.Wizard.ILegacyReportWizardState;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class LegacyAddGroupingLevelPage extends WizardPageBase {
	    private initialFields;
	    fields: ListViewModel<string>;
	    groups: ListViewModel<{
	        fields: ko.ObservableArray<string>;
	    }>;
	    canFinish(): boolean;
	    addNewGroup: () => void;
	    appendFieldsToGroup: () => void;
	    removeGroup: () => void;
	    isCreateGroupEnabled(): boolean;
	    isAppendToGroupEnabled(): boolean;
	    isRemoveGroupEnabled(): boolean;
	    moveUp: () => void;
	    moveDown: () => void;
	    isMoveUpEnabled(): boolean;
	    isMoveDownEnabled(): boolean;
	    fieldDblClick: (field: any) => void;
	    fieldClick: (e: {
	        itemData: any;
	    }) => void;
	    groupDblClick: (group: any) => void;
	    groupClick: (e: {
	        itemData: any;
	    }) => void;
	    initialize(state: ILegacyReportWizardState): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<{
	        groups?: string[][];
	        summaryOptionsColumns?: IDataMemberInfo[];
	    }, any, any>;
	}
	export function _registerLegacyAddGroupingLevelPage(factory: PageFactory): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import ILegacyReportWizardState = DevExpress.Reporting.Designer.Wizard.ILegacyReportWizardState;;
    import SummaryOptionsWrapper = DevExpress.Reporting.Designer.Internal.SummaryOptionsWrapper;
    import ISummaryOptions = DevExpress.Reporting.Designer.Internal.ISummaryOptions;;

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class LegacyChooseSummaryOptionsPage extends WizardPageBase {
	    private _columns;
	    canFinish(): boolean;
	    initialize(state: ILegacyReportWizardState): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<{
	        summaryOptions?: ISummaryOptions[];
	        ignoreNullValuesForSummary?: boolean;
	    }, any, any>;
	    summaryOptions: ko.ObservableArray<SummaryOptionsWrapper>;
	    ignoreNullValues: ko.Observable<boolean>;
	    toggleIgnoreNullValues: () => void;
	}
	export function _registerLegacyChooseSummaryOptionsPage(factory: PageFactory): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import LayoutTypeItem = DevExpress.Reporting.Designer.Wizard.LayoutTypeItem;
    import ReportLayout = DevExpress.Reporting.Designer.Wizard.ReportLayout;
    import PageOrientationItem = DevExpress.Reporting.Designer.Wizard.PageOrientationItem;;
    import ILegacyReportWizardState = DevExpress.Reporting.Designer.Wizard.ILegacyReportWizardState;;
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;

	export class LegacyChooseReportLayoutPage extends WizardPageBase {
	    private _isGroupedReport;
	    private _reportLayoutTypes;
	    private _groupedReportLayoutsTypes;
	    canFinish(): boolean;
	    initialize(state: ILegacyReportWizardState): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<{
	        fitFieldsToPage?: boolean;
	        layout?: ReportLayout;
	        portrait?: boolean;
	    }, any, any>;
	    toggleFitFieldsToPage: () => void;
	    selectedLayoutType: ko.Observable<LayoutTypeItem>;
	    fitFieldsToPage: ko.Observable<boolean>;
	    pageOrientationItems: PageOrientationItem[];
	    selectedPageOrientation: ko.Observable<PageOrientationItem>;
	    layoutTypeItems: ko.PureComputed<LayoutTypeItem[]>;
	    layoutTypeItemClick: (item: LayoutTypeItem) => void;
	    isSelected: (item: LayoutTypeItem) => boolean;
	}
	export function _registerLegacyChooseReportLayoutPage(factory: PageFactory): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import ILegacyReportWizardState = DevExpress.Reporting.Designer.Wizard.ILegacyReportWizardState;;
    import ReportStyle = DevExpress.Reporting.Designer.Wizard.ReportStyle;
    import ReportStyleItem = DevExpress.Reporting.Designer.Wizard.ReportStyleItem;;

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class LegacyChooseReportStylePage extends WizardPageBase {
	    canFinish(): boolean;
	    initialize(state: ILegacyReportWizardState): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<{
	        style?: ReportStyle;
	    }, any, any>;
	    reportStyleItems: ReportStyleItem[];
	    selectedReportStyle: ko.Observable<ReportStyleItem>;
	}
	export function _registerLegacyChooseReportStylePage(factory: PageFactory): void;

}
declare module DevExpress.Reporting.Designer.Internal {
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
	export class ReportWizardStateHelper {
	    static applyDataBindings(state: IReportWizardState, model: ReportViewModel): void;
	    static applyPageSetup(state: IReportWizardState, model: ReportViewModel): void;
	}

}
declare module DevExpress.Reporting.Designer.Wizard {
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
	export function createReportWizardState(reportViewModel?: ReportViewModel): IReportWizardState;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;
    import ILegacyReportWizardState = DevExpress.Reporting.Designer.Wizard.ILegacyReportWizardState;;
    import LegacyReportRequestModel = DevExpress.Reporting.Designer.Internal.LegacyReportRequestModel;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;
    import MultiQueryDataSourceWizardPageIterator = DevExpress.Analytics.Wizard.MultiQueryDataSourceWizardPageIterator;
    import PopupWizard = DevExpress.Analytics.Wizard.PopupWizard;
    import StateManager = DevExpress.Analytics.Wizard.StateManager;;
	export class LegacyReportWizard extends PopupWizard {
	    private _reportWizardOptions;
	    protected _callBeforeFinishHandler(state: any, wizardModel?: any): void;
	    protected _callAfterFinishHandler(state: any, result: any): void;
	    constructor(pageFactory: any, _reportWizardOptions: _ReportWizardOptions);
	    initialize(state?: IReportWizardState): void;
	    start(finishCallback?: (state: IReportWizardState) => JQueryPromise<any>): void;
	    _requestModelType: typeof LegacyReportRequestModel;
	    title: any;
	}
	export class LegacyReportWizardPageIterator extends MultiQueryDataSourceWizardPageIterator<ILegacyReportWizardState> {
	    constructor(pageFactory: PageFactory, stateManager: StateManager, reportWizardOptions: _ReportWizardOptions);
	    getNextPageId(pageId: string): string;
	}
	export function _createLegacyReportWizard(reportWizardOptions: _ReportWizardOptions): LegacyReportWizard;

}
declare module DevExpress.Reporting.Designer.Internal {
    import GraphicsUnit = DevExpress.Reporting.Designer.Wizard.GraphicsUnit;;
    import IDataSourceRefInfo = DevExpress.Reporting.Designer.Utils.IDataSourceRefInfo;
    import IReportWizardSettings = DevExpress.Reporting.Designer.Utils.IReportWizardSettings;;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;;

	export function getFormattedValueInUnits(value: number, unit: GraphicsUnit): string;
	export interface IReportWizardData {
	    report: ko.Observable | ko.Computed;
	    availableDataSources: IDataSourceInfo[];
	    dataSourceRefs: IDataSourceRefInfo[];
	    isReportServer?: boolean;
	    disableCustomSql?: boolean;
	    wizardSettings?: IReportWizardSettings;
	}
	export class ListViewModel<T> {
	    caption?: string;
	    private _items;
	    private _refreshActiveItem;
	    activeItemArray: ko.ObservableArray<T>;
	    constructor(caption?: string);
	    readonly items: T[];
	    activeItem: T;
	    add(item: T): void;
	    addRange(items: T[]): void;
	    removeActiveItem(): void;
	    removeAll(): void;
	    setItems(items: T[]): void;
	    moveUp(): void;
	    moveDown(): void;
	    readonly isEmpty: boolean;
	    isMoveUpEnabled(): boolean;
	    isMoveDownEnabled(): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Wizard {
    import IMasterDetailQueryInfo = DevExpress.Reporting.Designer.Internal.IMasterDetailQueryInfo;
    import IMasterDetailReportTree = DevExpress.Reporting.Designer.Internal.IMasterDetailReportTree;;
    import ListViewModel = DevExpress.Reporting.Designer.Internal.ListViewModel;;
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export function _fillTreeQueries(reportTree: any, queries: IMasterDetailQueryInfo[], level: number, parentDisplayName?: string): any;
	export class AddGroupingLevelPage extends WizardPageBase {
	    private _availableColumns;
	    private _groupingLevels;
	    private _setData;
	    private _masterDetailGroups;
	    constructor();
	    canFinish(): boolean;
	    _addNewGroup: () => void;
	    _appendFieldsToGroup: () => void;
	    _removeGroup: () => void;
	    _isCreateGroupEnabled(): boolean;
	    _isAppendToGroupEnabled(): boolean;
	    _isRemoveGroupEnabled(): boolean;
	    _moveUp: () => void;
	    _moveDown: () => void;
	    _isMoveUpEnabled(): boolean;
	    _isMoveDownEnabled(): boolean;
	    _fieldDblClick: (field: any) => void;
	    _fieldClick: (e: {
	        itemData: any;
	    }) => void;
	    _groupDblClick: (group: any) => void;
	    _groupClick: (e: {
	        itemData: any;
	    }) => void;
	    initialize(state: IReportWizardState): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<any, any, any>;
	    _currentPath: ko.Observable<string>;
	    _currentFields: ko.Observable<ListViewModel<string>>;
	    _currentGroups: ko.Observable<ListViewModel<{
	        fields: ko.ObservableArray<string>;
	    }>>;
	    _fieldCaption: any;
	    _groupCaption: any;
	    _reportTree: ko.ObservableArray<IMasterDetailReportTree>;
	}
	export function _registerAddGroupingLevelPage(factory: PageFactory): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import SummaryInfo = DevExpress.Reporting.Designer.Internal.SummaryInfo;
    import IMasterDetailReportTree = DevExpress.Reporting.Designer.Internal.IMasterDetailReportTree;;
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
    import SummaryOptionsWrapper = DevExpress.Reporting.Designer.Internal.SummaryOptionsWrapper;;

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class ChooseSummaryOptionsPage extends WizardPageBase {
	    private _allColumns;
	    private _masterDetailColumns;
	    private _currentDataMember;
	    private _createSummaryInfo;
	    private _createNewItemIfNeed;
	    private _changeQuery;
	    constructor();
	    _removeSummaryInfo(info: SummaryInfo): void;
	    canFinish(): boolean;
	    _toggleIgnoreNullValues: () => void;
	    initialize(state: IReportWizardState): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<any, any, any>;
	    _summaryOptions: ko.ObservableArray<SummaryOptionsWrapper>;
	    ignoreNullValues: ko.Observable<boolean>;
	    _template: string;
	    _reportTree: ko.ObservableArray<IMasterDetailReportTree>;
	    _currentPath: ko.Observable<string>;
	    _availableFields: ko.ObservableArray<any>;
	    _displayedFields: {
	        [key: string]: ko.ObservableArray<any>;
	    };
	    _summaryInfos: ko.ObservableArray<SummaryInfo>;
	    _summaryInfoMapByDataMember: {
	        [key: string]: SummaryInfo[];
	    };
	    _selectFieldToSummaryCaption: any;
	    _fieldsCaption: any;
	    _summaryFunctionCaption: any;
	    _ignoreNullValuesCaption: any;
	}
	export function _registerChooseSummaryOptionsPage(factory: PageFactory): void;

}
declare module DevExpress.Reporting.Designer.Wizard {

	export class ColorScheme {
	    _isCustom: boolean;
	    constructor(name: string, localizationId: string, baseColor: string);
	    name: string;
	    localizationId: string;
	    baseColor: string;
	    color: string | ko.Observable<string> | ko.Computed<string>;
	    displayName: string;
	    selected: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export class CustomColorScheme extends ColorScheme {
	    applyColor(): void;
	    resetColor(): void;
	    constructor(name: string, localizationId: string, baseColor: string);
	    editorColor: ko.Observable<string> | ko.Computed<string>;
	    color: ko.Observable<string> | ko.Computed<string>;
	    popoverVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	}

}
declare module DevExpress.Reporting.Designer.Wizard {
    import ColorScheme = DevExpress.Reporting.Designer.Wizard.ColorScheme;
    import CustomColorScheme = DevExpress.Reporting.Designer.Wizard.CustomColorScheme;;
    import IColorSchemeState = DevExpress.Reporting.Designer.Wizard.IColorSchemeState;;

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class ChooseReportColorSchemePage extends WizardPageBase {
	    constructor();
	    addColorScheme(name: string, color: string, position?: number): void;
	    removeColorScheme(...names: string[]): void;
	    removeAllColorSchemes(): void;
	    setCustomColor(color: string): void;
	    _applyScheme(data: ColorScheme): void;
	    canFinish(): boolean;
	    _scheme: ko.Observable<ColorScheme>;
	    _customColorScheme: CustomColorScheme;
	    _lookupData: {
	        scheme: ColorScheme[];
	    };
	    initialize(state: IColorSchemeState): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<any, any, any>;
	}
	export function _applyColorSchemeState(data: IColorSchemeState, state: IColorSchemeState): void;
	export function _registerChooseReportColorSchemePage(factory: PageFactory): void;

}
declare module DevExpress.Reporting.Designer.Internal {
	export var CONVERSION_COEEFICIENT: number;

}
declare module DevExpress.Reporting.Designer.Internal {
    import GraphicsUnit = DevExpress.Reporting.Designer.Wizard.GraphicsUnit;;
	export class PageSetupHelper {
	    static mm2px(val: number): number;
	    static in2px(val: number): number;
	    static px2mm(val: number): number;
	    static px2in(val: number): number;
	    static mm2in(val: number): number;
	    static in2mm(val: number): number;
	    static getConverter(from: GraphicsUnit, to: GraphicsUnit): (val: number) => number;
	}

}
declare module DevExpress.Reporting.Designer.Wizard {
    import IPageSetup = DevExpress.Reporting.Designer.Wizard.IPageSetup;
    import GraphicsUnit = DevExpress.Reporting.Designer.Wizard.GraphicsUnit;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;

	interface IPageSettings {
	    width: ko.Observable<number>;
	    height: ko.Observable<number>;
	    marginLeft: ko.Observable<number>;
	    marginRight: ko.Observable<number>;
	    marginTop: ko.Observable<number>;
	    marginBottom: ko.Observable<number>;
	}
	export class PreviewPageHelper extends Disposable {
	    private cachePagePreviewElement;
	    constructor(settings?: IPageSettings);
	    updatePageSettings(pageSetup: IPageSetup): void;
	    width: ko.Observable<number>;
	    height: ko.Observable<number>;
	    marginLeft: ko.Observable<number>;
	    marginRight: ko.Observable<number>;
	    marginTop: ko.Observable<number>;
	    marginBottom: ko.Observable<number>;
	    previewPageWidth: ko.Computed<number>;
	    previewPageHeight: ko.Computed<number>;
	    previewTopMargin: ko.Computed<number>;
	    previewRightMargin: ko.Computed<number>;
	    previewBottomMargin: ko.Computed<number>;
	    previewLeftMargin: ko.Computed<number>;
	    pagePreviewElement: ko.Observable<JQuery<HTMLElement>>;
	}
	export class ConfigureReportPageSettingsPage extends WizardPageBase {
	    canFinish(): boolean;
	    constructor();
	    paperKind: ko.Observable<string>;
	    landscape: ko.Observable<boolean>;
	    unit: ko.Computed<GraphicsUnit>;
	    width: ko.Observable<number>;
	    height: ko.Observable<number>;
	    fixedSize: ko.Computed<boolean>;
	    marginLeft: ko.Observable<number>;
	    marginRight: ko.Observable<number>;
	    marginTop: ko.Observable<number>;
	    marginBottom: ko.Observable<number>;
	    valueFormat: ko.Computed<string>;
	    lookupData: {
	        paperKind: {
	            value: string;
	            displayName: string;
	        }[];
	        unit: {
	            value: GraphicsUnit;
	            displayName: string;
	        }[];
	    };
	    private _unit;
	    previewPageHelper: PreviewPageHelper;
	    initialize(state: IPageSetup): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<any, any, any>;
	}
	export function _applyPageSetting(data: IPageSetup, state: IPageSetup): void;
	export function _registerConfigureReportPageSettingsPage(factory: PageFactory): void;
	export {};

}
declare module DevExpress.Reporting.Designer.Internal {
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
    import IDataSourceInfo = DevExpress.Reporting.Designer.Internal.IDataSourceInfo;;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;;
    import IJsonDataSourceWizardState = DevExpress.Analytics.Wizard.IJsonDataSourceWizardState;;
	export class ReportWizardService {
	    static createNewWizardRequest(reportWizardState: IReportWizardState, requestType: any, state: any, customizeWizardModelAction: (wizardModel: any) => void, oldReportJSON?: any): string;
	    static generateReportFromWizardState(reportWizardState: IReportWizardState, requestType: any, state: any, customizeWizardModelAction: (wizardModel: any) => void, oldReportJSON?: string): any;
	    static getLabelReportWizardData(): any;
	    static createNewJsonDataSource(state: IJsonDataSourceWizardState, createJsonCallback: (dataSource: JsonDataSource) => JQueryPromise<IDataSourceInfo>): JQuery.Promise<string, any, any>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import ILabelProduct = DevExpress.Reporting.Designer.Wizard.ILabelProduct;
    import IPaperKind = DevExpress.Reporting.Designer.Wizard.IPaperKind;
    import ILabelDetails = DevExpress.Reporting.Designer.Wizard.ILabelDetails;;
	export var labelReportWizardPromise: JQueryPromise<{
	    labelProducts: ILabelProduct[];
	    paperKinds: IPaperKind[];
	    labelDetails: ILabelDetails[];
	}>;
	export function initializeLabelReportWizardPromise(): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import GraphicsUnit = DevExpress.Reporting.Designer.Wizard.GraphicsUnit;;
    import ILabelDetails = DevExpress.Reporting.Designer.Wizard.ILabelDetails;
    import ILabelProduct = DevExpress.Reporting.Designer.Wizard.ILabelProduct;
    import IPaperKind = DevExpress.Reporting.Designer.Wizard.IPaperKind;;

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class CustomizeLabelPage extends WizardPageBase {
	    static _CONVERSION_COEEFICIENT: number;
	    private _id;
	    private _labelWidth;
	    private _labelHeight;
	    private _horizontalPitch;
	    private _verticalPitch;
	    private _topMargin;
	    private _leftMargin;
	    private _rightMargin;
	    private _bottomMargin;
	    private _getFormattedValueInUnits;
	    private _getLabelsCount;
	    private _rowsCount;
	    private _columnsCount;
	    private _pageHeight;
	    private _pageWidth;
	    constructor();
	    canNext(): boolean;
	    canFinish(): boolean;
	    initialize(labelDetails: ILabelDetails): JQueryPromise<{
	        labelProducts: ILabelProduct[];
	        paperKinds: IPaperKind[];
	        labelDetails: ILabelDetails[];
	    }>;
	    commit(): JQuery.Promise<ILabelDetails, any, any>;
	    _labelData: {
	        labelProducts: ILabelProduct[];
	        paperKinds: IPaperKind[];
	        labelDetails: ILabelDetails[];
	    };
	    paperKinds: () => IPaperKind[];
	    _selectedPaperSize: ko.Observable<IPaperKind>;
	    unit: ko.Observable<GraphicsUnit>;
	    _stepUnit: ko.PureComputed<0.1 | 0.01>;
	    labelWidth: ko.Computed<number>;
	    labelHeight: ko.Computed<number>;
	    horizontalPitch: ko.Computed<number>;
	    verticalPitch: ko.Computed<number>;
	    topMargin: ko.Computed<number>;
	    leftMargin: ko.Computed<number>;
	    rightMargin: ko.Computed<number>;
	    bottomMargin: ko.Computed<number>;
	    _labelsCountText: ko.PureComputed<string>;
	    _pageSizeText: ko.PureComputed<string>;
	    static _getPageSizeText(width: number, height: number, unit: GraphicsUnit): string;
	    _units: {
	        text: any;
	        value: GraphicsUnit;
	    }[];
	}
	export function _registerCustomizeLabelPage(factory: PageFactory): void;

}
declare module DevExpress.Reporting.Designer.Internal {
    import IDataSourceInfo = DevExpress.Reporting.Designer.Internal.IDataSourceInfo;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;
    import IWizardPageMetadata = DevExpress.Analytics.Wizard.IWizardPageMetadata;
    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;;
	export function overrideJsonDataSourceWizardPage(factory: PageFactory, pageId: string, meta: IWizardPageMetadata<IWizardPage>): void;
	export function overrideSqlDataSourceWizardPage(factory: PageFactory, pageId: string, meta: IWizardPageMetadata<IWizardPage>): void;
	export class DataSourceWizardHelper {
	    private _page;
	    private _callback;
	    constructor(_page: IWizardPage, _callback: (dataSource: any) => JQueryPromise<IDataSourceInfo>);
	    commit(superCommit: () => JQueryPromise<any>, createDataSource: (state: any) => any): JQuery.Promise<any, any, any>;
	}

}
declare module DevExpress.Reporting.Designer.Wizard {
    import IDataSourceInfo = DevExpress.Reporting.Designer.Internal.IDataSourceInfo;;
    import IReportWizardCallbacks = DevExpress.Reporting.Designer.Internal.IReportWizardCallbacks;;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;
    import ChooseAnalyticJsonSchemaPage = DevExpress.Analytics.Wizard.ChooseAnalyticJsonSchemaPage;;
	export class ChooseJsonSchemaPage extends ChooseAnalyticJsonSchemaPage {
	    private _dataSourceWizardHelper;
	    private _dataSourceId;
	    constructor(createJsonDataSourceInfo: (dataSource: JsonDataSource) => JQueryPromise<IDataSourceInfo>);
	    initialize(state: any): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<any, any, any>;
	}
	export function _registerChooseJsonSchemaPage(factory: PageFactory, callbacks: IReportWizardCallbacks): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import IDataSourceInfo = DevExpress.Reporting.Designer.Internal.IDataSourceInfo;;
    import IReportWizardCallbacks = DevExpress.Reporting.Designer.Internal.IReportWizardCallbacks;;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;
    import ConfigureAnalyticMasterDetailRelationshipsPage = DevExpress.Analytics.Wizard.ConfigureAnalyticMasterDetailRelationshipsPage;;
	export class ConfigureMasterDetailRelationshipsPage extends ConfigureAnalyticMasterDetailRelationshipsPage {
	    private _dataSourceWizardHelper;
	    constructor(createSqlDataSourceInfo: (dataSource: SqlDataSource) => JQueryPromise<IDataSourceInfo>, sqlDataSourceResultSchema: any);
	    initialize(state: any): JQueryPromise<DevExpress.Analytics.Data.ResultSet>;
	    commit(): JQuery.Promise<any, any, any>;
	}
	export function _registerConfigureMasterDetailRelationshipsPage(factory: PageFactory, callbacks: IReportWizardCallbacks): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;
    import AnalyticMultiQueryConfigurePage = DevExpress.Analytics.Wizard.AnalyticMultiQueryConfigurePage;;
	export class MultiQueryConfigurePage extends AnalyticMultiQueryConfigurePage {
	    private _dataSourceWizardHelper;
	    constructor(reportWizardOptions: _ReportWizardOptions);
	    _getQueriesCount(): number;
	    _canEditQueryParameters(): boolean;
	    initialize(state: any): JQuery.Promise<DevExpress.QueryBuilder.Utils.ISqlQueryViewModel, any, any>;
	    commit(): JQuery.Promise<any, any, any>;
	}
	export function _registerMultiQueryConfigurePage(factory: PageFactory, reportWizardOptions: _ReportWizardOptions): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import IDataSourceInfo = DevExpress.Reporting.Designer.Internal.IDataSourceInfo;;
    import IReportWizardCallbacks = DevExpress.Reporting.Designer.Internal.IReportWizardCallbacks;;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;
    import AnalyticMultiQueryConfigureParametersPage = DevExpress.Analytics.Wizard.AnalyticMultiQueryConfigureParametersPage;;
	export class MultiQueryConfigureParametersPage extends AnalyticMultiQueryConfigureParametersPage {
	    private createSqlDataSourceInfo;
	    private _dataSourceWizardHelper;
	    constructor(createSqlDataSourceInfo: (dataSource: SqlDataSource) => JQueryPromise<IDataSourceInfo>, parametersConverters?: any, requestWrapper?: any);
	    initialize(state: any): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<any, any, any>;
	}
	export function _registerMultiQueryConfigureParametersPage(factory: PageFactory, callbacks: IReportWizardCallbacks): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import IReportWizardFieldsCallback = DevExpress.Reporting.Designer.Internal.IReportWizardFieldsCallback;;
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
    import ITreeListOptions = DevExpress.Analytics.Widgets.Internal.ITreeListOptions;;
	export class SelectDataMembersPage extends WizardPageBase {
	    private _fieldListCallBack;
	    protected _hideDataMemberSubItems: boolean;
	    protected _rootItems: ko.ObservableArray<IDataMemberInfo>;
	    private _dataMemberSelectedPath;
	    private _fieldSelectedPath;
	    private _dataMemberItemsProvider;
	    private _fieldMemberItemsProvider;
	    private _availableFieldsController;
	    private _dataSource;
	    private _checkedDataMembers;
	    private _checkedFields;
	    private initialFullDataMember;
	    protected _wrapFieldListCallback(itemsCallback: IReportWizardFieldsCallback): (IPathRequest: any) => JQueryPromise<IDataMemberInfo[]>;
	    protected readonly dataSourcePath: string;
	    private _showDataSource;
	    private getDataMemberSelectedPath;
	    private _beginInternal;
	    private _afterCheckToggled;
	    private _processFields;
	    private _processNode;
	    private _afterCheckToggledFields;
	    private _createMasterDetailTreeNode;
	    private _createMasterDetailFirstTabTreeNode;
	    private _createMasterDetailLeafTreeNode;
	    canNext(): boolean;
	    canFinish(): boolean;
	    constructor(_fieldListCallBack: IReportWizardFieldsCallback, _hideDataMemberSubItems?: boolean);
	    selectDataMember(dataMemberPath: string): void;
	    selectAllDataMembers(): void;
	    selectDataField(dataFieldPath: string): void;
	    selectDataFields(dataMemberPath: string): void;
	    selectAllDataFields(): void;
	    _dataMemberFieldListModel: ITreeListOptions;
	    _fieldMemberFieldListModel: ITreeListOptions;
	    initialize(state: IReportWizardState): JQueryPromise<any>;
	    _haveCheckedFields(): boolean;
	    commit(): JQuery.Promise<any, any, any>;
	    _showFirstLevelDataMembers: ko.Observable<boolean>;
	    _multiSelectMode: boolean;
	    _selectDataMembersCaption: any;
	    _selectDataFieldsCaption: any;
	}
	export function _registerSelectDataMembersPage(factory: PageFactory, reportWizardOptions: _ReportWizardOptions, pageId?: string): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
    import ILabelDetails = DevExpress.Reporting.Designer.Wizard.ILabelDetails;
    import ILabelProduct = DevExpress.Reporting.Designer.Wizard.ILabelProduct;
    import IPaperKind = DevExpress.Reporting.Designer.Wizard.IPaperKind;;

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class SelectLabelTypePage extends WizardPageBase {
	    constructor();
	    initialize(state: IReportWizardState): JQueryPromise<{
	        labelProducts: ILabelProduct[];
	        paperKinds: IPaperKind[];
	        labelDetails: ILabelDetails[];
	    }>;
	    canNext(): boolean;
	    canFinish(): boolean;
	    commit(): JQuery.Promise<{
	        labelDetails: ILabelDetails;
	    }, any, any>;
	    _selectedPaperSize: ko.Computed<IPaperKind>;
	    _labelData: {
	        labelProducts: ILabelProduct[];
	        paperKinds: IPaperKind[];
	        labelDetails: ILabelDetails[];
	    };
	    _selectedLabelProduct: ko.Observable<ILabelProduct>;
	    _selectedLabelDetails: ko.Observable<ILabelDetails>;
	    _labelDetails: ko.Observable<any>;
	    _width: ko.PureComputed<string>;
	    _height: ko.PureComputed<string>;
	    _paperType: ko.PureComputed<string>;
	    _pageSizeText: ko.PureComputed<string>;
	}
	export function _registerSelectLabelTypePage(factory: PageFactory): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import IReportTitleState = DevExpress.Reporting.Designer.Wizard.IReportTitleState;;

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class SetReportTitlePage extends WizardPageBase {
	    initialize(data: IReportTitleState): JQuery.Promise<any, any, any>;
	    canNext(): boolean;
	    canFinish(): boolean;
	    commit(): JQuery.Promise<any, any, any>;
	    reportTitle: ko.Observable<string>;
	}
	export function _registerSetReportTitlePage(factory: PageFactory): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import MultiQueryDataSourceWizardPageIterator = DevExpress.Analytics.Wizard.MultiQueryDataSourceWizardPageIterator;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;
    import PopupWizard = DevExpress.Analytics.Wizard.PopupWizard;
    import StateManager = DevExpress.Analytics.Wizard.StateManager;;
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import MasterDetailRequestModel = DevExpress.Reporting.Designer.Internal.MasterDetailRequestModel;;
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
	export class ReportWizard extends PopupWizard {
	    private _reportWizardOptions;
	    protected _callBeforeFinishHandler(state: any, wizardModel?: any): void;
	    protected _callAfterFinishHandler(state: any, result: any): void;
	    constructor(pageFactory: PageFactory, _reportWizardOptions: _ReportWizardOptions);
	    initialize(state?: IReportWizardState): void;
	    start(finishCallback?: (state: IReportWizardState) => JQueryPromise<any>): void;
	    _requestModelType: typeof MasterDetailRequestModel;
	    title: any;
	}
	export class ReportWizardPageIterator extends MultiQueryDataSourceWizardPageIterator<IReportWizardState> {
	    private _reportWizardOptions;
	    constructor(pagesFactory: PageFactory, stateManager: StateManager, _reportWizardOptions: _ReportWizardOptions);
	    getNextPageId(pageId?: string): string;
	}
	export function _registerCommonReportWizardPages(factory: PageFactory, reportWizardOptions: _ReportWizardOptions): void;
	export function _registerReportWizardPages(factory: PageFactory, reportWizardOptions: _ReportWizardOptions): void;
	export function _createReportWizard(reportWizardOptions: _ReportWizardOptions): ReportWizard;

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var reportSourceUrl: ISerializationInfo;
	export var reportSource: ISerializationInfo;
	export var parameterBindingSerializationInfo: ISerializationInfoArray;
	export var parameterBindings: ISerializationInfo;
	export var generateOwnPages: ISerializationInfo;
	export var subreportSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Controls {
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import PathRequest = DevExpress.Analytics.Utils.PathRequest;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import IArea = DevExpress.Analytics.Elements.IArea;;
    import DataBindingBase = DevExpress.Reporting.Designer.Data.DataBindingBase;;

	export class SubreportViewModel extends ReportViewModel {
	    static defaultReport: {
	        '@ControlType': string;
	        '@PageWidth': string;
	        '@PageHeight': string;
	        '@Version': string;
	        '@Font': string;
	        '@Dpi': string;
	        'Bands': {
	            'Item1': {
	                '@ControlType': string;
	                '@HeightF': string;
	            };
	            'Item2': {
	                '@ControlType': string;
	                '@HeightF': string;
	            };
	            'Item3': {
	                '@ControlType': string;
	                '@HeightF': string;
	            };
	        };
	    };
	    _initializeBands(): void;
	    static from(model: any, serializer?: IModelSerializer): SubreportViewModel;
	    static toJson(value: SubreportViewModel, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    serialize(): any;
	    isAllSufficient: boolean;
	    _model: any;
	}
	export class ParameterBinding extends DataBindingBase implements ISerializableModel {
	    private _reportDataSource;
	    static createNew(): ParameterBinding;
	    dispose(): void;
	    getInfo(): ISerializationInfoArray;
	    updateParameter(pathRequest: PathRequest, dataSources: any): void;
	    refresh(): void;
	    constructor(model: any, parent: any, serializer?: IModelSerializer);
	    visible: ko.Observable<boolean>;
	    parameterName: ko.Observable<string> | ko.Computed<string>;
	    subreportControl: ko.Observable<XRSubreportViewModel> | ko.Computed<XRSubreportViewModel>;
	    fakeBinding: any;
	}
	export class XRSubreportViewModel extends XRControlViewModel {
	    dispose(): void;
	    getInfo(): ISerializationInfoArray;
	    static _patchModel(model: any): any;
	    private _getCurrentGenerateOwnPagesIsActive;
	    private _clearReportModel;
	    private _assignParameters;
	    private _calculateSubreportPosition;
	    private _subscribeStorages;
	    constructor(model: any, parent: ElementViewModel, serializer?: IModelSerializer);
	    refreshParameterBindings(): void;
	    isPropertyDisabled(propertyName: any): any;
	    updateParameters(): void;
	    cloneReportSource(): ReportViewModel;
	    needProcessLocation: boolean;
	    root: ReportViewModel;
	    generateOwnPages: ko.Computed<boolean>;
	    _generateOwnPages: ko.Observable<boolean> | ko.Computed<boolean>;
	    generateOwnPagesIsActive: ko.Computed<boolean>;
	    subreportParameters: ko.ObservableArray<string>;
	    reportSource: ReportViewModel;
	    reportSourceUrl: ko.Observable<string> | ko.Computed<string>;
	    parameterBindings: ko.ObservableArray<ParameterBinding>;
	    key: ko.Computed<string>;
	}
	export class XRSubreportSurface extends XRControlSurface {
	    constructor(control: XRSubreportViewModel, context: ISurfaceContext);
	    getAdornTemplate(): string;
	    getResizableOptions(resizeHandler: any): any;
	    processLocation(location: IArea): IArea;
	    _control: XRSubreportViewModel;
	}

}
declare module DevExpress.Reporting.Designer.Tools {
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import IReportDesignerCustomizationHandler = DevExpress.Reporting.Designer.Utils.IReportDesignerCustomizationHandler;;
    import IDesignerContextOptionsInitOptions = DevExpress.Reporting.Designer.IDesignerContextOptionsInitOptions;;
    import NavigateTab = DevExpress.Reporting.Designer.Tools.NavigateTab;;
    import XRSubreportSurface = DevExpress.Reporting.Designer.Controls.XRSubreportSurface;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;;
	export interface INavigationOptions {
	    report?: ReportViewModel;
	    reportUrl?: ko.Observable<string> | ko.Computed<string>;
	    callbacks?: IReportDesignerCustomizationHandler;
	    allowMDI?: boolean;
	    selection: SurfaceSelection;
	    initOptions: IDesignerContextOptionsInitOptions;
	    knownEnums?: any;
	}
	export class NavigateByReports extends Disposable {
	    private _designerReportModel;
	    private _isReportLoading;
	    private _removeTab;
	    dispose(): void;
	    private _closeTab;
	    private _closeAll;
	    private _getTabByControl;
	    private _addTab;
	    changeContext(report: ReportViewModel, reportUrl?: ko.Observable<string> | ko.Computed<string>): void;
	    constructor(options: INavigationOptions);
	    init(isLoading: ko.Observable<boolean>): void;
	    removeTab(tab: any, force?: boolean): JQuery.Promise<any, any, any>;
	    closeAll(): JQuery.Promise<any, any, any>;
	    save: (tab: NavigateTab) => any;
	    switch(tab: NavigateTab): void;
	    _createNewTab(report: ReportViewModel, url?: ko.Observable<string> | ko.Computed<string>): void;
	    goToSubreport(subreportSurface: XRSubreportSurface): void;
	    addTab(report: ReportViewModel, url?: ko.Observable<string> | ko.Computed<string>, onCancel?: () => any): JQuery.Promise<any, any, any>;
	    checkHeight(): void;
	    currentTab: ko.Observable<NavigateTab> | ko.Computed<NavigateTab>;
	    height: ko.Observable<number> | ko.Computed<number>;
	    tabs: ko.ObservableArray<NavigateTab>;
	    allowMDI: boolean;
	    knownEnums: any;
	    _callbacks: IReportDesignerCustomizationHandler;
	    _selection: SurfaceSelection;
	    _initializeOptions: IDesignerContextOptionsInitOptions;
	    _selectedIndex: ko.Observable<number> | ko.Computed<number>;
	    selectedIndex: ko.Computed<number>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import ObjectItem = DevExpress.Reporting.Designer.Data.ObjectItem;;
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
	export interface IComponentNameValidator {
	    validateName: (nameCandidate: string) => boolean;
	    validateUnique: (nameCandidate: string, currentName: string) => boolean;
	}
	export interface IRenameComponentStrategy extends IComponentNameValidator {
	    tryRename: (nameCandidate: string, currentItemData: ObjectItem) => boolean;
	}
	export class RenameDataSourceStrategy implements IRenameComponentStrategy {
	    dsHelper: ko.Observable<DataSourceHelper>;
	    private _afterRenameCallBack?;
	    private _rename;
	    constructor(dsHelper: ko.Observable<DataSourceHelper>, _afterRenameCallBack?: () => void);
	    validateName(nameCandidate: string): boolean;
	    validateUnique(nameCandidate: any, currentName: string): boolean;
	    tryRename(nameCandidate: string, currentItemData: ObjectItem): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import IRenameComponentStrategy = DevExpress.Reporting.Designer.Internal.IRenameComponentStrategy;;
    import ObjectItem = DevExpress.Reporting.Designer.Data.ObjectItem;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;;
	export class ComponentsModel extends Disposable {
	    renameComponentStrategy: IRenameComponentStrategy;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: IDataSourceInfo, renameComponentStrategy: IRenameComponentStrategy);
	    className: () => string;
	    controlType: string;
	    name: ko.Observable<string> | ko.Computed<string>;
	    data: ObjectItem;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IDisposable = DevExpress.Analytics.Utils.IDisposable;;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;;

	export var maxNestingLevelUpdate: (newVal?: number) => number;
	export function patchRequest(request: IPathRequest, dataSources: IDataSourceInfo[], state: any): void;
	export class FieldListDataSourcesHelper implements IDisposable {
	    private _fieldListCache;
	    private _dataSourceSubscriptions;
	    private _innerCache;
	    private _usedDataSourceSubscription;
	    private _renameDataSourceStrategy;
	    private _cacheIsClearNotificicator;
	    dataSourceHelper: ko.Observable<DataSourceHelper>;
	    fieldListDataSources: ko.ObservableArray<IDataSourceInfo>;
	    dispose(): void;
	    private _clearDataSourceCache;
	    private _subscribeDataSource;
	    private _updateFieldListDataSources;
	    constructor();
	    private _wrapRequest;
	    private _findItems;
	    private _updateInnerCache;
	    private _getPathPartsFromRequest;
	    private _getItemsFromCache;
	    wrapFieldsCallback(fieldsCallback: (request: IPathRequest) => JQueryPromise<IDataMemberInfo[]>, state: () => {}): (request: IPathRequest) => JQueryPromise<IDataMemberInfo[]>;
	    _subscribeDataSources(usedDataSources: ko.ObservableArray<IDataSourceInfo>, model: any): void;
	    updateDataSources(dsHelper: DataSourceHelper, model: any, parameters?: any): void;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
	export function _createReportWizard(reportWizardOptions: _ReportWizardOptions): DevExpress.Reporting.FullscreenReportWizard;

}
declare module DevExpress.Reporting.Designer.Tools {
    import IDialogModel = DevExpress.Reporting.Designer.Tools.IDialogModel;
    import ReportDialogBase = DevExpress.Reporting.Designer.Tools.ReportDialogBase;;
    import INavigateTab = DevExpress.Reporting.Designer.Tools.INavigateTab;;
    import IKeyValuePair = DevExpress.Reporting.IKeyValuePair;;
    import IReportDesignerCustomizationHandler = DevExpress.Reporting.Designer.Utils.IReportDesignerCustomizationHandler;;

	export class SaveAsReportDialogModelBase implements IDialogModel {
	    onShow(tab: INavigateTab): void;
	    constructor(popup: SaveAsReportDialog, urls: ko.ObservableArray<IKeyValuePair<string>>);
	    getUrl(): string;
	    setUrl(url: any): void;
	    onDblClick: (url: string) => void;
	    popupButtons: any[];
	    reportUrl: ko.Observable<string> | ko.Computed<string>;
	    noDataText: any;
	    reportNamePlaceholder: () => any;
	    urls: ko.ObservableArray<IKeyValuePair<string>>;
	    reportName: ko.Observable<string> | ko.Computed<string>;
	}
	export class SaveAsReportDialog extends ReportDialogBase {
	    show(tab: INavigateTab): void;
	    constructor(subreports: ko.ObservableArray<IKeyValuePair<string>>, callbacks: IReportDesignerCustomizationHandler);
	    save(url: any): void;
	    onSaving: (e: any) => void;
	    onSaved: (e: any) => void;
	    closeAfterSave: ko.Observable<boolean>;
	    title: string;
	}

}
declare module DevExpress.Reporting.Designer.Tools {
    import IDialogModel = DevExpress.Reporting.Designer.Tools.IDialogModel;
    import ReportDialogBase = DevExpress.Reporting.Designer.Tools.ReportDialogBase;;
    import INavigateTab = DevExpress.Reporting.Designer.Tools.INavigateTab;;
    import SaveAsReportDialog = DevExpress.Reporting.Designer.Tools.SaveAsReportDialog;;
    import IReportDesignerCustomizationHandler = DevExpress.Reporting.Designer.Utils.IReportDesignerCustomizationHandler;;

	export class SaveReportDialogModelBase implements IDialogModel {
	    onShow(tab: INavigateTab): void;
	    getUrl(): string;
	    setUrl(url: any): void;
	    constructor(popup: SaveReportDialog);
	    popupButtons: any[];
	    reportUrl: ko.Observable<string>;
	    saveText: ko.Observable<string>;
	}
	export class SaveReportDialog extends ReportDialogBase {
	    constructor(saveReportDialog: SaveAsReportDialog, callbacks: IReportDesignerCustomizationHandler);
	    save(url: any): void;
	    notSave(): void;
	    cancel(): void;
	    saveReportDialog: SaveAsReportDialog;
	    onSaving: (e: any) => void;
	    onSaved: (e: any) => void;
	    title: string;
	}

}
declare module DevExpress.Reporting.Designer.Tools {
    import IDialogModel = DevExpress.Reporting.Designer.Tools.IDialogModel;
    import ReportDialogBase = DevExpress.Reporting.Designer.Tools.ReportDialogBase;;
    import INavigateTab = DevExpress.Reporting.Designer.Tools.INavigateTab;;
    import NavigateByReports = DevExpress.Reporting.Designer.Tools.NavigateByReports;;
    import IReportDesignerCustomizationHandler = DevExpress.Reporting.Designer.Utils.IReportDesignerCustomizationHandler;;

	export class OpenReportDialogModelBase implements IDialogModel {
	    urls: any;
	    constructor(popup: OpenReportDialog, urls: any);
	    onShow(tab: INavigateTab): void;
	    getUrl(): string;
	    setUrl(url: any): void;
	    onDblClick: (url: string) => void;
	    searchValue: ko.Observable<string>;
	    searchPlaceholder: () => any;
	    popupButtons: any[];
	    reportUrl: ko.Observable<string>;
	    noDataText: any;
	}
	export class OpenReportDialog extends ReportDialogBase {
	    title: string;
	    open(url: string): void;
	    constructor(subreports: any, navigateByReports: NavigateByReports, callbacks: IReportDesignerCustomizationHandler);
	    navigateByReports: NavigateByReports;
	    onOpening: (e: any) => void;
	    onOpened: (e: any) => void;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import IReportDesignerCustomizationHandler = DevExpress.Reporting.Designer.Utils.IReportDesignerCustomizationHandler;
    import IReportDesignerInitializationData = DevExpress.Reporting.Designer.Utils.IReportDesignerInitializationData;
    import IReportWizardSettings = DevExpress.Reporting.Designer.Utils.IReportWizardSettings;;
    import IExportSettings = DevExpress.Reporting.Viewer.Utils.IExportSettings;
    import IPreviewCustomizationHandler = DevExpress.Reporting.Viewer.Utils.IPreviewCustomizationHandler;
    import IProgressBarSettings = DevExpress.Reporting.Viewer.Utils.IProgressBarSettings;;
    import IEnumType = DevExpress.Reporting.IEnumType;;
    import IReportParametersInfo = DevExpress.Reporting.Viewer.Parameters.IReportParametersInfo;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import SqlDataSourceEditor = DevExpress.Reporting.Designer.Internal.SqlDataSourceEditor;;
    import JsonDataSourceEditor = DevExpress.Reporting.Designer.Internal.JsonDataSourceEditor;;
    import ObjectDataSourceEditor = DevExpress.Reporting.Designer.Internal.ObjectDataSourceEditor;;
    import DataSourceActions = DevExpress.Reporting.Designer.Internal.DataSourceActions;;
    import ReportWizard = DevExpress.Reporting.Designer.Wizard.ReportWizard;;
    import LegacyReportWizard = DevExpress.Reporting.Designer.Wizard.LegacyReportWizard;;
    import FullscreenReportWizard = DevExpress.Reporting.Designer.Wizard.FullscreenReportWizard;;
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import NavigateByReports = DevExpress.Reporting.Designer.Tools.NavigateByReports;;
    import SaveAsReportDialog = DevExpress.Reporting.Designer.Tools.SaveAsReportDialog;;
    import SaveReportDialog = DevExpress.Reporting.Designer.Tools.SaveReportDialog;;
    import OpenReportDialog = DevExpress.Reporting.Designer.Tools.OpenReportDialog;;
    import IKeyValuePair = DevExpress.Reporting.IKeyValuePair;;
    import ILocalizationSettings = DevExpress.Analytics.Internal.ILocalizationSettings;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;
    import FieldListProvider = DevExpress.Analytics.Internal.FieldListProvider;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;
    import DataSourceWizard = DevExpress.Analytics.Wizard.DataSourceWizard;
    import MultiQueryDataSourceWizard = DevExpress.Analytics.Wizard.MultiQueryDataSourceWizard;
    import IDataSourceWizardConnectionStrings = DevExpress.Analytics.Wizard.IDataSourceWizardConnectionStrings;
    import FullscreenDataSourceWizard = DevExpress.Analytics.Wizard.FullscreenDataSourceWizard;;
    import IMultiQueryDataSourceWizardCallbacks = DevExpress.Analytics.Wizard.Internal.IMultiQueryDataSourceWizardCallbacks;;

	export interface IReportDesignerGeneratorSettings {
	    selection?: SurfaceSelection;
	    rtl?: boolean;
	    callbacks: {
	        designer?: IReportDesignerCustomizationHandler;
	        preview?: IPreviewCustomizationHandler;
	    };
	    reportStorageWebIsRegister?: boolean;
	    allowMDI?: boolean;
	    knownEnums?: IEnumType[];
	    reportUrl?: ko.Observable<string> | ko.Computed<string>;
	    availableDataSources?: IDataSourceInfo[];
	    convertBindingsToExpressions?: string;
	    state?: any;
	    reportPreviewSettings?: IReportPreviewSettings;
	}
	export interface IReportPreviewSettings {
	    exportSettings?: IExportSettings;
	    progressBarSettings?: IProgressBarSettings;
	}
	export interface IReportUriSettings {
	    reportDesignerUri?: string;
	    previewUri?: string;
	}
	export interface PreviewOptions {
	    element: Element;
	    callbacks: IPreviewCustomizationHandler;
	    localizationSettings?: ILocalizationSettings;
	    parametersInfo?: IReportParametersInfo;
	    handlerUri?: string;
	    rtl?: boolean;
	    exportSettings?: IExportSettings;
	}
	export class WizardsInitializerSettings {
	    private callbacks;
	    private _doFinishCallback;
	    private _getParameters;
	    private _getItemsProviderCallBack;
	    registerReportWizardPages: (pageFactory: PageFactory) => void;
	    registerMultiQueryDataSourceWizardPages: (pageFactory: PageFactory) => void;
	    sqlDataSourceEditor: SqlDataSourceEditor;
	    jsonDataSourceEditor: JsonDataSourceEditor;
	    objectDataSourceEditor: ObjectDataSourceEditor;
	    dataSourceActionProvider: DataSourceActions;
	    dataSourceWizard: DataSourceWizard;
	    multiQueryDataSourceWizard: MultiQueryDataSourceWizard | FullscreenDataSourceWizard;
	    multipleQueriesWizardCallbacks: IMultiQueryDataSourceWizardCallbacks;
	    reportWizard: ReportWizard | LegacyReportWizard | FullscreenReportWizard;
	    createSqlDataSourceWizard(disableCustomSql: any, itemsProvider?: any, model?: ko.Observable<ReportViewModel>): DataSourceWizard;
	    createSqlDataSourceEditor(settings: {
	        dataSourceHelper: ko.Observable<DataSourceHelper> | ko.Computed<DataSourceHelper>;
	        dataSourceWizard: DataSourceWizard;
	        model: ko.Observable<ReportViewModel> | ko.Computed<ReportViewModel>;
	        undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>;
	        fieldListProvider: ko.Observable<FieldListProvider> | ko.Computed<FieldListProvider>;
	    }): void;
	    createMultipleQueriesWizardCallbacks(itemsProvider?: any, model?: ko.Observable<ReportViewModel>): void;
	    createMultiQueryDataSourceWizard(disableCustomSql: any, multipleQueriesWizardCallbacks?: IMultiQueryDataSourceWizardCallbacks, allowCreateNewJsonConnection?: boolean): void;
	    createReportWizard(settings: {
	        dataSourceHelper: ko.Observable<DataSourceHelper> | ko.Computed<DataSourceHelper>;
	        navigation: NavigateByReports;
	        isLoading: ko.Observable<boolean> | ko.Computed<boolean>;
	        isDirty: ko.Observable<boolean> | ko.Computed<boolean>;
	        state: () => any;
	        model: ko.Observable<ReportViewModel> | ko.Computed<ReportViewModel>;
	        undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>;
	        fieldListProvider: ko.Observable<FieldListProvider> | ko.Computed<FieldListProvider>;
	        data: IReportDesignerInitializationData;
	    }): void;
	    constructor(connectionStrings: IDataSourceWizardConnectionStrings, wizardSettings: IReportWizardSettings, callbacks: IReportDesignerCustomizationHandler, rtl: boolean);
	    private reportWizardOptions;
	    private multiQueryWizardOptions;
	    private dataSourceWizardOptions;
	}
	export class ReportDialogSettings {
	    private _designerCallbacks;
	    saveReportDialog: SaveAsReportDialog;
	    saveReportDialogLight: SaveReportDialog;
	    openReportDialog: OpenReportDialog;
	    constructor(_designerCallbacks: IReportDesignerCustomizationHandler);
	    createSaveReportDialog(reportUrls: ko.ObservableArray<IKeyValuePair<string>>): void;
	    createSaveReportDialogLight(saveReportDialog?: SaveAsReportDialog): void;
	    createOpenReportDialog(reportUrls: any, navigation: NavigateByReports): void;
	}

}
declare module DevExpress.Reporting.Designer.Utils {
    import INavigateTab = DevExpress.Reporting.Designer.Tools.INavigateTab;;
    import IParametersCustomizationHandler = DevExpress.Reporting.Viewer.Utils.IParametersCustomizationHandler;;
    import ReportDialogBase = DevExpress.Reporting.Designer.Tools.ReportDialogBase;;
    import WizardTypeString = DevExpress.Reporting.Designer.Wizard.WizardTypeString;
    import WizardType = DevExpress.Reporting.Designer.Wizard.WizardType;;
    import ControlsFactory = DevExpress.Reporting.Designer.Controls.ControlsFactory;;
    import DataBindingModeValue = DevExpress.Reporting.Designer.Utils.DataBindingModeValue;
    import DefaultCrossTabControlValue = DevExpress.Reporting.Designer.Utils.DefaultCrossTabControlValue;;
    import IKeyValuePair = DevExpress.Reporting.IKeyValuePair;;
    import IEnumType = DevExpress.Reporting.IEnumType;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IAction = DevExpress.Analytics.Utils.IAction;;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;
    import ICommonCustomizationHandler = DevExpress.Analytics.Internal.ICommonCustomizationHandler;
    import IDesignerPart = DevExpress.Analytics.Internal.IDesignerPart;
    import IGlobalizeSettings = DevExpress.Analytics.Internal.IGlobalizeSettings;;
    import DataSourceWizardSettings = DevExpress.Analytics.Wizard.DataSourceWizardSettings;
    import IDataSourceWizardSettings = DevExpress.Analytics.Wizard.IDataSourceWizardSettings;
    import IConnectionStringDefinition = DevExpress.Analytics.Wizard.IConnectionStringDefinition;;
    import IStandardPattern = DevExpress.Analytics.Widgets.Internal.IStandardPattern;;
    import IReportPreviewSettings = DevExpress.Reporting.Designer.Internal.IReportPreviewSettings;;
	export interface IComponentAddedEventArgs {
	    parent: any;
	    model: any;
	}
	export interface ICultureItem {
	    DisplayName: string;
	    Name: string;
	}
	export interface IReportNavigationTabsCustomizationHandler {
	    reportTabClosing?: (tab: INavigateTab, deffered: JQueryDeferred<any>) => boolean;
	    reportTabClosed?: (tab: INavigateTab) => void;
	    reportOpening?: (e: any) => void;
	    reportOpened?: (e: any) => void;
	    tabChanged?: (tab: INavigateTab) => void;
	}
	export interface IReportDesignerCustomizationHandler extends IParametersCustomizationHandler, ICommonCustomizationHandler, IReportNavigationTabsCustomizationHandler {
	    fieldLists?: (IPathRequest: any) => JQueryPromise<IDataMemberInfo[]>;
	    exitDesigner?: () => void;
	    reportSaving?: (e: any) => void;
	    reportSaved?: (e: any) => void;
	    customizeParts?: (parts: IDesignerPart[]) => void;
	    componentAdded?: (e: IComponentAddedEventArgs) => void;
	    customizeSaveDialog?: (popup: ReportDialogBase) => void;
	    customizeOpenDialog?: (popup: ReportDialogBase) => void;
	    customizeWizard?: (wizardType: WizardTypeString, wizard: WizardType) => void;
	    customizeSaveAsDialog?: (popup: ReportDialogBase) => void;
	    customizeToolbox?: (controlsStore: ControlsFactory) => void;
	    customizeFieldListActions?: (fieldListItem: IDataMemberInfo, actions: IAction[]) => void;
	}
	export interface IDataSourceRefInfo {
	    ref: string;
	    name: string;
	    isSqlDataSource?: boolean;
	    isJsonDataSource?: boolean;
	    isObjectDataSource?: boolean;
	    hasParams?: boolean;
	    dataSerializer?: string;
	}
	export interface ICultureInfoList {
	    csvSeparator?: string;
	    fontSet?: Array<string>;
	}
	export interface IReportWizardSettings extends IDataSourceWizardSettings {
	    useFullscreenWizard?: boolean;
	    useMasterDetailWizard?: boolean;
	}
	export class ReportWizardSettings extends DataSourceWizardSettings implements IReportWizardSettings {
	    createDefault(wizardSettings?: IReportWizardSettings): IReportWizardSettings;
	    useFullscreenWizard?: boolean;
	    useMasterDetailWizard?: boolean;
	}
	export interface IWizardConnections {
	    sql?: IConnectionStringDefinition[];
	    json?: IConnectionStringDefinition[];
	}
	export interface IReportDesignerInitializationData {
	    report: ko.Observable<any>;
	    dataBindingMode: DataBindingModeValue;
	    convertBindingsToExpressions?: string;
	    allowMDI?: boolean;
	    allowCreateNewJsonConnection?: boolean;
	    reportUrl: ko.Observable<string> | ko.Computed<string>;
	    availableDataSources: IDataSourceInfo[];
	    formatStringData?: {
	        standardPatterns: {
	            [key: string]: IStandardPattern;
	        };
	        customPatterns: {
	            [key: string]: Array<string>;
	        };
	    };
	    dataSourceRefs: any[];
	    state?: any;
	    cultureInfoList?: ICultureInfoList;
	    isReportServer?: boolean;
	    disableCustomSql: boolean;
	    wizardSettings?: IReportWizardSettings;
	    wizardConnections?: IWizardConnections;
	    isScriptsDisabled?: boolean;
	    reportStorageWebIsRegister: boolean;
	    subreports?: any;
	    reportPreviewSettings?: IReportPreviewSettings;
	    defaultCrossTabControl?: DefaultCrossTabControlValue;
	}
	export interface IReportDesignerInitializationModel extends IGlobalizeSettings {
	    reportModel?: any;
	    reportModelRootName?: string;
	    dataBindingMode?: DataBindingModeValue;
	    defaultCrossTabControl?: DefaultCrossTabControlValue;
	    allowCreateNewJsonConnection?: boolean;
	    convertBindingsToExpressions?: string;
	    allowMDI?: boolean;
	    formatStringData?: {
	        customPatterns: Array<IKeyValuePair<any>>;
	        standardPatterns: Array<IKeyValuePair<any>>;
	    };
	    availableCultures?: ICultureItem[];
	    reportUrl?: string;
	    dataSources?: IDataSourceInfo[];
	    dataSourcesData?: any[];
	    dataSourceRefs?: any[];
	    subreports?: any;
	    internalSettings?: {
	        isReportServer?: boolean;
	    };
	    disableCustomSql: boolean;
	    scriptsEnabled?: boolean;
	    reportStorageWebIsRegister?: boolean;
	    cultureInfoList?: ICultureInfoList;
	    reportExtensions?: any;
	    wizardSettings?: IReportWizardSettings;
	    wizardConnections?: IWizardConnections;
	    knownEnums?: Array<IEnumType>;
	    localization?: any;
	    fieldListMaxNestingLevelUpdate?: number;
	    rtl?: boolean;
	    handlerUri?: string;
	    viewerHandlerUri?: string;
	    limitation?: boolean;
	    queryBuilderHandlerUri?: string;
	    reportPreviewSettings?: IReportPreviewSettings;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
	export function subreportControlCollector(target: any, subreportControls?: any[]): any[];

}
declare module DevExpress.Reporting.Designer.Controls {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

    import PaddingModel = DevExpress.Analytics.Elements.PaddingModel;;
	export class StyleModel extends Disposable {
	    static defaults: {
	        'backColor': string;
	        'foreColor': string;
	        'borderColor': string;
	    };
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    isPropertyModified(name: any): boolean;
	    className: () => string;
	    displayType(): any;
	    name: ko.Observable<string> | ko.Computed<string>;
	    paddingObj: PaddingModel;
	    padding: ko.Observable<any>;
	    controlType: string;
	}

}
declare module DevExpress.Reporting.Designer.Data.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export var calculatedFieldScripts: ISerializationInfo;
	export var calculatedFieldSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Internal {
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
	export class ReportScriptService {
	    static validateScripts(report: ReportViewModel): any;
	    static getCompletions(editor: any, session: any, pos: any, prefix: any, callback: any, report: any, editorInstance: any, guid: string): any;
	    static setCodeDom(key: string, reportLayout: string): any;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
	export var eventArgsTypes: {
	    [key: string]: string;
	};

}
declare module DevExpress.Reporting.Designer.Internal {
	export class ReportDummyCreator {
	    static _createDummy(report: any): any;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
	export class ReportCompleter {
	    __getCompletions(editor: any, session: any, pos: any, prefix: any, callback: any): void;
	    constructor(report: ko.Observable<ReportViewModel>, editorInstance: any, guid: any);
	    getCompletions(editor: any, session: any, pos: any, prefix: any, callback: any): void;
	    completions: any[];
	    oldPrefix: string;
	    report: ko.Observable<ReportViewModel>;
	    editorInstance: any;
	    guid: ko.Observable<string> | ko.Computed<string>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
	export class LanguageHelper {
	    private _report;
	    getLanguageMode(): "ace/mode/text" | "ace/mode/csharp" | "ace/mode/vbscript";
	    createNewHandler(eventName: string, eventArgsType: string): string;
	    getFunctionNamesFromScript(scripts: string): any[];
	    constructor(report: ko.Observable<ReportViewModel>);
	    createCompleters(editor: any, bindingContext: any, viewModel: any): Array<{
	        getCompletions: any;
	    }>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import XRReportElementViewModel = DevExpress.Reporting.Designer.Controls.XRReportElementViewModel;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import LanguageHelper = DevExpress.Reporting.Designer.Internal.LanguageHelper;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export interface ICursorPosition {
	    row: number;
	    column: number;
	}
	export interface IScriptingControl {
	    scripts: any;
	    lockedInUserDesigner: () => boolean;
	}
	export interface IAceEditor {
	    setValue: (text: string) => void;
	    getValue: () => string;
	    getSession: () => any;
	    getSelection: () => any;
	    getCopyText: () => string;
	    getCursorPosition: () => ICursorPosition;
	    onPaste: (text: string) => void;
	    execCommand: (cmd: string) => void;
	    undo: (select: boolean) => void;
	    redo: (select: boolean) => void;
	    on: (event: string, handler: any) => void;
	    resize: () => void;
	    find: (needle: string, options: any, animate: boolean) => void;
	    findNext: () => void;
	    findPrevious: () => void;
	    focus: () => any;
	    guid: string;
	}
	export class ScriptsEditor extends Disposable {
	    private _selectionNotEmpty;
	    private _canUndo;
	    private _canRedo;
	    private _cursorPosition;
	    private _changeSelection;
	    private _updateEditorState;
	    private _initializeToolbar;
	    private _getValidIndex;
	    private _setScriptsText;
	    private _getFunctionName;
	    private _getEventByFunction;
	    static generateFunctionName(control: XRReportElementViewModel, eventName: string, functionName?: string, allFunctionNames?: any[]): string;
	    static getEventArgsType(eventName: string): string;
	    initialize(): void;
	    constructor(report: ko.Observable<ReportViewModel>, allControls: ko.ObservableArray<XRReportElementViewModel>);
	    readonly allFunctionNames: any[];
	    guid: ko.Observable<any>;
	    ensureEvent: (eventName: string, functionName?: string, model?: any) => void;
	    private _ensureFunction;
	    selectionChanged: (editor: IAceEditor) => void;
	    report: ko.Observable<ReportViewModel>;
	    scriptsText: ko.Observable<string> | ko.Computed<string>;
	    editorContainer: ko.Observable<IAceEditor>;
	    editorVisible: ko.Observable<boolean>;
	    toolbarItems: any[];
	    controls: ko.ObservableArray<XRReportElementViewModel>;
	    selectedControl: ko.Observable<XRReportElementViewModel>;
	    events: ko.Observable<string[]>;
	    selectedEvent: ko.Observable<string>;
	    languageHelper: LanguageHelper;
	    validateDisabled: ko.Observable<boolean>;
	    aceOptions: {
	        enableBasicAutocompletion: boolean;
	        enableSnippets: boolean;
	        enableLiveAutocompletion: boolean;
	        showPrintMargin: boolean;
	    };
	}

}
declare module DevExpress.Reporting.Designer.Data {
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;
    import IExpressionOptions = DevExpress.Analytics.Widgets.IExpressionOptions;;
    import IScriptingControl = DevExpress.Reporting.Designer.Internal.IScriptingControl;;
	export class CalculatedField extends Disposable implements IDataMemberInfo, IScriptingControl {
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    scripts: any;
	    isSelected?: boolean;
	    dataType?: string;
	    innerActions?: any;
	    relationPath?: string;
	    noDragable?: any;
	    dragData?: any;
	    icon?: string;
	    items?: IDataMemberInfo[];
	    readonly displayName: any;
	    readonly name: string;
	    readonly specifics: string;
	    readonly type: string;
	    lockedInUserDesigner(): boolean;
	    templateName: string;
	    contenttemplate: string;
	    isList: boolean;
	    isCalculated: boolean;
	    calculatedFieldName: ko.Observable<string> | ko.Computed<string>;
	    nameEditable: ko.Computed<string>;
	    dataMember: ko.Observable<string> | ko.Computed<string>;
	    dataSource: ko.Observable<ObjectStorageItem>;
	    fieldType: ko.Observable<string> | ko.Computed<string>;
	    expressionObj: IExpressionOptions;
	    propertyGrid: ObjectProperties;
	    pathRequest: IPathRequest;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import IDataSourceRefInfo = DevExpress.Reporting.Designer.Utils.IDataSourceRefInfo;;

	export function createIDataMemberInfoByName(name: string, specifics?: string): {
	    displayName: string;
	    name: string;
	    specifics: string;
	    isList: boolean;
	};
	export function recalculateUnit(value: any, dpi: number): number;
	export var PromptBoolean: {
	    'False': string;
	    'True': string;
	    'Prompt': string;
	};
	export function correctModel(model: any): any;
	export function createReportViewModel(newReportInfo: {
	    reportModel: string;
	    dataSourceRefs: IDataSourceRefInfo[];
	}, oldReport: ReportViewModel): ReportViewModel;
	export function updateDataSourceRefs(report: ReportViewModel, dataSourceRefs: any): void;
	export function isNotParameter(control: any): boolean;
	export function isControl(control: any): boolean;
	export function updateSurfaceContentSizeLocalizationMode(surfaceSize: ko.Observable<number> | ko.Computed<number>, root: Element, rtl?: boolean): () => void;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;

}
declare module DevExpress.Reporting.Designer.Controls {
	export var levelDefaultHeight: number;

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var baseTocLevelSerializationsInfo: ISerializationInfoArray;
	export var tocLevelSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var tocTitleSerializationsInfo: ISerializationInfoArray;
	export var tocTitle: ISerializationInfo;
	export var tocLevelDefault: ISerializationInfo;
	export var maxNestingLevel: ISerializationInfo;
	export var tocLevels: ISerializationInfo;
	export var tocSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRTableOfContentsViewModel = DevExpress.Reporting.Designer.Controls.XRTableOfContentsViewModel;;
    import XRControlSurfaceBase = DevExpress.Reporting.Designer.Controls.XRControlSurfaceBase;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import PaddingModel = DevExpress.Analytics.Elements.PaddingModel;;

    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;;
	export class TableOfContentsLevel extends ElementViewModel {
	    dispose(): void;
	    static createNew(parent: XRTableOfContentsViewModel): TableOfContentsLevel;
	    static unitProperties: string[];
	    private _levelIndex;
	    private _indentFactor;
	    private _createPaddingDependencies;
	    preInitProperties(model: any): void;
	    constructor(model: any, parent: XRTableOfContentsViewModel, serializer?: ModelSerializer, isTitle?: boolean);
	    isTitle: boolean;
	    name: ko.Observable<string> | ko.Computed<string>;
	    height: ko.Observable<number> | ko.Computed<number>;
	    width: ko.Observable<number> | ko.Computed<number>;
	    top: ko.Observable<number> | ko.Computed<number>;
	    levelsHeightUnder: ko.Observable<number> | ko.Computed<number>;
	    indent: ko.Observable<number> | ko.Computed<number>;
	    left: ko.Computed<number>;
	    leaderSymbol: ko.Observable<string> | ko.Computed<string>;
	    font: ko.Observable<string> | ko.Computed<string>;
	    foreColor: ko.Observable<string> | ko.Computed<string>;
	    backColor: ko.Observable<string> | ko.Computed<string>;
	    padding: ko.Observable<string> | ko.Computed<string>;
	    paddingObj: PaddingModel;
	    textAlignment: ko.Observable<string> | ko.Computed<string>;
	    text: ko.Observable<string> | ko.Computed<string>;
	    dpi: ko.Observable<number> | ko.Computed<number>;
	    parentModel: ko.Observable<XRTableOfContentsViewModel>;
	    borderWidth: ko.Observable | ko.Computed;
	    borderColor: ko.Observable | ko.Computed;
	    borders: ko.Observable | ko.Computed;
	    borderDefault: ko.Observable<string> | ko.Computed<string>;
	    borderDashStyle: ko.Observable | ko.Computed;
	    lockedInUserDesigner: ko.Observable<boolean> | ko.Computed<boolean>;
	    getInfo(): DevExpress.Analytics.Utils.ISerializationInfoArray;
	    isPropertyModified(name: string): boolean;
	    getControlFactory(): DevExpress.Reporting.Designer.Controls.ControlsFactory;
	    rtl(): boolean;
	}
	export class TableOfContentsLevelSurface extends XRControlSurfaceBase<TableOfContentsLevel> {
	    static _$leaderSymbol: JQuery;
	    static _unitProperties: IUnitProperties<TableOfContentsLevel>;
	    private _leaderSymbolWidth;
	    constructor(control: TableOfContentsLevel, context: ISurfaceContext);
	    text: ko.Observable<string> | ko.Computed<string>;
	    resizable(resizeHandler: any, element: HTMLElement): any;
	    leaderSymbols: ko.PureComputed<string>;
	    rtlLayout(): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;;
    import TableOfContentLocalizationProvider = DevExpress.Reporting.Designer.Internal.TableOfContentLocalizationProvider;;
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;;
    import TableOfContentsLevel = DevExpress.Reporting.Designer.Controls.TableOfContentsLevel;
    import TableOfContentsLevelSurface = DevExpress.Reporting.Designer.Controls.TableOfContentsLevelSurface;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;

	export class XRTableOfContentsViewModel extends XRControlViewModel {
	    static unitProperties: any[];
	    dispose(): void;
	    createLocalizationProvider(): TableOfContentLocalizationProvider;
	    constructor(control: any, parent: BandViewModel, serializer?: ModelSerializer);
	    readonly textEditableProperty: ko.Observable<string> | ko.Computed<string>;
	    levels: ko.ObservableArray<TableOfContentsLevel>;
	    levelDefault: TableOfContentsLevel;
	    levelTitle: TableOfContentsLevel;
	    maxNestingLevel: ko.Observable<number> | ko.Computed<number>;
	    levelTitleText: ko.Observable<string> | ko.Computed<string>;
	    allLevels: ko.Observable<TableOfContentsLevel[]> | ko.Computed<TableOfContentsLevel[]>;
	    borderWidth: ko.Observable | ko.Computed;
	    borderColor: ko.Observable | ko.Computed;
	    borders: ko.Observable | ko.Computed;
	    borderDashStyle: ko.Observable | ko.Computed;
	    borderDefault: ko.PureComputed<string>;
	    parentModel: ko.Observable<BandViewModel>;
	}
	export class XRTableOfContentsSurface extends XRControlSurface {
	    constructor(control: XRTableOfContentsViewModel, context: ISurfaceContext);
	    isThereIntersectionWithChildCollection(): boolean;
	    isThereIntersectionWithUsefulArea(): boolean;
	    isThereIntersectionWithParentCollection(): boolean;
	    levelTitle: TableOfContentsLevelSurface;
	    levelDefault: TableOfContentsLevelSurface;
	    levels: ko.ObservableArray<TableOfContentsLevelSurface>;
	}

}
declare module DevExpress.Reporting.Designer.Controls.PivotGrid.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IDisplayedValue = DevExpress.Analytics.Utils.IDisplayedValue;;
	export var summaryTypeValues: Array<IDisplayedValue>;
	export var summaryType: ISerializationInfo;
	export var fieldComponentName: ISerializationInfo;
	export var conditions: ISerializationInfo;
	export var field: ISerializationInfo;
	export var customTotalSummaryType: ISerializationInfo;
	export var sortBySummaryInfo: ISerializationInfoArray;
	export var sortBySummaryConditionInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Controls.PivotGrid {
    import PivotGridFieldViewModel = DevExpress.Reporting.Designer.Controls.PivotGrid.PivotGridFieldViewModel;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;;
	export class SortBySummaryInfoCondition implements ISerializableModel {
	    private _fieldsProvider;
	    constructor(model: any, fieldsProvider: {
	        fieldsAvailableForCondition: () => string[];
	    }, serializer?: IModelSerializer);
	    fieldComponentName: ko.Observable<string> | ko.Computed<string>;
	    getInfo(): ISerializationInfoArray;
	    static createNew(parent: SortBySummaryInfo, serializer?: IModelSerializer): SortBySummaryInfoCondition;
	}
	export class SortBySummaryInfo {
	    private _field;
	    private _pivotGridFields;
	    constructor(model: any, field: PivotGridFieldViewModel, serializer?: IModelSerializer);
	    conditions: ko.ObservableArray<SortBySummaryInfoCondition>;
	    getInfo(): ISerializationInfoArray;
	    fieldsAvailableForCondition(): string[];
	    static from(model: any, serializer?: IModelSerializer): any;
	    static toJSON(viewModel: SortBySummaryInfo, serializer?: IModelSerializer, refs?: any): any;
	}

}
declare module DevExpress.Reporting.Designer.Controls.PivotGrid {
    import SortBySummaryInfo = DevExpress.Reporting.Designer.Controls.PivotGrid.SortBySummaryInfo;;
    import XRControlSurfaceBase = DevExpress.Reporting.Designer.Controls.XRControlSurfaceBase;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;

    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
	export interface IPivotGridFieldFormatInfo {
	    formatString: ko.Observable<string>;
	    formatType: ko.Observable<string>;
	}
	export interface IPivotGridField {
	    area: ko.Observable<string> | ko.Computed<string>;
	    areaIndex: ko.Observable<number> | ko.Computed<number>;
	}
	export class PivotGridFieldViewModel extends ElementViewModel implements IPivotGridField {
	    static fieldHeight: number;
	    static createNew(parent: any): () => PivotGridFieldViewModel;
	    getFieldType(): string;
	    getInfo(): DevExpress.Analytics.Utils.ISerializationInfoArray;
	    getControlFactory(): DevExpress.Reporting.Designer.Controls.ControlsFactory;
	    constructor(model: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    getPath(propertyName: any): string;
	    getDisplayName(): any;
	    controlType: string;
	    area: ko.Observable<string> | ko.Computed<string>;
	    areaIndex: ko.Observable<number> | ko.Computed<number>;
	    areaIndexEditable: ko.Observable<number> | ko.Computed<number>;
	    index: ko.Observable<number> | ko.Computed<number>;
	    fieldName: ko.Observable<string> | ko.Computed<string>;
	    fieldNameEditable: any;
	    caption: ko.Observable<string> | ko.Computed<string>;
	    summaryType: ko.Observable<string>;
	    summaryDisplayType: ko.Observable<string>;
	    unboundType: ko.Observable<string>;
	    groupInterval: ko.Observable<string>;
	    unboundExpression: ko.Observable<string>;
	    sortBySummaryInfo: SortBySummaryInfo;
	    valueFormat: IPivotGridFieldFormatInfo;
	    totalValueFormat: IPivotGridFieldFormatInfo;
	    cellFormat: IPivotGridFieldFormatInfo;
	    totalCellFormat: IPivotGridFieldFormatInfo;
	    grandTotalCellFormat: IPivotGridFieldFormatInfo;
	}
	export class PivotGridFieldSurface extends XRControlSurfaceBase<PivotGridFieldViewModel> implements IPivotGridField {
	    constructor(control: PivotGridFieldViewModel, context: ISurfaceContext);
	    minWidth: ko.Computed<number>;
	    area: ko.Observable<string> | ko.Computed<string>;
	    areaIndex: ko.Observable<number> | ko.Computed<number>;
	    positionWidthWithoutZoom: ko.Computed<number>;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import PivotGridFieldViewModel = DevExpress.Reporting.Designer.Controls.PivotGrid.PivotGridFieldViewModel;
    import PivotGridFieldSurface = DevExpress.Reporting.Designer.Controls.PivotGrid.PivotGridFieldSurface;;
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;;
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import FilterStringOptions = DevExpress.Analytics.Widgets.FilterStringOptions;;

	export class XRPivotGridViewModel extends XRControlViewModel {
	    dispose(): void;
	    private _initCriteriaString;
	    constructor(model: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    removeChild(selectedField: PivotGridFieldViewModel): void;
	    getFieldsFromArea(area: string): PivotGridFieldViewModel[];
	    getPath(propertyName: any): string;
	    fields: ko.ObservableArray<PivotGridFieldViewModel>;
	    dataSource: ko.Observable<ObjectStorageItem>;
	    dataMember: ko.Observable<string> | ko.Computed<string>;
	    addFieldToArea: any;
	    prefilter: {
	        parent: XRPivotGridViewModel;
	        _criteriaString: ko.Observable<string> | ko.Computed<string>;
	        criteriaString: FilterStringOptions;
	    };
	}
	export class XRPivotGridSurface extends XRControlSurface {
	    constructor(control: XRPivotGridViewModel, context: ISurfaceContext);
	    _getChildrenHolderName(): string;
	    getAreaFields(area: string): PivotGridFieldSurface[];
	    getTotalsAreaFieldWidth(area: string, zoom: number): number;
	    getAdornTemplate(): "" | "dxrd-intersect";
	    isThereIntersectionWithChildCollection(): boolean;
	    filterFields: ko.Computed<PivotGridFieldSurface[]>;
	    dataFields: ko.Computed<PivotGridFieldSurface[]>;
	    columnFields: ko.Computed<PivotGridFieldSurface[]>;
	    rowFields: ko.Computed<PivotGridFieldSurface[]>;
	    totalsHeight: ko.Computed<number>;
	    rowHeaderHeight: ko.Computed<number>;
	    totalsDataFieldWidth: ko.Computed<number>;
	    totalsRowFieldWidth: ko.Computed<number>;
	    fields: ko.ObservableArray<PivotGridFieldSurface>;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {

    import FieldListEditor = DevExpress.Analytics.Widgets.FieldListEditor;;
	export class ReportFieldListEditor extends FieldListEditor {
	    constructor(modelPropertyInfo: any, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	}

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
	export var controlParameterInfos: DevExpress.Analytics.Utils.ISerializationInfo[];

}
declare module DevExpress.Reporting.Designer.Controls {
    import DataBindingBase = DevExpress.Reporting.Designer.Data.DataBindingBase;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;;

    import FieldListProvider = DevExpress.Analytics.Internal.FieldListProvider;;
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
	export class ControlParameter extends DataBindingBase implements ISerializableModel {
	    static createNew(): ControlParameter;
	    getInfo(): DevExpress.Analytics.Utils.ISerializationInfo[];
	    isEmpty(): boolean;
	    constructor(model: any, serializer?: IModelSerializer);
	    setDataMemberInfo(dataMemberInfo: IDataMemberInfo): void;
	    readonly specifics: string;
	    readonly name: string;
	    generateValue(undoEngine: any, dataSourceHelper: DataSourceHelper, dataSources: any, dataBindingsProvider?: FieldListProvider): ko.Computed<string>;
	    fakeBinding: any;
	    visible: ko.Observable<boolean>;
	    parameterName: ko.Observable<string>;
	    dataMemberInfo: ko.Observable<IDataMemberInfo>;
	}

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var shapeType: ISerializationInfo;
	export var stretch: ISerializationInfo;
	export var fillColor: ISerializationInfo;
	export var Shape: ISerializationInfo;
	export var shapeFake: ISerializationInfo;
	export var shapeElementSerializationsInfo: ISerializationInfoArray;
	export var shapesMap: {
	    'Rectangle': ISerializationInfoArray;
	    'Arrow': ISerializationInfoArray;
	    'Ellipse': ISerializationInfoArray;
	    'Polygon': ISerializationInfoArray;
	    'Star': ISerializationInfoArray;
	    'Line': ISerializationInfoArray;
	    'Bracket': ISerializationInfoArray;
	    'Cross': ISerializationInfoArray;
	    'Brace': ISerializationInfoArray;
	};
	export var shapeSerializationsInfo: ISerializationInfoArray;
	export var popularPropertiesShape: string[];

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;

    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
	export class XRShapeViewModel extends XRControlViewModel {
	    static timeout: number;
	    static shapes: ({
	        displayName: string;
	        type: string;
	        angle?: undefined;
	        val?: undefined;
	    } | {
	        displayName: string;
	        type?: undefined;
	        angle?: undefined;
	        val?: undefined;
	    } | {
	        displayName: string;
	        angle: number;
	        type: string;
	        val?: undefined;
	    } | {
	        displayName: string;
	        val: {
	            '@NumberOfSides': number;
	            '@StarPointCount'?: undefined;
	        };
	        type: string;
	        angle?: undefined;
	    } | {
	        displayName: string;
	        val: {
	            '@StarPointCount': number;
	            '@NumberOfSides'?: undefined;
	        };
	        type: string;
	        angle?: undefined;
	    })[];
	    static createShape(model: any, serializer?: any): {
	        'shapeType': ko.Observable<any>;
	        'getInfo': () => any;
	    };
	    constructor(model: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    Shape: any;
	    shapeFake: any;
	}
	export class XRShapeControlSurface extends XRControlSurface {
	    constructor(control: XRControlViewModel, context: ISurfaceContext);
	    imageSrc: ko.Computed<string>;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;;
	export var getRichEditSurface: (newVal?: () => any) => () => any;
	export var registerRichEditInline: (newVal?: (selection: SurfaceSelection) => any) => (selection: SurfaceSelection) => any;

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;

    import IFileUploadResult = DevExpress.Analytics.Internal.IFileUploadResult;;
	export enum XRRichTextStreamType {
	    RtfText = 0,
	    PlainText = 1,
	    HtmlText = 2,
	    XmlText = 3
	}
	export class XRRichViewModel extends XRControlViewModel {
	    private static _hiddenProperties;
	    private _toStreamType;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    readonly textEditableProperty: ko.Observable<string>;
	    format: ko.Observable<XRRichTextStreamType>;
	    foreColor: ko.Observable<string> | ko.Computed<string>;
	    serializableRtfString: ko.Observable<string> | ko.Computed<string>;
	    _newDocumentData: ko.Observable<IFileUploadResult>;
	    font: ko.Observable<string> | ko.Computed<string>;
	    textRtf: ko.Observable<string>;
	    _rtf: ko.Observable<string>;
	}
	export class XRRichSurface extends XRControlSurface {
	    private _lastRequest;
	    private _innerUpdate;
	    private _sendCallback;
	    constructor(control: XRRichViewModel, context: ISurfaceContext);
	    imageSrc: ko.Observable<string>;
	    isLoading: ko.Observable<boolean>;
	}

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var pdfSource: ISerializationInfo;
	export var pdfSourceUrl: ISerializationInfo;
	export var pageCount: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    disabled: boolean;
	    defaultVal: number;
	};
	export var pdfContentSerializationInfo: ISerializationInfoArray;
	export var popularPropertiesPdfContent: string[];

}
declare module DevExpress.Reporting.Designer.Internal {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
	export class UnknownViewModel extends XRControlViewModel {
	    constructor(model: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    _model: any;
	}
	export class TodoControlSurface extends XRControlSurface {
	    constructor(control: XRControlViewModel, context: ISurfaceContext);
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

    import TodoControlSurface = DevExpress.Reporting.Designer.Internal.TodoControlSurface;;
	export class XRPdfContentViewModel extends XRControlViewModel {
	    private _sourceItem;
	    constructor(model: any, parent: ElementViewModel, serializer?: IModelSerializer);
	    canFit(): boolean;
	    fitToContent(): void;
	    _getPdfContentData(checkSource: any): void;
	    _getExpressionNameByPropertyName(propertyName: string): string;
	    source: ko.Observable<string> | ko.Computed<string>;
	    sourceUrl: ko.Observable<string> | ko.Computed<string>;
	    generateOwnPages: ko.Observable<boolean>;
	    pageCount: ko.Observable<number>;
	    imageSource: ko.Observable<string>;
	    imageWidth: number;
	    imageHeight: number;
	    textContent: ko.Computed<string>;
	    pageRange: ko.Observable<string>;
	}
	export class XRPdfContentSurface extends TodoControlSurface {
	    private _handles;
	    private _getHandles;
	    constructor(control: XRPdfContentViewModel, context: ISurfaceContext);
	    getResizableOptions(resizeHandler: any): any;
	    generateOwnPages: ko.Observable<boolean>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import XRChartSurface = DevExpress.Reporting.Designer.Controls.XRChartSurface;;
    import XRShapeControlSurface = DevExpress.Reporting.Designer.Controls.XRShapeControlSurface;;
    import XRRichSurface = DevExpress.Reporting.Designer.Controls.XRRichSurface;;
    import XRPdfContentViewModel = DevExpress.Reporting.Designer.Controls.XRPdfContentViewModel;;
	export class ReportRenderingService {
	    static getChartImage(surface: XRChartSurface): any;
	    static getShapeImage(surface: XRShapeControlSurface): string;
	    static getRichImage(surface: XRRichSurface, propertyName: any): any;
	    static getPdfContentData(control: XRPdfContentViewModel): any;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;;
    import ChartViewModel = DevExpress.Reporting.Chart.Internal.Models.ChartViewModel;;
    import ChartControlViewModel = DevExpress.Reporting.Chart.Internal.ChartControlViewModel;;
    import ChartLocalizationProvider = DevExpress.Reporting.Designer.Internal.ChartLocalizationProvider;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;

	export class XRChartViewModel extends XRControlViewModel {
	    static assignValueDataMembers(chart: ChartViewModel, str: string): void;
	    static setDataMembers(chart: ChartViewModel, isPivotGrid: boolean): void;
	    private _createChartModel;
	    createLocalizationProvider(): ChartLocalizationProvider;
	    constructor(model: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    isPropertyDisabled(name: string): any;
	    getPath(propertyName: string): string;
	    pivotGridDataSourceOptions: ko.Computed<any>;
	    isPivotGridDataSource: ko.Observable<boolean> | ko.Computed<boolean>;
	    seriesDataMember: ko.Observable<string> | ko.Computed<string>;
	    dataMember: ko.Observable<string> | ko.Computed<string>;
	    chart: ChartViewModel;
	    chartModel: ChartControlViewModel;
	    dataSource: ko.Observable | ko.Computed;
	    realDataSource: ko.Observable | ko.Computed;
	    controlParameters: ko.ObservableArray<any>;
	}
	export class XRChartSurface extends XRControlSurface {
	    constructor(control: XRChartViewModel, context: ISurfaceContext);
	    designTime: ko.Observable<boolean>;
	    isLoading: ko.Observable<boolean>;
	    imageSrc: ko.Observable<string>;
	    runDesignerButtonText(): any;
	}

}
declare module DevExpress.Reporting.Designer.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export var componentInfo: ISerializationInfo;
	export var cultureInfo: ISerializationInfo;
	export var propertyNameInfo: ISerializationInfo;
	export var propertyValueInfo: ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Internal {
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import IModelSerializerOptions = DevExpress.Analytics.Utils.IModelSerializerOptions;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;
    import IModelSerializerRef = DevExpress.Analytics.Utils.IModelSerializerRef;;
	export class ReportModelSerializer extends ModelSerializer implements IModelSerializer {
	    reportModel?: ReportViewModel;
	    localizationJsonObj: any[];
	    isLocalized: boolean;
	    constructor(reportModel?: ReportViewModel, options?: IModelSerializerOptions);
	    serialize(viewModel?: ISerializableModel, serializationsInfo?: ISerializationInfoArray, refs?: IModelSerializerRef): any;
	    serializeProperty(modelPropertyInfo: ISerializationInfo, viewModel: ISerializableModel, serializationsInfo: ISerializationInfoArray, refs: IModelSerializerRef, result: any): void;
	    deserialize(viewModel: ISerializableModel, model: any, serializationsInfo?: ISerializationInfoArray): void;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
	export function getUnitProperties(object: any): {
	    reCalculateObject: (coef: any) => void;
	    calcProperty: (val: any, coef: any) => number;
	    properties: string[];
	};

}
declare module DevExpress.Reporting.Designer.Internal {
    import ILocalizedControl = DevExpress.Reporting.Designer.Internal.ILocalizedControl;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export class LocalizationItem {
	    culture: ko.Observable<string>;
	    component: ko.Observable<ILocalizedControl>;
	    propertyName: ko.Observable<string>;
	    propertyValue: ko.Observable<any>;
	    constructor(model?: any, serializer?: any);
	    getInfo(): ISerializationInfo[];
	}
	export function searchInLocalizationArray(localizationArray: ILocalizationItemInfo[], controlPropertyName: string, component: ILocalizedControl): ILocalizationItemInfo;
	export class ReportLocalizationEngine extends Disposable {
	    report: ReportViewModel;
	    items: LocalizationDictionary;
	    constructor(report: ReportViewModel);
	    recalculateUnits(coef: any): void;
	    hasCulture(cultureCode: string): boolean;
	    add: (cultureCode: string, component: ILocalizedControl, propertyName: string, value: any) => void;
	    isLocalized(): boolean;
	    save: (cultureCode?: string) => void;
	    apply: (cultureCode: string) => void;
	    serialize: () => LocalizationItem[];
	}
	export interface ILocalizationItemInfo {
	    propertyName: string;
	    component: ILocalizedControl;
	    value: any;
	    recalculate?: (coef: number) => any;
	}
	export class LocalizationDictionary {
	    private cultures;
	    add(code: string): LocalizationInfo;
	    get(code: string): LocalizationInfo;
	    count: () => number;
	    keys(): string[];
	    clear: (code?: string) => void;
	}
	export class LocalizationInfo {
	    private code;
	    properties: ILocalizationItemInfo[];
	    parent: LocalizationInfo;
	    isLocalized: ko.Observable<boolean>;
	    constructor(code: string);
	    getInheritedProperties(): ILocalizationItemInfo[];
	    createNodes(code: string, list: LocalizationDictionary): void;
	    private mergePropertiesWithChild;
	    private _recalculateUnit;
	    private _updateLocalizationInfoItem;
	    setValue: (component: ILocalizedControl, propertyName: string, value: any) => void;
	    private _createLocalizationItem;
	    serialize(canSerialize: (contol: any) => boolean): LocalizationItem[];
	    private findClosestProperty;
	    private getParentCulture;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import XRTableOfContentsViewModel = DevExpress.Reporting.Designer.Controls.XRTableOfContentsViewModel;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import XRChartViewModel = DevExpress.Reporting.Designer.Controls.XRChartViewModel;;
    import ILocalizationItemInfo = DevExpress.Reporting.Designer.Internal.ILocalizationItemInfo;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export function __createLocalizationProperties(target: any, format?: string): any;
	export class DefaultLocalizationProvider<T extends ILocalizedControl> extends Disposable {
	    _model: T;
	    dispose(): void;
	    _localizationInfo: LocalizedProperty[];
	    constructor(_model: T);
	    getLocalizationProperty(propertyName: string): LocalizedProperty;
	    getLocalizationProperties(): LocalizedProperty[];
	    applyLocalization(propertyName: string, propertyValue: any): void;
	}
	export class TableOfContentLocalizationProvider extends DefaultLocalizationProvider<XRTableOfContentsViewModel> {
	    getLocalizationProperties(): any;
	}
	export class ReportLocalizationProvider extends DefaultLocalizationProvider<ReportViewModel> {
	    getLocalizationProperties(): LocalizedProperty[];
	}
	export class ChartLocalizationProvider extends DefaultLocalizationProvider<XRChartViewModel> {
	    getLocalizationProperties(): any;
	}
	export class LocalizedProperty {
	    propertyName: any;
	    value: any;
	    info: ISerializationInfo;
	    constructor(propertyName: any, value: any, info: ISerializationInfo);
	    applyLocalization(value: ILocalizationItemInfo): void;
	}
	export interface ILocalizedControl {
	    getLocalizationProperties(): LocalizedProperty[];
	    applyLocalization(propertyName: string, value: any): void;
	    getLocalizationProperty(propertyName: string): LocalizedProperty;
	}

}
declare module DevExpress.Reporting.Designer.Data {
    import ObjectItem = DevExpress.Reporting.Designer.Data.ObjectItem;
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export class ObjectsStorage extends Disposable {
	    constructor(objects: ko.ObservableArray<ObjectItem>, dsHelperProvider: any);
	    findType(content: string): ObjectStorageItem;
	    getType(type: string): ObjectStorageItem;
	    addValue(): ObjectStorageItem;
	    createStaticLookUpSetting(): StaticListLookUpSettings;
	    createDynamicLookUpSetting(): DynamicListLookUpSettings;
	    createRangeSetting(): RangeParametersSettings;
	    objects: ko.ObservableArray<ObjectItem>;
	    dsHelperProvider: () => DataSourceHelper;
	}
    import RangeParametersSettings = DevExpress.Reporting.Designer.Data.RangeParametersSettings;;
    import StaticListLookUpSettings = DevExpress.Reporting.Designer.Data.StaticListLookUpSettings;
    import DynamicListLookUpSettings = DevExpress.Reporting.Designer.Data.DynamicListLookUpSettings;;

}
declare module DevExpress.Reporting.Designer.Data {
    import LookUpValue = DevExpress.Reporting.Designer.Data.LookUpValue;;
	export class ValueSourceSettingsHelper {
	    parameter: Parameter;
	    private _updateValueSourceSettingsType;
	    private _updateValueSourceSettings;
	    constructor(parameter: Parameter);
	    initializeParameterSettingsType(): void;
	    initializeLookupValueSubscribe(report: any): void;
	    initializeLookUpValue(lookUpValue: LookUpValue): void;
	    updateLookUpValues(newType: string, value?: any): void;
	    updateSettingValues(newType: string, value?: any): void;
	}
    import Parameter = DevExpress.Reporting.Designer.Data.Parameter;;

}
declare module DevExpress.Reporting.Designer.Data {

    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export class PropertyExpressionMapper {
	    static propertiesWithExpressions: string[];
	    getExpressionPropertyName(propertyName: string): string;
	    registerExpressionProperty(property: ISerializationInfo): ISerializationInfo;
	    isPropertyVisible(propertyName: string, editingMode: boolean): boolean;
	    getExpressionProperty(propertyName: string): {
	        showExpression: ko.Observable<boolean>;
	    };
	    private _mapper;
	}

}
declare module DevExpress.Reporting.Designer.Data {
    import IParameter = DevExpress.Reporting.Viewer.Parameters.IParameter;
    import IParameterDescriptor = DevExpress.Reporting.Viewer.Parameters.IParameterDescriptor;;
    import ILocalizedControl = DevExpress.Reporting.Designer.Internal.ILocalizedControl;
    import DefaultLocalizationProvider = DevExpress.Reporting.Designer.Internal.DefaultLocalizationProvider;;
    import ParameterTypesHelper = DevExpress.Reporting.Designer.Data.ParameterTypesHelper;;
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;
    import ObjectItem = DevExpress.Reporting.Designer.Data.ObjectItem;;
    import ObjectsStorage = DevExpress.Reporting.Designer.Data.ObjectsStorage;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;

	export class Parameter extends Disposable implements IParameter, IDataMemberInfo, ILocalizedControl {
	    _report: ReportViewModel;
	    static propertiesWithExpressions: string[];
	    static ParametersRefString: string;
	    static defaultGuidValue: string;
	    static availableRangeSettingTypes: string[];
	    private _parameterHelper;
	    __localizationProvider: DefaultLocalizationProvider<ILocalizedControl>;
	    readonly _localizationProvider: DefaultLocalizationProvider<ILocalizedControl>;
	    getLocalizationProperty(propertyName: string): DevExpress.Reporting.Designer.Internal.LocalizedProperty;
	    getLocalizationProperties(): DevExpress.Reporting.Designer.Internal.LocalizedProperty[];
	    applyLocalization(propertyName: string, propertyValue: any): void;
	    private _initializeValue;
	    private _preDeserialize;
	    private _processObsoleteProperties;
	    private _getExpressionActions;
	    preprocessInfo(info: ISerializationInfoArray): void;
	    getInfo(): ISerializationInfoArray;
	    appendExpressionObjInfo(info: ISerializationInfoArray): void;
	    getActionClassName(propertyName: string): {
	        'dxrd-editormenu-expressions': boolean;
	        'dxd-icon-accented': boolean;
	    };
	    constructor(model: any, _report: ReportViewModel, serializer?: IModelSerializer);
	    isPropertyVisible(name: string): boolean;
	    getParameterDescriptor(): IParameterDescriptor;
	    assign(parameter: Parameter): void;
	    getRangeParameters(): IDataMemberInfo[];
	    readonly name: string;
	    readonly specifics: string;
	    readonly icon: string;
	    readonly defaultValue: any;
	    readonly displayName: string;
	    readonly isList: boolean;
	    readonly dragData: {
	        noDragable: boolean;
	    };
	    isPropertyDisabled(propertyName: any): any;
	    templateName: string;
	    actionProviders: any[];
	    _expressionActions: {
	        [key: string]: IModelAction[];
	    };
	    expressionObj: {};
	    info: ISerializationInfoArray;
	    propertyExpressionMapper: PropertyExpressionMapper;
	    _type: ko.Observable<ObjectStorageItem> | ko.Computed<ObjectStorageItem>;
	    _obsoleteValue: ko.Observable | ko.Computed;
	    _isEditing: ko.Observable<boolean>;
	    objectsStorage: ObjectsStorage;
	    valueSourceSettings: ko.Observable<ObjectItem> | ko.Computed<ObjectItem>;
	    parameterName: ko.Observable<string> | ko.Computed<string>;
	    description: ko.Observable<string> | ko.Computed<string>;
	    tag: ko.Observable | ko.Computed;
	    type: ko.Computed<string>;
	    collapsed: ko.Observable<boolean> | ko.Computed<boolean>;
	    valueSourceSettingsType: ko.Observable<string>;
	    visible: ko.Observable<boolean> | ko.Computed<boolean>;
	    enabled: ko.Observable<boolean>;
	    value: ko.Observable | ko.Computed;
	    valueInfo: ko.Observable<ISerializationInfo> | ko.Computed<ISerializationInfo>;
	    isMultiValue: ko.Observable<boolean> | ko.Computed<boolean>;
	    selectAllValues: ko.Observable<boolean> | ko.Computed<boolean>;
	    allowNull: ko.Observable<boolean> | ko.Computed<boolean>;
	    multiValueInfo: ko.Observable<ISerializationInfo> | ko.Computed<ISerializationInfo>;
	    parameterTypesHelper: ParameterTypesHelper;
	    valueSourceSettingsHelper: ValueSourceSettingsHelper;
	    viewmodel: ObjectProperties;
	}
    import ValueSourceSettingsHelper = DevExpress.Reporting.Designer.Data.ValueSourceSettingsHelper;;
    import PropertyExpressionMapper = DevExpress.Reporting.Designer.Data.PropertyExpressionMapper;;
    import IModelAction = DevExpress.Analytics.Internal.IModelAction;;

}
declare module DevExpress.Reporting.Designer.Data {
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import PathRequest = DevExpress.Analytics.Utils.PathRequest;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;

    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;;
	export class DataBindingBase extends Disposable {
	    getInfo(): DevExpress.Analytics.Utils.ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    private _findDataSourceFromPath;
	    updateParameter(pathRequest: PathRequest, dataSources: IDataSourceInfo[]): void;
	    updateBinding(path: string, dataSources: any): void;
	    getValuePath(dataSourceHelper: any): string;
	    generateValue(undoEngine: UndoEngine, dataSourceHelper: DataSourceHelper, dataSources: any): ko.Computed<string>;
	    resetValue(): void;
	    isEmpty(): boolean;
	    value: ko.Observable<string> | ko.Computed<string>;
	    generatedValue: ko.Computed<string>;
	    parameter: ko.Observable<Parameter> | ko.Computed<Parameter>;
	    dataSource: ko.Observable<ObjectStorageItem> | ko.Computed<ObjectStorageItem>;
	    dataMember: ko.Observable<string> | ko.Computed<string>;
	    displayExpr: ko.Computed<string>;
	}
	export class DataBinding extends DataBindingBase {
	    static initialize(model: any, serializer?: ModelSerializer): ko.ObservableArray<DataBinding>;
	    getInfo(): DevExpress.Analytics.Utils.ISerializationInfoArray;
	    updateParameter(pathRequest: PathRequest, dataSources: any): void;
	    constructor(model: any, serializer?: IModelSerializer);
	    resetValue(): void;
	    visible: ko.Observable<boolean>;
	    disabled: ko.PureComputed<boolean>;
	    propertyName: ko.Observable<string> | ko.Computed<string>;
	    formatString: ko.Observable<string> | ko.Computed<string>;
	}
    import Parameter = DevExpress.Reporting.Designer.Data.Parameter;;

}
declare module DevExpress.Reporting {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import DesignControlsHelper = DevExpress.Analytics.Internal.DesignControlsHelper;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import XRReportElementViewModel = DevExpress.Reporting.Designer.Controls.XRReportElementViewModel;;
    import StyleModel = DevExpress.Reporting.Designer.Controls.StyleModel;;
	export var stylesProperties: string[];
	export class StylesHelper extends Disposable {
	    private _report;
	    private _controlsHelper;
	    static styleEqualityComparer(x: StyleModel, y: StyleModel): boolean;
	    static generateStyle(element: XRReportElementViewModel): StyleModel;
	    constructor(_report: ReportViewModel, _controlsHelper: DesignControlsHelper);
	    removeUnusedStyle(styleName: string): StyleModel;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import PaddingModel = DevExpress.Analytics.Elements.PaddingModel;
    import Point = DevExpress.Analytics.Elements.Point;
    import Size = DevExpress.Analytics.Elements.Size;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;;
    import IModelAction = DevExpress.Analytics.Internal.IModelAction;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;

	export class XRReportElementViewModel extends ElementViewModel implements ILocalizedControl, IScriptingControl {
	    __localizationProvider: DefaultLocalizationProvider<ILocalizedControl>;
	    readonly _localizationProvider: DefaultLocalizationProvider<ILocalizedControl>;
	    static unitProperties: string[];
	    dispose(): void;
	    createLocalizationProvider(): DefaultLocalizationProvider<ILocalizedControl>;
	    getLocalizationProperty(propertyName: string): DevExpress.Reporting.Designer.Internal.LocalizedProperty;
	    getLocalizationProperties(): DevExpress.Reporting.Designer.Internal.LocalizedProperty[];
	    applyLocalization(propertyName: string, propertyValue: any): void;
	    protected _resetProperty(propertyName: string): void;
	    private _getControlPropertyName;
	    private _getStylePriorityPropertyName;
	    private _getStyle;
	    private _checkModify;
	    private _getStyleProperty;
	    private _zOrderChange;
	    private _createPaddingDependencies;
	    constructor(model: any, parent: ElementViewModel, serializer?: IModelSerializer);
	    _getExpressionActions(name: any): IModelAction[];
	    _getExpressionEvents(): {
	        name: string;
	        localizationId: string;
	        displayName: string;
	    }[];
	    _addExpressionActions(propertyName: any): IModelAction[];
	    _expressionActions: {
	        [key: string]: IModelAction[];
	    };
	    getControlFactory(): DevExpress.Reporting.Designer.Controls.ControlsFactory;
	    addChild(control: IElementViewModel): void;
	    initDataBindingProperties(): void;
	    initExpressionProperties(): void;
	    _resetExpressions(propertyName: string): void;
	    _hasAnyExpressions(propertyName: any, predicateFunc?: (value: ko.Observable<string> | ko.Computed<string>, innerPropertyName?: string) => boolean): boolean;
	    _getExpressionNameByPropertyName(propertyName: any, info?: ISerializationInfoArray): string;
	    initBindings(): void;
	    dsHelperProvider: () => DataSourceHelper;
	    isStyleProperty(propertyName: string): boolean;
	    isResettableProperty(propertyName: string): boolean;
	    getActionClassName(propertyName: string): {};
	    getMenuBoxTemplate(propertyName: any): string;
	    className(): string;
	    initialize(): void;
	    getPath(propertyName: any): string;
	    isPropertyDisabled(name: string): boolean;
	    isPropertyVisible(name: string): boolean;
	    isPropertyHighlighted(propertyName: string, parentPropertyName?: string): boolean;
	    sendToBack(): void;
	    bringToFront(): void;
	    getControlContainerName(): string;
	    readonly dataBindingMode: any;
	    dpi: ko.Observable<number> | ko.Computed<number>;
	    _innerDpi: ko.Observable<number> | ko.Computed<number>;
	    styleName: ko.Observable<string> | ko.Computed<string>;
	    stylePriority: {
	        [key: string]: ko.Observable<boolean> | ko.Computed<boolean>;
	    };
	    formattingRuleLinks: ko.ObservableArray<FormattingRuleLink>;
	    dataBindings: ko.ObservableArray<DataBinding>;
	    size: Size;
	    location: Point;
	    scripts: any;
	    paddingObj: PaddingModel;
	    expressionBindings: ko.ObservableArray<IExpressionBinding>;
	    expressionObj: IExpressionObject;
	    padding: ko.Observable<string> | ko.Computed<string>;
	    root: XRReportElementViewModel;
	    getStyleProperty: (propertyName: string, styleProperty: string) => any;
	    toggleUseStyle: (propertyName: string) => void;
	    _lockedInUserDesigner: ko.Observable<boolean> | ko.Computed<boolean>;
	    lockedInUserDesigner: ko.Computed<boolean>;
	    rtl(): boolean;
	    parentModel: ko.Observable<XRReportElementViewModel | any>;
	}
    import DataBinding = DevExpress.Reporting.Designer.Data.DataBinding;;
    import IExpressionObject = DevExpress.Reporting.Designer.Internal.IExpressionObject;;
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import IExpressionBinding = DevExpress.Reporting.Designer.Controls.IExpressionBinding;;
    import FormattingRuleLink = DevExpress.Reporting.Designer.Controls.FormattingRuleLink;;
    import DefaultLocalizationProvider = DevExpress.Reporting.Designer.Internal.DefaultLocalizationProvider;
    import ILocalizedControl = DevExpress.Reporting.Designer.Internal.ILocalizedControl;;
    import IScriptingControl = DevExpress.Reporting.Designer.Internal.IScriptingControl;;

}
declare module DevExpress.Reporting.Designer.Controls {
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;;
    import XRReportElementViewModel = DevExpress.Reporting.Designer.Controls.XRReportElementViewModel;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;
    import ReportSurface = DevExpress.Reporting.Designer.Controls.ReportSurface;;
    import XRControlSurfaceBase = DevExpress.Reporting.Designer.Controls.XRControlSurfaceBase;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import Point = DevExpress.Analytics.Elements.Point;
    import IArea = DevExpress.Analytics.Elements.IArea;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;
    import SurfaceElementArea = DevExpress.Analytics.Elements.SurfaceElementArea;;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;
    import IHoverInfo = DevExpress.Analytics.Internal.IHoverInfo;;

    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
	export class XRCrossBandControlViewModel extends XRReportElementViewModel {
	    static unitProperties: string[];
	    constructor(control: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    private _subscribeBands;
	    getNearestParent(target: IElementViewModel): IElementViewModel;
	    isResettableProperty(propertyName: string): boolean;
	    isPropertyVisible(name: any): boolean;
	    getControlContainerName(): string;
	    name: ko.Observable<string> | ko.Computed<string>;
	    isCrossbandShow: ko.Computed<boolean>;
	    endPoint: Point;
	    startPoint: Point;
	    locationF: Point;
	    startBand: ko.Observable<BandViewModel>;
	    endBand: ko.Observable<BandViewModel>;
	    width: ko.Observable<number> | ko.Computed<number>;
	    surface: XRCrossBandSurface;
	    parentModel: ko.Observable<ReportViewModel>;
	}
	export class XRCrossBandSurface extends XRControlSurfaceBase<XRCrossBandControlViewModel> {
	    static _unitProperties: IUnitProperties<XRCrossBandControlViewModel>;
	    private _isBandCollapsed;
	    private _updateEndPoint;
	    private _getAllBands;
	    private _getIntersectionBands;
	    private _getCrossBandBoxSides;
	    protected readonly _unitAbsoluteRect: IArea;
	    constructor(control: XRCrossBandControlViewModel, context: ISurfaceContext);
	    canSetRect(rect: IArea): boolean;
	    isThereIntersectionWithControls(): boolean;
	    updateAbsolutePosition(): void;
	    isThereIntersectionWithCrossBandControls(): boolean;
	    edgeUnderCursor: ko.Observable<IHoverInfo> | ko.Computed<IHoverInfo>;
	    underCursor: ko.Observable<IHoverInfo> | ko.Computed<IHoverInfo>;
	    leftCss: ko.Observable | ko.Computed;
	    visible: ko.Computed<boolean>;
	    rightCss: ko.Observable | ko.Computed;
	    bottomCss: ko.Observable | ko.Computed;
	    topCss: ko.Observable | ko.Computed;
	    lineCss: ko.Observable | ko.Computed;
	    parent: ReportSurface;
	    lineWidthCss: ko.Observable | ko.Computed;
	    borderWidth: ko.Computed<number>;
	    container(): SurfaceElementArea<ElementViewModel>;
	    _getChildrenHolderName(): any;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import IStyleContainer = DevExpress.Analytics.Internal.IStyleContainer;;
	export class WatermarkModel extends SerializableModel implements IStyleContainer {
	    constructor(model: any, serializer?: IModelSerializer);
	    shouldDrawWatermarkImage(): boolean;
	    text: ko.Observable<string>;
	    textDirection: ko.Observable<string>;
	    foreColor: ko.Observable<string>;
	    imageSource: ko.Observable<ImageSource>;
	    rtl: () => undefined;
	}
    import ImageSource = DevExpress.Reporting.ImageSource;;

}
declare module DevExpress.Reporting {
	export var groupLayoutItemInfo: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	}[];
	export var parameterLayoutItemInfo: ({
	    propertyName: string;
	    modelName: string;
	    link: boolean;
	} | {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	})[];
	export var separatorLayoutItemInfo: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	}[];
	export var parameterPanelLayoutMapper: {
	    'Parameter': ({
	        propertyName: string;
	        modelName: string;
	        link: boolean;
	    } | {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    })[];
	    'Separator': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	    'Group': {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	    }[];
	};

}
declare module DevExpress.Reporting {
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
	export class ParameterPanelLayoutItem extends SerializableModel {
	    preInitProperties(model: any): void;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRReportElementViewModel = DevExpress.Reporting.Designer.Controls.XRReportElementViewModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;
    import IModelReady = DevExpress.Analytics.Utils.IModelReady;;

    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import IArea = DevExpress.Analytics.Elements.IArea;
    import Margins = DevExpress.Analytics.Elements.Margins;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;
    import SurfaceElementArea = DevExpress.Analytics.Elements.SurfaceElementArea;
    import IMargins = DevExpress.Analytics.Elements.IMargins;;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;
    import IHoverInfo = DevExpress.Analytics.Internal.IHoverInfo;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;
    import FieldListProvider = DevExpress.Analytics.Internal.FieldListProvider;;
	export class ReportViewModel extends XRReportElementViewModel implements IModelReady {
	    static availableDataSourceTypes: string[];
	    static bandsTypeOrdering: ReportBandsType[];
	    static unitProperties: string[];
	    static defaultPageSize: {
	        width: number;
	        height: number;
	    };
	    static createObjectStorage(_componentStorage: ko.ObservableArray<ObjectStorageItem>, _objectStorage: ko.ObservableArray<ObjectStorageItem>, collectSubscription?: (subscription: ko.Subscription) => any): ko.ObservableArray<ObjectStorageItem>;
	    private _getDpi;
	    private _recalculateUnits;
	    enumerateComponents(process?: (target: ko.ObservableArray<any>) => void): any;
	    createLocalizationProvider(): ReportLocalizationProvider;
	    findStyle(styleName: any): any;
	    _getBandForToc(bands: BandViewModel[]): any;
	    getOrCreateBandForToC(createNew?: boolean): {
	        band: any;
	        canAdd: any;
	    };
	    canAddToC(): any;
	    _initializeBands(): void;
	    isPropertyDisabled(name: string): boolean;
	    dispose(): void;
	    preInitProperties(): void;
	    constructor(report: any, serializer?: IModelSerializer);
	    isLocalized(): boolean;
	    initialize(): void;
	    getNearestParent(target: any): this;
	    addChild(control: IElementViewModel): void;
	    removeChild(control: ElementViewModel): void;
	    clearLocalization(culture?: string): void;
	    serialize(): any;
	    save(): any;
	    getPath(propertyName: string): string;
	    clone(): ReportViewModel;
	    paperKind: ko.Observable<string> | ko.Computed<string>;
	    isStyleProperty(propertyName: string): boolean;
	    onSave: (data: any) => void;
	    dataSourceHelper: ko.Observable<DataSourceHelper>;
	    dataBindingsProvider: ko.Observable<FieldListProvider>;
	    stylesHelper: ko.Observable<StylesHelper>;
	    dataSource: ko.Observable<ObjectStorageItem>;
	    dataMember: ko.Observable<string> | ko.Computed<string>;
	    styles: ko.ObservableArray<StyleModel>;
	    measureUnit: ko.Observable<string> | ko.Computed<string>;
	    snapGridSize: ko.Observable<number> | ko.Computed<number>;
	    pageWidth: ko.Observable<number> | ko.Computed<number>;
	    pageHeight: ko.Observable<number> | ko.Computed<number>;
	    margins: Margins;
	    bands: ko.ObservableArray<BandViewModel>;
	    crossBandControls: ko.ObservableArray<XRCrossBandControlViewModel>;
	    parameters: ko.ObservableArray<Parameter>;
	    parameterPanelLayoutItems: ko.ObservableArray<ParameterPanelLayoutItem>;
	    parameterHelper: ReportParameterHelper;
	    objectsStorageHelper: ObjectsStorage;
	    objectStorage: ko.ObservableArray<ObjectStorageItem>;
	    _objectStorage: ko.ObservableArray<ObjectStorageItem>;
	    _componentStorage: ko.ObservableArray<ObjectStorageItem>;
	    _dataBindingMode: ko.Observable<string> | ko.Computed<string>;
	    readonly dataBindingMode: string;
	    extensions: ko.ObservableArray<ExtensionModel>;
	    formattingRuleSheet: ko.ObservableArray<FormattingRule>;
	    components: ko.ObservableArray<ComponentsModel>;
	    calculatedFields: ko.ObservableArray<CalculatedField>;
	    scriptsSource: ko.Observable<string> | ko.Computed<string>;
	    scriptLanguage: ko.Observable<string> | ko.Computed<string>;
	    private _getReportUnit;
	    private _update;
	    surface: ReportSurface;
	    exportOptions: ExportOptions;
	    isModelReady: ko.Computed<boolean>;
	    scriptReferencesString: ko.Computed<string>;
	    landscape: ko.Observable<boolean> | ko.Computed<boolean>;
	    _scriptReferencesString: ko.Observable<string> | ko.Computed<string>;
	    key: ko.Computed<string>;
	    dataSourceRefs: Array<IDataSourceRefInfo>;
	    rtlLayout: ko.Observable<string> | ko.Computed<string>;
	    drawWatermark: ko.Observable<boolean> | ko.Computed<boolean>;
	    watermark: WatermarkModel;
	    displayNameObject: ko.Observable<string>;
	    _localizationItems: ko.ObservableArray<LocalizationItem>;
	    _localization: ReportLocalizationEngine;
	    language: ko.Observable<string>;
	}
	export class ReportSurface extends SurfaceElementArea<ReportViewModel> implements ISelectionTarget, ISurfaceContext {
	    static _unitProperties: IUnitProperties<ReportViewModel>;
	    private _createMargin;
	    private _updateWatermarkImageNaturalSize;
	    readonly _unitAbsoluteRect: IArea;
	    dispose(): void;
	    constructor(report: ReportViewModel, zoom?: ko.Observable<number>);
	    getChildrenCollection(): ko.ObservableArray<DevExpress.Reporting.Designer.Bands.BandSurface>;
	    isFit(dropTarget: ISelectionTarget): boolean;
	    canDrop(): boolean;
	    wrapRtlProperty(data: {
	        value: ko.Observable | ko.Computed;
	    }, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, element: Element): any;
	    allowMultiselect: boolean;
	    locked: boolean;
	    focused: ko.Observable<boolean>;
	    selected: ko.Observable<boolean>;
	    templateName: ko.Observable<string>;
	    bandsHolder: BandsHolder;
	    underCursor: ko.Observable<IHoverInfo>;
	    crossBandControls: ko.ObservableArray<XRCrossBandSurface>;
	    measureUnit: ko.Observable<string> | ko.Computed<string>;
	    zoom: ko.Observable<number> | ko.Computed<number>;
	    margins: IMargins;
	    dpi: ko.Observable<number> | ko.Computed<number>;
	    rtl: ko.Observable<boolean> | ko.Computed<boolean>;
	    pageWidthWithoutMargins: ko.Computed<number>;
	    ghostContainerOffset: ko.Computed<number>;
	    checkParent(surfaceParent: ISelectionTarget): boolean;
	    effectiveHeight: ko.Computed<number>;
	    minHeight: ko.Observable<number>;
	    maxMarkerWidth: ko.Observable<number>;
	    pageWidth: ko.Observable<number> | ko.Computed<number>;
	    pageHeight: ko.Observable<number> | ko.Computed<number>;
	    validationMode: ko.Observable<boolean>;
	    parent: ISelectionTarget;
	    leftMarginOffset: ko.Computed<number>;
	    rightMarginOffset: ko.Computed<number>;
	    rightMarginResizableOffset: ko.Computed<number>;
	    rightMarginResizeOptions: (undoEngine: ko.Observable<UndoEngine>, element: Element) => {};
	    leftMarginResizeOptions: (undoEngine: ko.Observable<UndoEngine>, element: Element) => {};
	    leftMarginResizableOffset: ko.Computed<number>;
	    drawWatermark: ko.Observable<boolean> | ko.Computed<boolean>;
	    watermark: WatermarkModel;
	    _watermarkImageNaturalSize: ko.Observable<{
	        width: number;
	        height: number;
	    }>;
	    _watermarkTextRenderingResult: ko.Observable<string> | ko.Computed<string>;
	}
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
    import ReportLocalizationProvider = DevExpress.Reporting.Designer.Internal.ReportLocalizationProvider;;
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import ReportParameterHelper = DevExpress.Reporting.Designer.ReportParameterHelper;;
    import StyleModel = DevExpress.Reporting.Designer.Controls.StyleModel;;
    import ObjectsStorage = DevExpress.Reporting.Designer.Data.ObjectsStorage;;
    import Parameter = DevExpress.Reporting.Designer.Data.Parameter;;
    import ExtensionModel = DevExpress.Reporting.Designer.Controls.ExtensionModel;;
    import CalculatedField = DevExpress.Reporting.Designer.Data.CalculatedField;;
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;;
    import ReportBandsType = DevExpress.Reporting.Designer.Bands.ReportBandsType;;
    import ComponentsModel = DevExpress.Reporting.Designer.Controls.ComponentsModel;;
    import ExportOptions = DevExpress.Reporting.Export.ExportOptions;;
    import IDataSourceRefInfo = DevExpress.Reporting.Designer.Utils.IDataSourceRefInfo;;
    import XRCrossBandControlViewModel = DevExpress.Reporting.Designer.Controls.XRCrossBandControlViewModel;
    import XRCrossBandSurface = DevExpress.Reporting.Designer.Controls.XRCrossBandSurface;;
    import BandsHolder = DevExpress.Reporting.Designer.Bands.Internal.BandsHolder;;
    import WatermarkModel = DevExpress.Reporting.Designer.Controls.WatermarkModel;;
    import FormattingRule = DevExpress.Reporting.Designer.Controls.FormattingRule;;
    import LocalizationItem = DevExpress.Reporting.Designer.Internal.LocalizationItem;
    import ReportLocalizationEngine = DevExpress.Reporting.Designer.Internal.ReportLocalizationEngine;;
    import StylesHelper = DevExpress.Reporting.StylesHelper;;
    import ParameterPanelLayoutItem = DevExpress.Reporting.ParameterPanelLayoutItem;;

}
declare module DevExpress.Reporting.Designer.Internal {
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
    import DesignControlsHelper = DevExpress.Analytics.Internal.DesignControlsHelper;;
	export type IReportItemsProviderRootItems = {
	    [key: string]: (path: string, controlsHelper: DesignControlsHelper) => IDataMemberInfo[];
	};
	export class ReportItemsProvider extends Disposable implements IItemsProvider {
	    private _rootItems;
	    private _getControlByName;
	    private _getProperties;
	    private _tryGenerateGetItemsFunc;
	    getReportElementsByPath(controlsHelper: any, path: string[]): IDataMemberInfo[];
	    getItems: (path: IPathRequest, rootItems?: IReportItemsProviderRootItems) => JQueryPromise<IDataMemberInfo[]>;
	    getItemByPath: (path: IPathRequest, rootItems?: IReportItemsProviderRootItems) => JQueryPromise<IDataMemberInfo>;
	    constructor(controlsHelper: DesignControlsHelper, fieldListProvider: IItemsProvider);
	    _getItemByPath(pathParts: string[], rootItems: IReportItemsProviderRootItems, propertyName: string): JQueryPromise<IDataMemberInfo>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import IExpressionBinding = DevExpress.Reporting.Designer.Controls.IExpressionBinding;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import IExpressionEditorFunction = DevExpress.Analytics.Widgets.Internal.IExpressionEditorFunction;;
    import IExpressionOptions = DevExpress.Analytics.Widgets.IExpressionOptions;;
	export interface IExpressionObject {
	    getInfo(): ISerializationInfoArray;
	    getExpression(propertyName: string, eventName: string): IExpressionOptions;
	    getExpressionsTreeItems(propertyName: string): IExpressionTreeItem[];
	    validateExpression(): boolean;
	    hasWarning(): boolean;
	}
	export interface IExpressionTreeItem {
	    expressionName: string;
	    eventName?: string;
	    displayName?: string;
	    localizationId?: string;
	    expressionObj?: IExpressionOptions;
	    innerItems?: IExpressionTreeItem[];
	}
	export class WrappedExpressionOptions extends Disposable implements IExpressionOptions {
	    eventName?: string;
	    constructor(options: IExpressionOptions, handlers: {
	        addExpression: (newVal: string) => void;
	        removeExpression: (expression: IExpressionBinding) => void;
	    }, fieldListProvider?: any, eventName?: string);
	    onHiding(e: any): void;
	    onShowing(e: any): void;
	    isValid: ko.Observable<boolean> | ko.Computed<boolean>;
	    warningMessage: ko.Observable<string>;
	    expression: ko.Observable<IExpressionBinding> | ko.Computed<IExpressionBinding>;
	    value: ko.Observable<string> | ko.Computed<string>;
	    path: ko.Observable<string> | ko.Computed<string>;
	    functions: Array<IExpressionEditorFunction>;
	    rootItems: ({
	        name: string;
	        needPrefix: boolean;
	        rootPath?: undefined;
	    } | {
	        name: string;
	        needPrefix: boolean;
	        rootPath: string;
	    })[];
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import IExpressionBinding = DevExpress.Reporting.Designer.Controls.IExpressionBinding;;
    import IExpressionObject = DevExpress.Reporting.Designer.Internal.IExpressionObject;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export interface IPropertyDescription {
	    events: string[];
	    group?: string;
	    objectProperties?: string[];
	}
	export class ExpressionWrapper extends Disposable {
	    private _bindingMode;
	    private _fieldListProvider?;
	    dispose(): void;
	    static createExpression(propertyName: any, eventName: any, expression: any): IExpressionBinding;
	    private _valuesDictionary;
	    private _displayNameDictionary;
	    private _expressionsInfo;
	    private _expressionsSerializationInfoCache;
	    private _createPropertyByName;
	    private _createInfo;
	    private _addControlInfo;
	    private _createSerializationInfo;
	    private _getPropertyDescriptors;
	    private _getExpressionFromArray;
	    private _createExpressionMap;
	    private _summaryFunctions;
	    private _mapExpressionsToObjectByEventName;
	    private _allExpressions;
	    private _isValidExpressions;
	    private _isWarningExpressions;
	    private _getExpressionByPropertyName;
	    private _mapExpressionsToObject;
	    constructor(_bindingMode?: string, _fieldListProvider?: ko.Observable | ko.Computed);
	    setPropertyDescription(controlType: string, propertyName: string, events: string[], objectProperties?: string[], group?: string): void;
	    hidePropertyDescriptions(controlType: string, ...propertyNames: any[]): void;
	    createExpressionsObject(controlType: string, expressions: ko.ObservableArray<IExpressionBinding>, path?: ko.Observable<string> | ko.Computed<string>, summaryRunning?: (name: string) => ko.Observable<boolean> | ko.Computed<boolean>): IExpressionObject;
	    setLocalizationId(propertyName: string, localizationId: string, displayName?: string): void;
	    setValues(propertyName: string, values: any[]): void;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import IExpressionObject = DevExpress.Reporting.Designer.Internal.IExpressionObject;;
    import ISerializationInfoWithBindings = DevExpress.Reporting.Designer.Controls.Metadata.ISerializationInfoWithBindings;;
    import IElementMetadata = DevExpress.Analytics.Elements.IElementMetadata;;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
    import AnalyticControlsFactory = DevExpress.Analytics.Utils.AnalyticControlsFactory;
    import IDisposable = DevExpress.Analytics.Utils.IDisposable;;

	export interface IReportControlMetadata extends IElementMetadata {
	    defaultBindingName?: string;
	    group?: 'common' | 'misc' | 'complex' | 'graphics' | string;
	    canPaste?: (dropTarget: ISelectionTarget) => boolean;
	}
	export class ControlsFactory extends AnalyticControlsFactory implements IDisposable {
	    fieldListProvider: ko.Observable | ko.Computed;
	    dispose(): void;
	    private _expressionWrapper;
	    private _beforePrintPrintOnPage;
	    private _beforePrint;
	    private _registerCommonExpressions;
	    private _registerExtensions;
	    constructor(fieldListProvider?: ko.Observable | ko.Computed);
	    registerControl(typeName: string, metadata: IReportControlMetadata): void;
	    _createExpressionObject(typeName: any, expressions: any, path?: ko.Computed<string>, summaryRunning?: (name: string) => ko.Observable<boolean> | ko.Computed<boolean>): IExpressionObject;
	    setExpressionBinding(controlType: string, propertyName: string, events: string[], group?: string, objectProperties?: string[]): void;
	    setPropertyDescription(controlType: string, propertyName: string, events: string[], group?: string, objectProperties?: string[]): void;
	    setDisplayNameForExpression(propertyName: string, localizationId: string, displayName: string): void;
	    hideExpressionBindings(type: any, ...propertyNames: any[]): void;
	    hidePropertyDescriptions(type: any, ...propertyNames: any[]): void;
	    inheritControl(parentType: string, extendedOptions: IElementMetadata): IElementMetadata & {
	        parentType: string;
	        info: any[];
	        popularProperties: any[];
	    };
	    createPopularBindingInfo(options: ISerializationInfoWithBindings, isExpression?: boolean): ISerializationInfoWithBindings;
	}

}
declare module DevExpress.Reporting.Designer.Tools {

    import Point = DevExpress.Analytics.Elements.Point;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IDisposable = DevExpress.Analytics.Utils.IDisposable;;
    import ReportSurface = DevExpress.Reporting.Designer.Controls.ReportSurface;;
    import XRReportElementViewModel = DevExpress.Reporting.Designer.Controls.XRReportElementViewModel;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;;
	export interface ISmartTag extends IDisposable {
	    onClick: () => void;
	    imageTemplateName: string;
	    templateName?: string;
	}
	export class SmartTagModel extends Disposable {
	    constructor(selection: SurfaceSelection, reportSurface: ko.Observable<ReportSurface>, offset: ko.Observable<number> | ko.Computed<number>);
	    getMargin(reportElement: XRReportElementViewModel): string;
	    margin: ko.Observable<string>;
	    position: Point;
	    smartTags: ko.ObservableArray<ISmartTag>;
	    visible: ko.Observable<boolean>;
	}

}
declare module DevExpress.Reporting.Designer.Utils {
    import ControlsFactory = DevExpress.Reporting.Designer.Controls.ControlsFactory;;
    import XRReportElementViewModel = DevExpress.Reporting.Designer.Controls.XRReportElementViewModel;;
    import ISmartTag = DevExpress.Reporting.Designer.Tools.ISmartTag;;
	export type DataBindingModeValue = 'Bindings' | 'Expressions' | 'ExpressionsAdvanced';
	export type DefaultCrossTabControlValue = 'XRCrossTab' | 'XRPivotGrid';
	export var controlsFactory: (newVal?: ControlsFactory) => ControlsFactory;
	export var smartTagFactory: (newVal?: {
	    [key: string]: (element: XRReportElementViewModel) => ISmartTag[];
	}) => {
	    [key: string]: (element: XRReportElementViewModel) => ISmartTag[];
	};
	export var DataBindingMode: (newVal?: DataBindingModeValue) => DataBindingModeValue;
	export var HandlerUri: (newVal?: string) => string;
	export var formatStringEditorCustomSet: (newVal?: {
	    [key: string]: string[];
	}) => {
	    [key: string]: string[];
	};
	export var DefaultCrossTabControl: (newVal?: DefaultCrossTabControlValue) => DefaultCrossTabControlValue;

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IDisplayedValue = DevExpress.Analytics.Utils.IDisplayedValue;;
	export interface ISerializationInfoWithBindings extends ISerializationInfo {
	    bindingName?: string;
	}
	export var textAlignmentValues: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[];
	export var borderDashStyleValues: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[];
	export var stylePrioritySerializationInfo: ISerializationInfoArray;
	export var xlsxFormatString: ISerializationInfo;
	export var name: ISerializationInfo;
	export var displayName: ISerializationInfo;
	export var text: ISerializationInfo;
	export var textArea: ISerializationInfo;
	export var textTrimming: ISerializationInfo;
	export var size: ISerializationInfo;
	export var location: ISerializationInfo;
	export var defaultBooleanValuesArray: Array<IDisplayedValue>;
	export var tag: ISerializationInfo;
	export var lockedInUserDesigner: ISerializationInfo;
	export var visible: ISerializationInfo;
	export var backColor: ISerializationInfo;
	export var foreColor: ISerializationInfo;
	export var font: ISerializationInfo;
	export var expressionableFont: ISerializationInfo;
	export var expressionableFontInfo: ISerializationInfoArray;
	export var borderColor: ISerializationInfo;
	export var borders: ISerializationInfo;
	export var borderWidth: ISerializationInfo;
	export var borderDashStyle: ISerializationInfo;
	export var paddingString: ISerializationInfo;
	export var padding: ISerializationInfo;
	export var textAlignment: ISerializationInfo;
	export var textFitMode: ISerializationInfo;
	export var angle: ISerializationInfo;
	export var canGrow: ISerializationInfo;
	export var canShrink: ISerializationInfo;
	export var multiline: ISerializationInfo;
	export var wordWrap: ISerializationInfo;
	export var allowMarkupText: ISerializationInfo;
	export var autoWidth: ISerializationInfo;
	export var keepTogether: ISerializationInfo;
	export var keepTogetherDefaultValueFalse: ISerializationInfo;
	export var processDuplicatesTarget: ISerializationInfo;
	export var processDuplicatesMode: ISerializationInfo;
	export var processNullValues: ISerializationInfo;
	export var reportPrintOptionsSerializationInfo: ISerializationInfoArray;
	export var dataAdapter: ISerializationInfo;
	export var dataSource: ISerializationInfo;
	export var dataMember: ISerializationInfo;
	export var filterString: ISerializationInfo;
	export var filterStringEditable: ISerializationInfo;
	export var bookmark: ISerializationInfo;
	export var bookmarkParent: ISerializationInfo;
	export var navigateUrl: ISerializationInfo;
	export var target: ISerializationInfo;
	export var nullValueText: ISerializationInfo;
	export function getSummaryFunctionValues(): Array<IDisplayedValue>;
	export var summaryFunctionValues: Array<IDisplayedValue>;
	export var textFormatString: ISerializationInfo;
	export function createSummarySerializationInfo(summaryFunctions?: IDisplayedValue[]): ISerializationInfoArray;
	export var summarySerializationInfo: ISerializationInfoArray;
	export var summary: ISerializationInfo;
	export var reportPrintOptions: ISerializationInfo;
	export var lineWidth: ISerializationInfo;
	export var lineStyle: ISerializationInfo;
	export var dpi: ISerializationInfo;
	export var canPublish: ISerializationInfo;
	export var rtl: ISerializationInfo;
	export var imageType: ISerializationInfo;
	export var paddingGroup: ISerializationInfo[];
	export var accessibleDescription: ISerializationInfo;
	export var cells: {
	    propertyName: string;
	    modelName: string;
	    array: boolean;
	};
	export var sortOrder: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    defaultVal: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    valuesArray: {
	        value: string;
	        displayValue: string;
	        localizationId: string;
	    }[];
	};

}
declare module DevExpress.Reporting.Designer.Data.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var valueSourceSettingsTypes: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[];
	export var extendValueSourceSettingsTypes: any;
	export var parameterValueSerializationInfo: ISerializationInfo;
	export var parameterExpressionSerializationInfo: ISerializationInfo;
	export var parameterLookUpSettingsSerializationInfo: ISerializationInfo;
	export var valueSourceSettingsSerializationInfo: ISerializationInfo;
	export var parameterNameSerializationInfo: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    defaultVal: string;
	    validationRules: {
	        type: string;
	        validationCallback: (options: any) => boolean;
	        readonly message: any;
	    }[];
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	};
	export var parameterSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Data {
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
	export class ObjectItem extends Disposable {
	    dsHelperProvider?: () => DataSourceHelper;
	    dispose(): void;
	    getInfo(): ISerializationInfoArray;
	    afterDeserialization(model: any, serializer: any): void;
	    preInitProperties(model: any, dsHelperProvider?: () => DataSourceHelper, serializer?: IModelSerializer): void;
	    constructor(model: any, dsHelperProvider?: () => DataSourceHelper, serializer?: IModelSerializer);
	    objectType: ko.Observable<string> | ko.Computed<string>;
	}
	export class ObjectStorageItem extends ObjectItem {
	    _getInfo(): ISerializationInfoArray;
	    preInitProperties(model: any): void;
	    constructor(model: any, dsHelperProvider?: any, serializer?: IModelSerializer);
	    isEmpty(): boolean;
	    content: ko.Observable<string> | ko.Computed<string>;
	    type: ko.Observable<string> | ko.Computed<string>;
	}
	export class ObjectStorageParameter extends SerializableModel {
	    constructor(model: any, serializer?: IModelSerializer);
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import ObjectItem = DevExpress.Reporting.Designer.Data.ObjectItem;
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
    import IDataSourceRefInfo = DevExpress.Reporting.Designer.Utils.IDataSourceRefInfo;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;

    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;;
	export class DataSourceHelper extends Disposable {
	    private _objects;
	    availableDataSources: IDataSourceInfo[];
	    static defaultReportExtensionKey: string;
	    dispose(): void;
	    constructor(objects: ko.ObservableArray<ObjectStorageItem>, dataSourceRefs: IDataSourceRefInfo[], availableDataSources: IDataSourceInfo[]);
	    getDataSourcePath(dataSource: any): string;
	    _findDataSourceInfo(name: string, collection: ko.ObservableArray<IDataSourceInfo>): IDataSourceInfo;
	    _getDataSourceInfo(name: string): IDataSourceInfo;
	    _getDataSourceName(dataSource: ObjectStorageItem): string;
	    _addUsedDataSource(result: IDataSourceInfo): void;
	    _addDataSource(dataSource: IDataSourceInfo, data: ObjectItem, uniqueName?: string): IDataSourceInfo;
	    private _cloneObjectItem;
	    getUniqueDataSourceName(name: string): string;
	    addDataSource(dataSourceInfo: IDataSourceInfo): ObjectItem;
	    removeDataSource(dataSourceInfo: IDataSourceInfo): void;
	    restoreDataSource(dataSourceInfo: IDataSourceInfo): void;
	    dataSourceValue(value: ko.Observable<ObjectStorageItem>, undoEngine?: ko.Observable<UndoEngine>): ko.PureComputed<string>;
	    dataSourceDisplayExpr(dataSource: IDataSourceInfo): any;
	    usedDataSources: ko.ObservableArray<IDataSourceInfo>;
	    allDataSources: ko.ObservableArray<IDataSourceInfo>;
	    mergedDataSources(): IDataSourceInfo[];
	    findDataSourceInfo(dataSource: ObjectItem): IDataSourceInfo;
	    findDataSourceInfoByID(id: string): IDataSourceInfo;
	    findDataSourceInfoByRef(ref: string): IDataSourceInfo;
	    findDataSourceInfoByName(name: string): IDataSourceInfo;
	    static _assignValueInTimeout: boolean;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import IActionsProvider = DevExpress.Analytics.Internal.IActionsProvider;;
    import DataSourceWizard = DevExpress.Analytics.Wizard.DataSourceWizard;
    import DataSourceWizardPageIterator = DevExpress.Analytics.Wizard.DataSourceWizardPageIterator;
    import IDataSourceWizardState = DevExpress.Analytics.Wizard.IDataSourceWizardState;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;
    import IAction = DevExpress.Analytics.Utils.IAction;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
    import analyticIDataSourceInfo = DevExpress.Analytics.Internal.analyticIDataSourceInfo;;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;;

    import MasterDetailEditor = DevExpress.QueryBuilder.Widgets.Internal.MasterDetailEditor;;
	export abstract class DataSourceEditorBase implements IActionsProvider {
	    _dsHelper: ko.Observable<DataSourceHelper> | ko.Computed<DataSourceHelper>;
	    _wizard: DataSourceWizard;
	    _reportViewModel: ko.Observable<ReportViewModel> | ko.Computed<ReportViewModel>;
	    _undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>;
	    _itemsProvider: ko.Observable<IItemsProvider> | ko.Computed<IItemsProvider>;
	    abstract getActions(context: any): IAction[];
	    constructor(_dsHelper: ko.Observable<DataSourceHelper> | ko.Computed<DataSourceHelper>, _wizard: DataSourceWizard, _reportViewModel: ko.Observable<ReportViewModel> | ko.Computed<ReportViewModel>, _undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, _itemsProvider: ko.Observable<IItemsProvider> | ko.Computed<IItemsProvider>);
	    protected _findDataSource(dataSourceID: string): analyticIDataSourceInfo;
	    static _onFail(result: any, deferred: JQueryDeferred<any>): void;
	}
	export interface IDataSourceInfo extends analyticIDataSourceInfo {
	    base64: () => string;
	}
	export class CreateQueryIterator extends DataSourceWizardPageIterator {
	    getNextPageId(pageId: string): any;
	}
	export class SqlDataSourceEditor extends DataSourceEditorBase {
	    private _applyWizardChanges;
	    private _createOrEditSqlDataSource;
	    private _applyDataSourceChange;
	    relationsEditor: ko.Observable<MasterDetailEditor>;
	    editSqlQuery(dataSourceID: string, queryName: string): void;
	    addSqlQuery(dataSourceID: string): void;
	    removeSqlQuery(dataSourceID: string, queryName: string): void;
	    editMasterDetailRelations(dataSourceID: string): void;
	    applySqlDataSourceWizardChanges(dataSourceWizardModel: IDataSourceWizardState): JQueryPromise<IDataSourceInfo>;
	    static createSqlDataSourceInfo(source: SqlDataSource, queryName?: string, relationsEditing?: boolean): JQueryPromise<IDataSourceInfo>;
	    addAction: {
	        clickAction: (item: any) => void;
	        imageClassName: string;
	        imageTemplateName: string;
	        text: any;
	    };
	    editAction: {
	        clickAction: (item: any) => void;
	        position: number;
	        imageClassName: string;
	        imageTemplateName: string;
	        text: any;
	    };
	    removeAction: {
	        clickAction: (item: any) => void;
	        position: number;
	        imageClassName: string;
	        imageTemplateName: string;
	        text: any;
	    };
	    editRelationsAction: {
	        clickAction: (item: any) => void;
	        position: number;
	        imageClassName: string;
	        imageTemplateName: string;
	        text: any;
	    };
	    getActions(context: any): IAction<any>[];
	}

}
declare module DevExpress.Reporting.Designer.Internal {

    import IDataSourceInfo = DevExpress.Reporting.Designer.Internal.IDataSourceInfo;;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IDisplayedValue = DevExpress.Analytics.Utils.IDisplayedValue;;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;;
    import IAnalyticDataSourceInfo = DevExpress.Analytics.Internal.IAnalyticDataSourceInfo;;
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
    import IMultiQueryDataSourceWizardCallbacks = DevExpress.Analytics.Wizard.Internal.IMultiQueryDataSourceWizardCallbacks;;
	export interface IReportWizardCallbacks extends IMultiQueryDataSourceWizardCallbacks {
	    fieldListsCallback: IReportWizardFieldsCallback;
	    createSqlDataSourceInfo?: (dataSource: SqlDataSource) => JQueryPromise<IDataSourceInfo>;
	    createJsonDataSourceInfo?: (dataSource: JsonDataSource) => JQueryPromise<IDataSourceInfo>;
	}
	export interface IReportWizardFieldsCallback {
	    (request: IPathRequest, dataSource: IAnalyticDataSourceInfo): JQueryPromise<IDataMemberInfo[]>;
	}
	export var _masterDetailWizardHeight: string;
	export var _masterDetailWizardWidth: string;
	export var _masterDetailScrollViewHeight: string;
	export function overrideFullscreenDataSourceWizardPageMetadata(factory: PageFactory, pageId: string, create: () => WizardPageBase): void;
	export class FieldInfo extends Disposable {
	    constructor(data: Array<IDisplayedValue>);
	    setDefaultValue(defaultVal: any): void;
	    getOptions(options: any): any;
	    field: ko.Observable<IDataMemberInfo>;
	    selectedItems: ko.ObservableArray<any>;
	    functionValue: ko.Observable<any>;
	    visible: ko.Observable<boolean>;
	    value: any;
	}

}
declare module DevExpress.Reporting.Designer.Wizard {
    import IReportWizardCallbacks = DevExpress.Reporting.Designer.Internal.IReportWizardCallbacks;;
    import IReportWizardSettings = DevExpress.Reporting.Designer.Utils.IReportWizardSettings;;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;;
    import _DataSourceWizardOptionsBase = DevExpress.Analytics.Wizard._DataSourceWizardOptionsBase;;
	export class _ReportWizardOptions extends _DataSourceWizardOptionsBase<IReportWizardCallbacks> {
	    callbacks: IReportWizardCallbacks;
	    wizardSettings: IReportWizardSettings;
	    dataSources: ko.PureComputed<IDataSourceInfo[]>;
	    hideDataMemberSubItems: boolean;
	}

}
declare module DevExpress.Reporting.Designer.Wizard {
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;
    import FullscreenWizardPage = DevExpress.Analytics.Wizard.FullscreenWizardPage;;
	export class SelectDataSourcePage extends FullscreenWizardPage {
	    private reportWizardOptions;
	    constructor(reportWizardOptions: _ReportWizardOptions);
	    registerSections(): void;
	    getNextSectionId(sectionId: any): string;
	}
	export function _registerSelectDataSourcePage(factory: FullscreenWizardPageFactory, reportWizardOptions: _ReportWizardOptions): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;
    import SpecifyAnalyticSqlDataSourceSettingsPage = DevExpress.Analytics.Wizard.SpecifyAnalyticSqlDataSourceSettingsPage;;
	export class SpecifySqlDataSourceSettingsPage extends SpecifyAnalyticSqlDataSourceSettingsPage {
	    registerSections(): void;
	    commit(): JQuery.Promise<any, any, any>;
	}
	export function _registerSpecifySqlDataSourceSettingsPage(factory: FullscreenWizardPageFactory, wizardOptions: _ReportWizardOptions): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;
    import AnalyticSpecifyJsonDataSourceSettingsPage = DevExpress.Analytics.Wizard.AnalyticSpecifyJsonDataSourceSettingsPage;;
	export class SpecifyJsonDataSourceSettingsPage extends AnalyticSpecifyJsonDataSourceSettingsPage {
	    registerSections(): void;
	}
	export function _registerSpecifyJsonDataSourceSettingsPage(factory: FullscreenWizardPageFactory, wizardOptions: _ReportWizardOptions): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;
    import AnalyticSpecifyObjectDataSourceSettingsPage = DevExpress.Analytics.Wizard.AnalyticSpecifyObjectDataSourceSettingsPage;;
	export class SpecifyObjectDataSourceSettingsPage extends AnalyticSpecifyObjectDataSourceSettingsPage {
	    private _dataSourceId;
	    canNext(): boolean;
	    initialize(state: any): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<any, any, any>;
	}
	export function _registerSpecifyObjectDataSourceSettingsPage(factory: FullscreenWizardPageFactory, wizardOptions: _ReportWizardOptions): void;

}
declare module DevExpress.Reporting.Designer.Wizard {

    import IMasterDetailReportTree = DevExpress.Reporting.Designer.Internal.IMasterDetailReportTree;;
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export interface IGroupFieldDataMemberInfo extends IDataMemberInfo {
	    visible?: ko.Observable<boolean>;
	}
	export class _GroupsFieldStore extends Disposable {
	    private _onChange;
	    dispose(): void;
	    dataSource: ko.ObservableArray<IGroupFieldDataMemberInfo>;
	    constructor(query: IMasterDetailReportTree, _onChange: () => void);
	    getSelectedFieldsFlat(): IGroupFieldDataMemberInfo[];
	    getSelectedFields(): string[][];
	    groups: ko.ObservableArray<_GroupField>;
	    isCreateGroupEnabled(): boolean;
	    path: string;
	    addGroupText: () => any;
	    displayName: string;
	    add(): void;
	    remove(index: any): void;
	    moveUpDisabled(index: any): boolean;
	    moveDownDisabled(index: any): boolean;
	    moveup(index: any): void;
	    movedown(index: any): void;
	}
	export class _GroupField extends Disposable {
	    private _store;
	    private _onChange;
	    private _updateDataSource;
	    constructor(_store: _GroupsFieldStore, _onChange: () => void);
	    getOptions(options: any): any;
	    value: any;
	    fields: ko.ObservableArray<string>;
	}
	export class AddGroupFieldsPage extends WizardPageBase {
	    dispose(): void;
	    canFinish(): boolean;
	    private _mergeGroups;
	    initialize(state: IReportWizardState): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<any, any, any>;
	    _reportTree: IMasterDetailReportTree[];
	    _groupInfos: ko.ObservableArray<_GroupsFieldStore>;
	}
	export function _registerAddGroupFieldsPage(factory: PageFactory): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import SummaryInfoFieldlist = DevExpress.Reporting.Designer.Internal.SummaryInfoFieldlist;
    import ISummaryDataMemberInfo = DevExpress.Reporting.Designer.Internal.ISummaryDataMemberInfo;;
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class AddSummaryFieldsPage extends WizardPageBase {
	    dispose(): void;
	    private _fillTreeQueries;
	    private _createSummaryInfo;
	    private _createNewItemIfNeed;
	    private _getParentName;
	    private _flat;
	    _removeSummaryInfo(info: SummaryInfoFieldlist): void;
	    canFinish(): boolean;
	    _toggleIgnoreNullValues: () => void;
	    _updateSummaries(flatlist: ISummaryDataMemberInfo[]): void;
	    initialize(state: IReportWizardState): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<any, any, any>;
	    _fieldListProvider: ko.Observable<IItemsProvider>;
	    ignoreNullValues: ko.Observable<boolean>;
	    _template: string;
	    _reportTree: ko.ObservableArray<ISummaryDataMemberInfo>;
	    _availableFieldsCount: ko.Observable<number>;
	    _summaryInfos: ko.ObservableArray<SummaryInfoFieldlist>;
	    _selectFieldToSummaryCaption: any;
	    _fieldsCaption: any;
	    _summaryFunctionCaption: any;
	    _ignoreNullValuesCaption: any;
	}
	export function _registerAddSummaryFieldsPage(factory: PageFactory): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;
    import FullscreenWizardPage = DevExpress.Analytics.Wizard.FullscreenWizardPage;;
	export class DefineReportLayoutPage extends FullscreenWizardPage {
	    private _reportWizardOptions;
	    constructor(_reportWizardOptions: _ReportWizardOptions);
	    registerSections(): void;
	    _beforeStart(): void;
	    getNextSectionId(sectionId: string): string;
	}
	export function _registerDefineReportLayoutPage(factory: FullscreenWizardPageFactory, reportWizardOptions: _ReportWizardOptions): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;
    import FullscreenWizardPage = DevExpress.Analytics.Wizard.FullscreenWizardPage;;
	export class SpecifyLabelSettingsPage extends FullscreenWizardPage {
	    private _reportWizardOptions;
	    constructor(_reportWizardOptions: _ReportWizardOptions);
	    registerSections(): void;
	    canNext(): boolean;
	    getNextSectionId(sectionId: string): string;
	}
	export function _registerSpecifyLabelSettingsPage(factory: FullscreenWizardPageFactory, reportWizardOptions: _ReportWizardOptions): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import ConfigureReportPageSettingsPage = DevExpress.Reporting.Designer.Wizard.ConfigureReportPageSettingsPage;;
    import ChooseReportColorSchemePage = DevExpress.Reporting.Designer.Wizard.ChooseReportColorSchemePage;;
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class ConfigurePageSettingsPage extends WizardPageBase {
	    _configureReportPageSettingsPage: ConfigureReportPageSettingsPage;
	    _colorSchemePage: ChooseReportColorSchemePage;
	    _colorSchemePageVisible: boolean;
	    dispose(): void;
	    addColorScheme(name: string, color: string, position?: number): void;
	    removeColorScheme(...names: string[]): void;
	    removeAllColorSchemes(): void;
	    setCustomColor(color: string): void;
	    onChange(callback: any): void;
	    canNext(): boolean;
	    canFinish(): boolean;
	    initialize(state: IReportWizardState): JQuery.Promise<any, any, never>;
	    commit(): JQuery.Promise<any, any, any>;
	}
	export function _registerConfigureReportPageSettingsSection(factory: PageFactory): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import PreviewPageHelper = DevExpress.Reporting.Designer.Wizard.PreviewPageHelper;;

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;
    import FullscreenWizardPage = DevExpress.Analytics.Wizard.FullscreenWizardPage;;
	export class SpecifyPageSettingsPage extends FullscreenWizardPage {
	    private _reportWizardOptions;
	    constructor(_reportWizardOptions: _ReportWizardOptions);
	    canNext(): boolean;
	    canFinish(): boolean;
	    registerSections(): void;
	    getNextSectionId(sectionId: any): string;
	}
	export function _registerSpecifyPageSettingsPage(factory: FullscreenWizardPageFactory, reportWizardOptions: _ReportWizardOptions): void;
	export class SpecifyReportTitlePage extends WizardPageBase {
	    constructor();
	    private _getBrightness;
	    private _fillTables;
	    initialize(state: any): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<any, any, any>;
	    _reportTitlePlaceholder(): any;
	    _foreColor: ko.Observable<string>;
	    _masterDetailInfo: ko.ObservableArray<any>;
	    reportTitle: ko.Observable<string> | ko.Computed<string>;
	    _reportTitleVisible: boolean;
	    _color: ko.Observable<string>;
	    _previewPageHelper: PreviewPageHelper;
	}
	export function _registerSpecifyReportTitlePage(factory: PageFactory): void;

}
declare module DevExpress.Reporting.Designer.Internal {
    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
    import FieldListController = DevExpress.Reporting.Designer.Internal.FieldListController;;
	export class CrossTabWizardFieldListController extends FieldListController {
	    isDraggable(item: TreeListItemViewModel): boolean;
	    showIconsForChildItems: () => boolean;
	}
	export class CrossTabWizardDragDropHandler extends DragDropHandler {
	    private _addHandler;
	    private _dropTarget;
	    constructor(dragHelperContent: any, _addHandler: any);
	    helper(draggable: any, event: any): JQuery<HTMLElement>;
	    doStopDrag(ui: any, draggable: any): void;
	    drag(event: JQueryEventObject, ui: any): void;
	}

}
declare module DevExpress.Reporting.Designer.Wizard {
    import IHoverInfo = DevExpress.Analytics.Internal.IHoverInfo;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
    import ITreeListOptions = DevExpress.Analytics.Widgets.Internal.ITreeListOptions;;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;

    import FieldInfo = DevExpress.Reporting.Designer.Internal.FieldInfo;
    import IReportWizardFieldsCallback = DevExpress.Reporting.Designer.Internal.IReportWizardFieldsCallback;;
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
    import SelectDataMembersPage = DevExpress.Reporting.Designer.Wizard.SelectDataMembersPage;;
	export class SelectCrossTabDataMember extends SelectDataMembersPage {
	    private _pageRendered;
	    private _firstRenderNode;
	    private _dragHelperContent;
	    private _itemsProvider;
	    private _controller;
	    private _timeout;
	    private _createCrossTabLeafTreeNode;
	    private _createCrossTabTreeNode;
	    private _afteCheck;
	    private _findFirstCheckedField;
	    constructor(_fieldListCallBack: IReportWizardFieldsCallback, _hideDataMemberSubItems?: boolean);
	    commit(): JQuery.Promise<any, any, any>;
	    _signleFieldMemberFieldListModel: ITreeListOptions;
	    _title: string;
	    _icon: string;
	}
	export class ConfigureCrossTabPage extends WizardPageBase {
	    protected _title: string;
	    stateName: string;
	    itemInfo: ISerializationInfo;
	    changeAlways: boolean;
	    canFinish(): boolean;
	    constructor(_title: string, stateName: string, itemInfo: ISerializationInfo);
	    _removeInfo(item: FieldInfo): void;
	    addInfo(fieldName?: string): void;
	    initialize(state: IReportWizardState, stateChanged?: boolean): JQuery.Promise<any, any, any>;
	    underCursor: ko.Observable<IHoverInfo> | ko.Computed<IHoverInfo>;
	    isDroppable: ko.Computed<boolean>;
	    _crossTabFields: ko.ObservableArray<IDataMemberInfo>;
	    _template: string;
	    fieldInfos: ko.ObservableArray<FieldInfo>;
	    _icon: string;
	    _fieldName: any;
	    _valueName: any;
	}
	export function _registerConfigureCrossTabPage(factory: FullscreenWizardPageFactory, pageId: string, title: string, info: ISerializationInfo): void;

}
declare module DevExpress.Reporting.Designer.Controls.PivotGrid.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var caption: ISerializationInfo;
	export var index: ISerializationInfo;
	export var fieldName: ISerializationInfo;
	export var minWidth: ISerializationInfo;
	export var width: ISerializationInfo;
	export var area: ISerializationInfo;
	export var allowedAreas: ISerializationInfo;
	export var areaIndex: ISerializationInfo;
	export var areaIndexEditable: ISerializationInfo;
	export var unboundType: ISerializationInfo;
	export var unboundFieldName: ISerializationInfo;
	export var unboundExpression: ISerializationInfo;
	export var topValueType: ISerializationInfo;
	export var topValueShowOthers: ISerializationInfo;
	export var topValueCount: ISerializationInfo;
	export var summaryDisplayType: ISerializationInfo;
	export var sortOrder: ISerializationInfo;
	export var sortMode: ISerializationInfo;
	export var showNewValues: ISerializationInfo;
	export var runningTotal: ISerializationInfo;
	export var rowValueLineCount: ISerializationInfo;
	export var groupIntervalNumericRange: ISerializationInfo;
	export var groupInterval: ISerializationInfo;
	export var grandTotalText: ISerializationInfo;
	export var expandedInFieldsGroup: ISerializationInfo;
	export var emptyValueText: ISerializationInfo;
	export var emptyCellText: ISerializationInfo;
	export var displayFolder: ISerializationInfo;
	export var columnValueLineCount: ISerializationInfo;
	export var totalsVisibility: ISerializationInfo;
	export var useNativeFormat: ISerializationInfo;
	export var KPIGraphic: ISerializationInfo;
	export var cellFormat: ISerializationInfo;
	export var totalCellFormat: ISerializationInfo;
	export var grandTotalCellFormat: ISerializationInfo;
	export var valueFormat: ISerializationInfo;
	export var totalValueFormat: ISerializationInfo;
	export var appearanceInfo: ISerializationInfoArray;
	export var appearancesInfo: ISerializationInfoArray;
	export var unboundExpressionMode: ISerializationInfo;
	export var options: ISerializationInfo;
	export var sortBySummary: ISerializationInfo;
	export var pivotGridFieldSerializationsInfo: ISerializationInfoArray;
	export var popularPropertiesPivotGridField: string[];
	export var pivotGridFieldsSerializable: ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Controls.CrossTab.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var crossTabFieldName: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: string;
	};
	export var crossTabGroupInterval: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: string;
	    valuesArray: DevExpress.Analytics.Utils.IDisplayedValue[];
	};
	export var crossTabGroupIntervalNumericRange: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: number;
	};
	export var crossTabSummaryType: any;
	export var crossTabSortBySummaryInfo: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    info: any[];
	};
	export var crossTabDataFieldInfoBase: ISerializationInfoArray;
	export var crossTabDataFieldInfo: ISerializationInfo[];
	export var sortOrderdefaultValAscending: any;
	export var crossTabGroupFieldInfoBase: ISerializationInfoArray;
	export var crossTabGroupFieldInfo: ISerializationInfo[];
	export var rowFields: ISerializationInfo;
	export var columnFields: ISerializationInfo;
	export var dataFields: ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import FullscreenWizardPage = DevExpress.Analytics.Wizard.FullscreenWizardPage;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;;
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
	export class DefineCrossTabPage extends FullscreenWizardPage {
	    private _reportWizardOptions;
	    constructor(_reportWizardOptions: _ReportWizardOptions);
	    _showPageDescription(): boolean;
	    canNext(): boolean;
	    _className: string;
	    registerSections(): void;
	    getNextSectionId(sectionId: string): string;
	    commit(): JQuery.Promise<any, any, any>;
	}
	export function _registerSelectSingleDataMemberPage(factory: FullscreenWizardPageFactory, reportWizardOptions: _ReportWizardOptions): void;
	export function _registerDefineCrossTabPage(factory: FullscreenWizardPageFactory, reportWizardOptions: _ReportWizardOptions): void;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import _ReportWizardOptions = DevExpress.Reporting.Designer.Wizard._ReportWizardOptions;;
    import IReportWizardState = DevExpress.Reporting.Designer.Wizard.IReportWizardState;;
    import MasterDetailRequestModel = DevExpress.Reporting.Designer.Internal.MasterDetailRequestModel;;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;
    import FullscreenWizard = DevExpress.Analytics.Wizard.FullscreenWizard;
    import PageIterator = DevExpress.Analytics.Wizard.PageIterator;
    import StateManager = DevExpress.Analytics.Wizard.StateManager;
    import _WrappedWizardPage = DevExpress.Analytics.Wizard._WrappedWizardPage;;

	export class FullscreenReportWizard extends FullscreenWizard {
	    private _reportWizardOptions;
	    protected _callBeforeFinishHandler(state: any, wizardModel?: any): void;
	    protected _callAfterFinishHandler(state: any, result: any): void;
	    constructor(pageFactory: FullscreenWizardPageFactory, _reportWizardOptions: _ReportWizardOptions);
	    _description(): any;
	    initialize(state?: IReportWizardState): void;
	    _requestModelType: typeof MasterDetailRequestModel;
	    _availableDataSources: ko.Observable<IDataSourceInfo[]> | ko.Computed<IDataSourceInfo[]>;
	}
	export class FullscreenReportWizardPageIterator extends PageIterator<IReportWizardState> {
	    private _reportWizardOptions;
	    constructor(pagesFactory: PageFactory, stateManager: StateManager, _onResetPage: (page: _WrappedWizardPage) => void, _reportWizardOptions: _ReportWizardOptions);
	    getNextPageId(pageId?: string): string;
	}
	export function _registerFullscreenReportWizardPages(factory: PageFactory, reportWizardOptions: _ReportWizardOptions): void;
	export function _createFullscreenReportWizard(reportWizardOptions: _ReportWizardOptions): FullscreenReportWizard;

}
declare module DevExpress.Reporting.Designer.Wizard {
    import FullscreenReportWizard = DevExpress.Reporting.Designer.Wizard.FullscreenReportWizard;;
    import DataSourceWizard = DevExpress.Analytics.Wizard.DataSourceWizard;
    import FullscreenDataSourceWizard = DevExpress.Analytics.Wizard.FullscreenDataSourceWizard;;
	export type WizardTypeString = 'SingleQueryDataSourceWizard' | 'DataSourceWizard' | 'ReportWizard';
	export type WizardRunType = 'NewViaReportWizard' | 'DataSourceWizard' | 'DesignInReportWizard';
	export type CommandRunType = WizardRunType | 'LocalizationCommand';
	export type WizardType = DataSourceWizard | FullscreenDataSourceWizard | FullscreenReportWizard;

}
declare module DevExpress.Reporting.Designer.Internal {
    import CommandRunType = DevExpress.Reporting.Designer.Wizard.CommandRunType;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export class WizardRunner extends Disposable {
	    private _menuOptions;
	    dispose(): void;
	    private _currentWizard;
	    private _wizards;
	    constructor(_menuOptions: {
	        visible: ko.Subscribable<boolean>;
	        collapsed: ko.Subscribable<boolean>;
	    });
	    registerCommand(wizardType: CommandRunType, start: () => void, close: () => void): void;
	    run(command: CommandRunType): void;
	    closeWizard(): void;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import ReportSurface = DevExpress.Reporting.Designer.Controls.ReportSurface;;
    import IComponentAddedEventArgs = DevExpress.Reporting.Designer.Utils.IComponentAddedEventArgs;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;
    import ToolboxDragDropHandler = DevExpress.Analytics.Internal.ToolboxDragDropHandler;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;;
	export class ReportToolboxDragDropHandler extends ToolboxDragDropHandler {
	    _wholeWideControls: string[];
	    dispose(): void;
	    surface: ko.Observable<ReportSurface> | ko.Computed<ReportSurface>;
	    constructor(surface: ko.Observable<ReportSurface> | ko.Computed<ReportSurface>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper: SnapLinesHelper, dragHelperContent: DragHelperContent, controlsFactory: ControlsFactory, onComponentAdded?: any);
	    helper(draggable: any): void;
	    private _processProperty;
	    doStopDrag(ui: any, draggable: any): void;
	    addControl(control: IElementViewModel, dropTargetSurface: ISelectionTarget, size: any): void;
	    onComponentAdded: (e: IComponentAddedEventArgs) => void;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import CalculatedField = DevExpress.Reporting.Designer.Data.CalculatedField;;
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IAction = DevExpress.Analytics.Utils.IAction;;

    import IActionsProvider = DevExpress.Analytics.Internal.IActionsProvider;
    import IItemsExtender = DevExpress.Analytics.Internal.IItemsExtender;;
	export class CalculatedFieldsSource extends Disposable implements IActionsProvider, IItemsExtender {
	    dispose(): void;
	    private _calculatedFieldsInfo;
	    private _ordinaryFieldsInfo;
	    private _calculatedFields;
	    private _dataSourceHelper;
	    private _reportDataSource;
	    private _fieldsDataMembersInfo;
	    private _fieldsCallback;
	    private _getDataMembersInfoByPath;
	    private _subscribeFieldProperties;
	    private _getFieldPathRequest;
	    private _updateFieldPathRequest;
	    private _initializeCalculatedField;
	    private _generateNewFieldName;
	    constructor(calculatedFields: ko.ObservableArray<CalculatedField>, reportDataSource: ko.Observable<ObjectStorageItem>, dataSourceHelper: DataSourceHelper);
	    createCalculatedField(dataMember: string): CalculatedField;
	    addAction: IAction;
	    removeAction: IAction;
	    getActions(context: any): IAction<any>[];
	    beforeItemsFilled(request: IPathRequest, items: IDataMemberInfo[]): boolean;
	    afterItemsFilled(request: IPathRequest, items: IDataMemberInfo[]): void;
	    addCalculatedField: (fullPath: string) => CalculatedField;
	    removeCalculatedField: (fullPath: string) => void;
	}

}
declare module DevExpress.Reporting.Designer.Data {

    import Editor = DevExpress.Analytics.Widgets.Editor;;
    import Parameter = DevExpress.Reporting.Designer.Data.Parameter;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export class ParameterExpressionAddOn extends Disposable {
	    private _editor;
	    private _parameter;
	    constructor(_editor: Editor, _parameter: ko.Observable<Parameter>);
	    switchEditors(): void;
	    isExpression: ko.Computed<boolean>;
	    imageTemplateName: string;
	}

}
declare module DevExpress.Reporting.Designer.Tools {
    import Parameter = DevExpress.Reporting.Designer.Data.Parameter;;
    import ObjectItem = DevExpress.Reporting.Designer.Data.ObjectItem;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;;

    import ICollectionEditorOptions = DevExpress.Analytics.Widgets.Internal.ICollectionEditorOptions;; class SettingsAreaModel {
	    private _parameter;
	    getInfo(): any[];
	    constructor(_parameter: Parameter);
	    isPropertyVisible(propertyName: string): boolean;
	    valueSourceSettingsType: ko.Observable<string>;
	    valueSourceSettings: ko.Observable<ObjectItem> | ko.Computed<ObjectItem>;
	}
	export class ParametersDialogBase extends Disposable {
	    protected _currentReport: ReportViewModel;
	    dispose(): void;
	    protected onSubmit(): void;
	    protected readonly undoEngine: UndoEngine;
	    private _undoEngine;
	    private _isSubmited;
	    private _createButton;
	    constructor(_currentReport: ReportViewModel);
	    protected selectParameter(parameter: Parameter): void;
	    show(parameter?: Parameter): void;
	    _onStart(parameter: Parameter): void;
	    close(): void;
	    submit(): void;
	    buttons: {
	        toolbar: string;
	        location: string;
	        widget: string;
	        options: {
	            text: string;
	            onClick: () => void;
	        };
	    }[];
	    _propertiesGrid: ObjectProperties;
	    _settingsGrid: ObjectProperties;
	    _selectedParameter: ko.Observable<Parameter>;
	    _selectedSettings: ko.Computed<SettingsAreaModel>;
	    visible: ko.Observable<boolean>;
	    contentTemplate: string;
	    container: (element: HTMLElement) => JQuery<HTMLElement>;
	}
	export class AddParameterDialog extends ParametersDialogBase {
	    protected _createParameter(parameters?: Parameter[]): Parameter;
	    onSubmit(): void;
	    _onStart(parameter?: Parameter): void;
	    popupCss: string;
	    title: any;
	    width: string | number;
	    height: number;
	    contentTemplate: string;
	}
	export class EditParametersDialog extends AddParameterDialog {
	    dispose(): void;
	    _parametersListOptions: ICollectionEditorOptions;
	    constructor(report: ReportViewModel);
	    onSubmit(): void;
	    width: string;
	    height: number;
	    popupCss: string;
	    title: any;
	    contentEmptyAreaPlaceHolder: any;
	    contentTemplate: string;
	    contentVisible: ko.Computed<boolean>;
	}
	export {};

}
declare module DevExpress.Reporting.Designer.Internal {
    import AddParameterDialog = DevExpress.Reporting.Designer.Tools.AddParameterDialog;
    import EditParametersDialog = DevExpress.Reporting.Designer.Tools.EditParametersDialog;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import Parameter = DevExpress.Reporting.Designer.Data.Parameter;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IAction = DevExpress.Analytics.Utils.IAction;;
    import IActionsProvider = DevExpress.Analytics.Internal.IActionsProvider;
    import IItemsExtender = DevExpress.Analytics.Internal.IItemsExtender;;
	export class ParametersViewModel extends Disposable implements IActionsProvider, IItemsExtender {
	    _addParametersDialog: AddParameterDialog;
	    _editParametersDialog: EditParametersDialog;
	    constructor(report: ReportViewModel);
	    parameters: ko.ObservableArray<Parameter>;
	    addAction: {
	        clickAction: () => void;
	        imageClassName: string;
	        imageTemplateName: string;
	        text: string;
	        displayText: () => any;
	    };
	    removeAction: {
	        clickAction: (item: any) => void;
	        imageClassName: string;
	        imageTemplateName: string;
	        text: string;
	        displayText: () => any;
	    };
	    editAction: {
	        clickAction: (item: any) => void;
	        imageClassName: string;
	        imageTemplateName: string;
	        text: string;
	        displayText: () => any;
	    };
	    getActions(context: any): IAction<any>[];
	    add: () => void;
	    remove: (parameter: Parameter) => void;
	    edit: (parameter: Parameter) => void;
	    beforeItemsFilled(request: IPathRequest, items: IDataMemberInfo[]): boolean;
	    afterItemsFilled(request: IPathRequest, items: IDataMemberInfo[]): void;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import Size = DevExpress.Analytics.Elements.Size;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
    import GlyphStyle = DevExpress.Reporting.Viewer.Editing.GlyphStyle;;
	export function getDefaultCheckSize(checkState?: GlyphStyle): Size;
	export function _getCustomGlyphsInfo(type: string): ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var glyphAlignment: ISerializationInfo;
	export var glyphOptionsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Controls {
    import ImageSource = DevExpress.Reporting.ImageSource;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;;

    import Size = DevExpress.Analytics.Elements.Size;;
	export interface ICheckBoxCustomGlyphs {
	    Checked: ko.Observable<ImageSource>;
	    Unchecked: ko.Observable<ImageSource>;
	    Indeterminate: ko.Observable<ImageSource>;
	}
	export class GlyphOptions extends Disposable implements ISerializableModel {
	    static unitProperties: string[];
	    constructor(model: {}, serializer?: IModelSerializer);
	    getInfo: ko.Observable<ISerializationInfoArray>;
	    alignment: ko.Observable<string> | ko.Computed<string>;
	    size: Size;
	    style: ko.Observable<string> | ko.Computed<string>;
	    customGlyphs: ICheckBoxCustomGlyphs;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
    import GlyphOptions = DevExpress.Reporting.Designer.Controls.GlyphOptions;;
    import XRTextControlSurfaceBase = DevExpress.Reporting.Designer.Controls.XRTextControlSurfaceBase;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;

	export class XRCheckBoxViewModel extends XRControlViewModel {
	    static unitProperties: any[];
	    static _patchModel(model: any): any;
	    constructor(control: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    checked: ko.Observable<boolean> | ko.Computed<boolean>;
	    checkBoxState: ko.Observable<string> | ko.Computed<string>;
	    glyphAlignment: ko.Observable<string> | ko.Computed<string>;
	    glyphOptions: GlyphOptions;
	}
	export class XRCheckBoxSurface extends XRTextControlSurfaceBase<XRCheckBoxViewModel> {
	    constructor(control: XRCheckBoxViewModel, context: ISurfaceContext);
	    borderCss: any;
	    checkStateClass: ko.Computed<string>;
	    checkStateStyleIcon: ko.Computed<string>;
	    customGlyphStyleCss: ko.Computed<any>;
	    checkStateWidth: ko.Observable<number> | ko.Computed<number>;
	    checkStateHeight: ko.Observable<number> | ko.Computed<number>;
	    textWidth: ko.Computed<number>;
	    leftPadding: any;
	    checkStateWidthContainer: ko.Observable<string> | ko.Computed<string>;
	    visibleText: ko.Observable<boolean> | ko.Computed<boolean>;
	    isGlyphAlignmentNear: ko.Computed<boolean>;
	}

}
declare module DevExpress.Reporting.Designer.Localization {
	interface ITranslationResult {
	    name: string;
	    texts: string[];
	} class TranslationFactory {
	    private _services;
	    getFirstRegistered(): string;
	    getTranslations(texts: string[], destinationLanguage: string): JQuery.Deferred<ITranslationResult[], any, any>;
	    translate(name: string, texts: string[], destinationLanguage: string): JQuery.Promise<ITranslationResult, any, any>;
	    register(name: string, service: ITranslationService): void;
	    unregister(name: string): void;
	}
	export var _translationFactory: TranslationFactory;
	export interface ITranslationService {
	    onRequest: (texts: string[], destinationLanguage: string) => JQueryAjaxSettings;
	    onResponse: (result: any) => string[];
	}
	export function registerTranslationService(name: string, service: ITranslationService): void;
	export function unregisterTranslationService(name: string): void;
	export {};

}
declare module DevExpress.Reporting.Designer.Widgets {
    import Editor = DevExpress.Analytics.Widgets.Editor;;

    import DataSource =  DevExpress.data.DataSource ;;
	export class DataSourceSelectBox extends Editor {
	    static createDataSource(values: any): DataSource;
	    getValues(): ko.Computed<DataSource>;
	    dataSource: ko.Computed<DataSource>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export class TranslateHelper extends Disposable {
	    private _maxInterval;
	    private _restoreDictionary;
	    private _timeouts;
	    private _getElement;
	    dispose(): void;
	    move(elementClassName: string, sign?: string, transform?: string, transition?: string): void;
	    reset(elementClassName: string): void;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export class ControlScrollingTool extends Disposable {
	    private _rootElement;
	    private _viewport;
	    constructor(_rootElement: Element);
	    scrollToControl(surface: any): void;
	    private _getScrollOffset;
	    dispose(): void;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import TranslateHelper = DevExpress.Reporting.Designer.Internal.TranslateHelper;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;
    import getResizableOptions = DevExpress.Analytics.Internal.getResizableOptions;;
    import ControlScrollingTool = DevExpress.Reporting.Designer.Internal.ControlScrollingTool;;
	export interface ILocalizationItem {
	    component: XRControlViewModel;
	    defaultText: ko.Observable<string>;
	    localizedText: ko.Observable<string>;
	    visible: () => boolean;
	    dispose: () => void;
	}
	export interface ILocalizationEditorOptions {
	    controlScrollingTool: ControlScrollingTool;
	    selection: SurfaceSelection;
	    report: () => ReportViewModel;
	}
	export class LocalizationEditor extends Disposable {
	    private _options;
	    private _selectionDisabled;
	    private _autoScrollingSubscription;
	    private _uncollapseParent;
	    private _subscribeFocused;
	    private _getDefaultLanguageItems;
	    dispose(): void;
	    private _isLocalizableControl;
	    _localizableControls(): any;
	    applyLocalization(serviceName: string): void;
	    clearLocalization(): void;
	    getRegisteredService(): string;
	    isDefaultLanguage(): boolean;
	    _updateLocalizationItems(): void;
	    constructor(_options: ILocalizationEditorOptions);
	    start(): void;
	    finish(): void;
	    onSelectionChanged(e: {
	        addedItems: ILocalizationItem[];
	    }): void;
	    onItemGotFocus(e: {
	        model: ILocalizationItem;
	    }): void;
	    switchSearchBox(): void;
	    defaultLanguageText: () => any;
	    currentLanguageText: () => any;
	    localizationItems: ko.ObservableArray<ILocalizationItem>;
	    textToSearch: ko.Observable<string>;
	    language: ko.Observable<string>;
	    searchPlaceholder: () => any;
	    searchBox: ko.Observable<any>;
	    availableCultures: any;
	    isSearching: ko.Observable<boolean>;
	    getResizableOptions: typeof getResizableOptions;
	    translateHelper: TranslateHelper;
	    isVisible: ko.Observable<boolean>;
	    width: ko.Observable<number>;
	    showLoadIndicator: ko.Observable<boolean>;
	    getLoadPanelPosition: (element: any) => JQuery<any>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import IDisplayNameProvider = DevExpress.Analytics.Utils.IDisplayNameProvider;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;

	export class DisplayNameProvider implements IDisplayNameProvider {
	    private _fieldsProvider;
	    private _dataSourceHelper;
	    private _rootDS;
	    private _requests;
	    private _getRequest;
	    private _ignoreDisplayNameRequest;
	    private _getDisplayNameRequest;
	    private _createRequestInfo;
	    private _getFieldDisplayName;
	    private _getDisplayName;
	    private _getRealName;
	    private _getRealNameRequest;
	    constructor(_fieldsProvider: IItemsProvider, _dataSourceHelper: DataSourceHelper, _rootDS: ko.Observable<ObjectStorageItem>);
	    getDisplayName(dataSource: ObjectStorageItem, dataMember: string, dataMemberOffset?: string, includeDataSourceName?: boolean): JQuery.Promise<string, any, any>;
	    getDisplayNameByPath(path: string, dataMember: string): JQueryPromise<string>;
	    getRealName(path: string, dataMember: string): JQueryPromise<string>;
	    private _getByPath;
	    dispose(): void;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import getUsefulReportWidth = DevExpress.Reporting.Designer.Internal.getUsefulReportWidth;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import Size = DevExpress.Analytics.Elements.Size;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import ISize = DevExpress.Analytics.Elements.ISize;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
	export class FieldListDragDropHelper {
	    private _dataBindingMode;
	    private _size?;
	    constructor(_dataBindingMode: string, _size?: Size);
	    private _createTable;
	    private _getItemsFromList;
	    private _getFirstLevelItems;
	    createTableFromListSource(treeListItem: TreeListItemViewModel, parent: any): JQuery.Promise<IElementViewModel, any, any>;
	    createTableFromItems(treeListItems: TreeListItemViewModel[], parent: any): JQuery.Promise<IElementViewModel, any, any>;
	}
	export var memberControlsMap: {
	    'Array': {
	        drop: (treeListItem: TreeListItemViewModel, dropTargetControl: ElementViewModel, dataBindingMode: any) => any;
	        size: (surface?: ISurfaceContext) => ISize;
	    };
	    'Bool': {
	        drop: (treeListItem: TreeListItemViewModel, dropTargetControl: ElementViewModel, dataBindingMode: any) => any;
	        size: (surface?: ISurfaceContext) => ISize;
	    };
	    'List': {
	        drop: (treeListItem: TreeListItemViewModel, dropTargetControl: ElementViewModel, dataBindingMode: any, size?: Size) => JQueryPromise<IElementViewModel>;
	        size: typeof getUsefulReportWidth;
	        adjustDropTarget: (dropTarget: ISelectionTarget) => any;
	    };
	    'MultiList': {
	        drop: (treeListItem: TreeListItemViewModel, dropTargetControl: ElementViewModel, dataBindingMode: any, size?: Size) => JQueryPromise<IElementViewModel>;
	        size: typeof getUsefulReportWidth;
	        adjustDropTarget: (dropTarget: ISelectionTarget) => any;
	    };
	    'Default': {
	        drop: (treeListItem: TreeListItemViewModel, dropTargetControl: ElementViewModel, dataBindingMode: any) => any;
	        size: (surface?: ISurfaceContext) => ISize;
	    };
	};

}
declare module DevExpress.Reporting.Designer.Internal {
	/// <reference types="jqueryui" />




    import ReportSurface = DevExpress.Reporting.Designer.Controls.ReportSurface;;
    import IComponentAddedEventArgs = DevExpress.Reporting.Designer.Utils.IComponentAddedEventArgs;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;
    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;

	export class FieldListDragDropHandler extends DragDropHandler {
	    private _canAddItems;
	    private _undoEngine;
	    private _dataSources;
	    private _getKey;
	    private _isIcon;
	    private _setDragHelperContent;
	    private _getDropTarget;
	    private _needToChangeHelperContent;
	    private _updateInnerControlSize;
	    private _addControl;
	    private _isDefaultBindingAssigned;
	    canDrop(dropTarget: any, controlModel: any, metaData: any): boolean;
	    constructor(_canAddItems: ko.Computed<boolean>, surface: ko.Observable<ReportSurface> | ko.Computed<ReportSurface>, selection: SurfaceSelection, _undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper: SnapLinesHelper, dragHelperContent: DragHelperContent, _dataSources: ko.ObservableArray<IDataSourceInfo>, onComponentAdded?: any);
	    drag(event: JQueryEventObject, ui: JQueryUI.DraggableEventUIParams): void;
	    doStopDrag(ui: any, draggable: any): void;
	    onComponentAdded: (e: IComponentAddedEventArgs) => void;
	    dataBindingMode: ko.Computed<string>;
	}

}
declare module DevExpress.Reporting.Designer.Controls {

    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
	export interface ISignatureOptions {
	    displayDocumentSignature: ko.Observable<boolean>;
	    imageDisplayMode: ko.Observable<string>;
	    showSignatureDate: ko.Observable<boolean>;
	    showCertificateName: ko.Observable<boolean>;
	    showLocation: ko.Observable<boolean>;
	    showSignatureReason: ko.Observable<boolean>;
	    showDistinguishedName: ko.Observable<boolean>;
	    showCaptions: ko.Observable<boolean>;
	    isPropertyDisabled: (propertyName: string) => boolean;
	    getInfo: () => ISerializationInfoArray;
	}
	export class XRPdfSignatureModel extends XRControlViewModel {
	    private _displayDocumentSignatureSubscribed;
	    signatureOptions: ISignatureOptions;
	    subscribeSignature(allControls: () => XRPdfSignatureModel[]): void;
	}
	export class XRPdfSignatureSurface extends XRControlSurface {
	    getSignatureInformationString(control: XRPdfSignatureModel): string;
	    constructor(control: XRPdfSignatureModel, context: ISurfaceContext);
	    readonly certificateName: any;
	    showSkeleton: ko.Computed<boolean>;
	    visibleText: ko.Computed<boolean>;
	    visibleImage: ko.Computed<boolean>;
	    hideImage: ko.Computed<boolean>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import AnalyticDesignControlsHelper = DevExpress.Analytics.Internal.AnalyticDesignControlsHelper;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
	export class DesignControlsHelper extends AnalyticDesignControlsHelper {
	    private _xrPdfSignatureCollection;
	    dispose(): void;
	    getNameProperty(model: any): any;
	    protected _setName(value: any): void;
	    protected _setDefaultText(value: any): void;
	    protected _getNamePrefix(value: any): any;
	    constructor(target: ReportViewModel, selection: SurfaceSelection);
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;
    import IItemsExtender = DevExpress.Analytics.Internal.IItemsExtender;;
	export class DataSourceItemsExtender implements IItemsExtender {
	    private _dataSources;
	    constructor(dataSources: ko.ObservableArray<IDataSourceInfo>);
	    beforeItemsFilled(request: IPathRequest, items: IDataMemberInfo[]): boolean;
	    afterItemsFilled(request: IPathRequest, items: IDataMemberInfo[]): void;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import IItemsExtender = DevExpress.Analytics.Internal.IItemsExtender;;
	export class ChartFieldListExtender implements IItemsExtender {
	    beforeItemsFilled(request: IPathRequest, items: IDataMemberInfo[]): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
	export enum ErrorSource {
	    ReportCreation = 0,
	    ReportLayout = 1,
	    ReportScripts = 2,
	    All = 3
	}
	export enum ErrorType {
	    Error = 0,
	    Warning = 1,
	    Information = 2
	}
	export interface IErrorModel {
	    code: string;
	    description: string;
	    errorSource: ErrorSource;
	    errorType: ErrorType;
	    message: string;
	    controlName?: string;
	}
	export interface IErrorProvider {
	    errors: ko.ObservableArray<IErrorModel>;
	    collectErrors(): void;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import DesignControlsHelper = DevExpress.Reporting.Designer.Internal.DesignControlsHelper;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import IDesignControlsHelper = DevExpress.Analytics.Internal.IDesignControlsHelper;
    import IDisplayedObject = DevExpress.Analytics.Internal.IDisplayedObject;;
	export class ReportDesignerControlsHelper extends Disposable implements IDesignControlsHelper {
	    constructor(helper: ko.Computed<DesignControlsHelper>);
	    getControls: (target: any) => ko.ObservableArray<IDisplayedObject>;
	    allControls: any;
	    getControlByName: (name: string) => IDisplayedObject;
	}

}
declare module DevExpress.Reporting.Designer.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import ErrorType = DevExpress.Reporting.Designer.Internal.ErrorType;
    import IErrorModel = DevExpress.Reporting.Designer.Internal.IErrorModel;
    import IErrorProvider = DevExpress.Reporting.Designer.Internal.IErrorProvider;;
    import ControlScrollingTool = DevExpress.Reporting.Designer.Internal.ControlScrollingTool;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;;
    import ReportDesignerControlsHelper = DevExpress.Reporting.Designer.Internal.ReportDesignerControlsHelper;;
	interface IPositionX<T> {
	    left?: ko.Subscribable<T>;
	    right?: ko.Subscribable<T>;
	    height?: ko.Subscribable<T>;
	}
	export interface IErrorPanelViewModelOptions {
	    controlScrollingTool?: ControlScrollingTool;
	    controlsHelper?: ReportDesignerControlsHelper;
	    selection?: SurfaceSelection;
	    position?: IPositionX<number>;
	    undoEngine?: () => UndoEngine;
	    onClick?: () => void;
	}
	export class ErrorPanelViewModel extends Disposable {
	    private _offset;
	    private _height;
	    private _controlScrollingTool;
	    private _controlsHelper;
	    private _selection;
	    private _position;
	    private _errorSource;
	    private _choosenTypes;
	    private _filterValue;
	    private _getUndoEngine;
	    private _onClick;
	    private _latestChangeSet;
	    private _collectErrorButtonDisabled;
	    private _createMessage;
	    private _expandParentBands;
	    _dataGridOptions: any;
	    collapsed: ko.Observable<boolean>;
	    position: ko.Observable<any>;
	    _errorList: ko.ObservableArray<IErrorModel>;
	    _providers: IErrorProvider[];
	    _subscriptions: ko.Subscription[];
	    _errorMessage: ko.Computed<string>;
	    _warningMessage: ko.Computed<string>;
	    _informationMessage: ko.Computed<string>;
	    clear(): void;
	    navigateToItem(name: string): void;
	    _resizableOptions: any;
	    getNotificationTemplate(): "dxrd-svg-errorPanel-notification" | "dxrd-svg-errorPanel-notification_empty";
	    getTitleMessage(): string;
	    assignErrors(): void;
	    subscribeProvider(provider: IErrorProvider): void;
	    collectErrors(): void;
	    toggleCollapsed(): void;
	    createDataGridOptions(undoEngine: () => UndoEngine): void;
	    getIconTemplateName(errorType: ErrorType): string;
	    constructor(options: IErrorPanelViewModelOptions);
	}
	export {};

}
declare module DevExpress.Reporting.Designer.Internal {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import IErrorModel = DevExpress.Reporting.Designer.Internal.IErrorModel;
    import IErrorProvider = DevExpress.Reporting.Designer.Internal.IErrorProvider;;
	export class DesignerErrorProvider extends Disposable implements IErrorProvider {
	    private _report;
	    errors: ko.ObservableArray<IErrorModel>;
	    collectErrors(): any;
	    constructor(_report: ReportViewModel);
	}

}
declare module DevExpress.Reporting.Designer.Internal {

    import IErrorModel = DevExpress.Reporting.Designer.Internal.IErrorModel;
    import IErrorProvider = DevExpress.Reporting.Designer.Internal.IErrorProvider;;
	export class RuntimeErrorProvider implements IErrorProvider {
	    errors: ko.ObservableArray<IErrorModel>;
	    collectErrors(): void;
	}

}
declare module DevExpress.Reporting.Designer {
    import WizardRunner = DevExpress.Reporting.Designer.Internal.WizardRunner;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;
    import ReportSurface = DevExpress.Reporting.Designer.Controls.ReportSurface;;
    import NavigateByReports = DevExpress.Reporting.Designer.Tools.NavigateByReports;;
    import IKeyValuePair = DevExpress.Reporting.IKeyValuePair;;
    import ReportToolboxDragDropHandler = DevExpress.Reporting.Designer.Internal.ReportToolboxDragDropHandler;;
    import CalculatedFieldsSource = DevExpress.Reporting.Designer.Internal.CalculatedFieldsSource;;
    import ParametersViewModel = DevExpress.Reporting.Designer.Internal.ParametersViewModel;;
    import ReportWizard = DevExpress.Reporting.Designer.Wizard.ReportWizard;;
    import LocalizationEditor = DevExpress.Reporting.Designer.Internal.LocalizationEditor;;
    import ScriptsEditor = DevExpress.Reporting.Designer.Internal.ScriptsEditor;;
    import SaveAsReportDialog = DevExpress.Reporting.Designer.Tools.SaveAsReportDialog;;
    import SaveReportDialog = DevExpress.Reporting.Designer.Tools.SaveReportDialog;;
    import OpenReportDialog = DevExpress.Reporting.Designer.Tools.OpenReportDialog;;
    import StyleModel = DevExpress.Reporting.Designer.Controls.StyleModel;;
    import FormattingRule = DevExpress.Reporting.Designer.Controls.FormattingRule;;
    import DisplayNameProvider = DevExpress.Reporting.Designer.Internal.DisplayNameProvider;;
    import ReportItemsProvider = DevExpress.Reporting.Designer.Internal.ReportItemsProvider;;
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import FieldListDragDropHandler = DevExpress.Reporting.Designer.Internal.FieldListDragDropHandler;;
    import XRChartSurface = DevExpress.Reporting.Designer.Controls.XRChartSurface;;
    import INavigateTab = DevExpress.Reporting.Designer.Tools.INavigateTab;;
    import IReportDesignerCustomizationHandler = DevExpress.Reporting.Designer.Utils.IReportDesignerCustomizationHandler;;
    import FieldListDataSourcesHelper = DevExpress.Reporting.Designer.Internal.FieldListDataSourcesHelper;;
    import DesignControlsHelper = DevExpress.Reporting.Designer.Internal.DesignControlsHelper;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;
    import FieldListProvider = DevExpress.Analytics.Internal.FieldListProvider;
    import IActionsProvider = DevExpress.Analytics.Internal.IActionsProvider;
    import IDesignerModel = DevExpress.Analytics.Internal.IDesignerModel;
    import IItemsExtender = DevExpress.Analytics.Internal.IItemsExtender;
    import IDesignerPart = DevExpress.Analytics.Internal.IDesignerPart;
    import ObjectExplorerProvider = DevExpress.Analytics.Internal.ObjectExplorerProvider;
    import INamedValue = DevExpress.Analytics.Internal.INamedValue;;
    import DataSourceWizard = DevExpress.Analytics.Wizard.DataSourceWizard;
    import MultiQueryDataSourceWizard = DevExpress.Analytics.Wizard.MultiQueryDataSourceWizard;
    import IDataSourceWizardConnectionStrings = DevExpress.Analytics.Wizard.IDataSourceWizardConnectionStrings;;
    import StylesHelper = DevExpress.Reporting.StylesHelper;;
    import ErrorPanelViewModel = DevExpress.Reporting.Designer.Internal.ErrorPanelViewModel;;
    import ControlScrollingTool = DevExpress.Reporting.Designer.Internal.ControlScrollingTool;;
    import DesignerErrorProvider = DevExpress.Reporting.Designer.Internal.DesignerErrorProvider;;
    import RuntimeErrorProvider = DevExpress.Reporting.Designer.Internal.RuntimeErrorProvider;;
	export interface IReportDesignerRootContext extends IDesignerModel {
	    fullScreen: ko.Computed<boolean>;
	    canAddItems: ko.Computed<boolean>;
	    _wizardRunner: WizardRunner;
	    model: ko.Observable<ReportViewModel>;
	    surface: ko.Observable<ReportSurface>;
	    navigateByReports: NavigateByReports;
	    reportUrls: ko.ObservableArray<IKeyValuePair<string>>;
	    fieldListItemsExtenders: ko.Observable<IItemsExtender[]>;
	    validationMode: ko.Computed<boolean>;
	    drawCrossbandContent: ko.Observable<boolean>;
	    rootStyle: string;
	    toolboxDragHandler: ReportToolboxDragDropHandler;
	    isDirty: ko.Computed<boolean>;
	    calculatedFieldsSource: ko.Computed<CalculatedFieldsSource>;
	    parameters: ko.Computed<ParametersViewModel>;
	    reportPreviewModel: any;
	    fieldListActionProviders: IActionsProvider[];
	    wizard: ReportWizard;
	    dataSourceWizard: DataSourceWizard;
	    multiQueryDataSourceWizard: MultiQueryDataSourceWizard;
	    localizationEditor: LocalizationEditor;
	    addOns: ko.ObservableArray<IDesignerPart>;
	    scriptsEditor: ScriptsEditor;
	    state: any;
	    events: ko.Computed<any[]>;
	    gotoEvent: (functionName: any, eventName: any, model: any) => void;
	    saveReportDialog: SaveAsReportDialog;
	    saveReportDialogLight: SaveReportDialog;
	    connections: IDataSourceWizardConnectionStrings;
	    availableDataSources: IDataSourceInfo[];
	    openReportDialog: OpenReportDialog;
	    styles: ko.Computed<ko.ObservableArray<StyleModel>>;
	    formattingRuleSheet: ko.Computed<ko.ObservableArray<FormattingRule>>;
	    reportExplorerProvider: ObjectExplorerProvider;
	    designMode: ko.Observable<boolean> | ko.Computed<boolean>;
	    displayNameProvider: ko.Computed<DisplayNameProvider>;
	    getDisplayNameByPath: (path: string, value: string) => JQueryPromise<string>;
	    fieldListProvider: ko.Computed<FieldListProvider>;
	    dataBindingsProvider: ko.Computed<FieldListProvider>;
	    fieldListDataSources: ko.ObservableArray<IDataSourceInfo>;
	    reportItemsProvider: ko.Computed<ReportItemsProvider>;
	    expressionDisplayNameProvider: ko.Computed<DisplayNameProvider>;
	    dataSourceHelper: ko.Computed<DataSourceHelper>;
	    selectedPath: ko.Observable<string> | ko.Computed<string>;
	    controls: ko.Computed<INamedValue[]>;
	    bands: ko.Computed<INamedValue[]>;
	    isMenuCollapsed: ko.Observable<boolean>;
	    chartDataSources: ko.Computed<Array<{
	        displayName: string;
	        value: any;
	    }>>;
	    getControls: (target: any) => ko.Computed<ko.Computed<INamedValue[]>>;
	    actionStorage: any;
	    fieldDragHandler: FieldListDragDropHandler;
	    runChartDesigner: (chart: XRChartSurface) => void;
	    zoomStep: ko.Observable<number> | ko.Computed<number>;
	    onViewPortScroll: (viewPort: HTMLElement) => void;
	    updateSurfaceSize: () => void;
	    openReport: (url: string) => void;
	    showPreview: () => void;
	    getTabs: () => INavigateTab[];
	    closeTab: (tab: INavigateTab, force?: boolean) => void;
	    localizationMode: ko.Observable<boolean>;
	    errorPanelViewModel: ErrorPanelViewModel;
	    controlScrollingTool: ControlScrollingTool;
	    afterRender?: () => void;
	}
	export interface IDesignerContextOptionsInitOptions {
	    availableDataSources: IDataSourceInfo[];
	    state?: any;
	}
	export interface IDesignerContextOptions {
	    initializeOptions: IDesignerContextOptionsInitOptions;
	    selection: SurfaceSelection;
	    report?: ReportViewModel;
	    knownEnums?: any;
	    url?: string | ko.Observable<string> | ko.Computed<string>;
	    data?: any;
	    dataSourceRefs?: any;
	    designerCallbacks: IReportDesignerCustomizationHandler;
	}
	export interface IReportDesignerContext {
	    report: ReportViewModel;
	    url: ko.Observable<string> | ko.Computed<string>;
	    surface: ReportSurface;
	    dataSourceHelper: DataSourceHelper;
	    parameters: ParametersViewModel;
	    reportErrorProvider: DesignerErrorProvider;
	    runtimeErrorProvider: RuntimeErrorProvider;
	    fieldListDataSourceHelper: FieldListDataSourcesHelper;
	    calcFieldsSource: CalculatedFieldsSource;
	    fieldListItemsExtenders: IItemsExtender[];
	    fieldListProvider: FieldListProvider;
	    reportItemsProvider: ReportItemsProvider;
	    dataBindingsProvider: FieldListProvider;
	    chartValueBindingProvider: FieldListProvider;
	    displayNameProvider: DisplayNameProvider;
	    expressionDisplayNameProvider: DisplayNameProvider;
	    controlsHelper: DesignControlsHelper;
	    stylesHelper: StylesHelper;
	    state: () => any;
	}
	export class ReportDesignerContext extends Disposable implements IReportDesignerContext {
	    state: () => any;
	    url: ko.Observable<string> | ko.Computed<string>;
	    report: ReportViewModel;
	    reportErrorProvider: DesignerErrorProvider;
	    runtimeErrorProvider: RuntimeErrorProvider;
	    surface: ReportSurface;
	    dataSourceHelper: DataSourceHelper;
	    parameters: ParametersViewModel;
	    fieldListDataSourceHelper: FieldListDataSourcesHelper;
	    calcFieldsSource: CalculatedFieldsSource;
	    fieldListItemsExtenders: IItemsExtender[];
	    fieldListProvider: FieldListProvider;
	    reportItemsProvider: ReportItemsProvider;
	    dataBindingsProvider: FieldListProvider;
	    chartValueBindingProvider: FieldListProvider;
	    displayNameProvider: DisplayNameProvider;
	    expressionDisplayNameProvider: DisplayNameProvider;
	    controlsHelper: DesignControlsHelper;
	    stylesHelper: StylesHelper;
	    private _getChartAvailableSources;
	    getInfo(): {
	        propertyName: string;
	        modelName: string;
	    }[];
	    isModelReady(): boolean;
	    dispose(): void;
	    constructor(options: IDesignerContextOptions);
	}

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var pivotGridAppearances: ISerializationInfo;
	export var prefilter: ISerializationInfo;
	export var pivotGridOptions: ISerializationInfoArray;
	export var pivotGridSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Controls {
    import IDisplayedValue = DevExpress.Analytics.Utils.IDisplayedValue;;
	export var barCodesTypes: Array<IDisplayedValue>;

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var autoModule: ISerializationInfo;
	export var barCodeOrientation: ISerializationInfo;
	export var moduleInfo: ISerializationInfo;
	export var showText: ISerializationInfo;
	export var symbology: ISerializationInfo;
	export var barcodeFake: ISerializationInfo;
	export var alignment: ISerializationInfo;
	export var barCodesMap: {
	    [key: string]: ISerializationInfoArray;
	};
	export var barcodeSerializationsInfo: ISerializationInfoArray;
	export var popularPropertiesBarCode: string[];

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var crossBandLineWidth: ISerializationInfo;
	export var startPoint: ISerializationInfo;
	export var endPoint: ISerializationInfo;
	export var startBand: ISerializationInfo;
	export var endBand: ISerializationInfo;
	export var borderDashStyleCrossband: ISerializationInfo;
	export var width: ISerializationInfo;
	export var crossBandBoxControlSerializationsInfo: ISerializationInfoArray;
	export var crossBandLineControlSerializationsInfo: ISerializationInfoArray;
	export var popularPropertiesCrossLine: string[];

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export var cellVerticalSpacing: ISerializationInfo;
	export var cellHorizontalSpacing: ISerializationInfo;
	export var cellWidth: ISerializationInfo;
	export var cellHeight: ISerializationInfo;
	export var cellSizeMode: ISerializationInfo;
	export var characterCombFont: ISerializationInfo;
	export var characterCombBorders: ISerializationInfo;
	export var characterCombBorderDashStyle: ISerializationInfo;
	export var characterCombSerializationsInfo: ISerializationInfo[];

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var checkState: ISerializationInfo;
	export var checked: ISerializationInfo;
	export var glyphOptions: ISerializationInfo;
	export var checkEditOptions: ISerializationInfo;
	export var checkboxSerializationsInfo: ISerializationInfoArray;
	export var popularPropertiesCheckBox: string[];

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var lineDirection: ISerializationInfo;
	export var lineSerializationsInfo: ISerializationInfoArray;
	export var popularPropertiesLine: string[];

}
declare module DevExpress.Reporting.Designer.Controls {
	export var spartlineTypes: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[];

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var valueMember: ISerializationInfo;
	export var sparklineViewMap: {
	    'Line': ISerializationInfoArray;
	    'Bar': ISerializationInfoArray;
	    'WinLoss': ISerializationInfoArray;
	    'Area': ISerializationInfoArray;
	};
	export var valueRange: ISerializationInfo;
	export var sparklineFake: ISerializationInfo;
	export var sparklineSerializationsInfo: ISerializationInfoArray;
	export var popularPropertiesSparkline: string[];

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;
    import IDisplayedValue = DevExpress.Analytics.Utils.IDisplayedValue;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
	export var circularValues: Array<IDisplayedValue>;
	export var linearValues: Array<IDisplayedValue>;
	export class XRGaugeViewModel extends XRControlViewModel {
	    static bindings: string[];
	    constructor(model: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    getInfo(): ISerializationInfoArray;
	    viewType: ko.Observable<string> | ko.Computed<string>;
	    viewStyle: ko.Observable<string> | ko.Computed<string>;
	}

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var actualValue: ISerializationInfo;
	export var maximum: ISerializationInfo;
	export var minimum: ISerializationInfo;
	export var tickmarkCount: ISerializationInfo;
	export var targetValue: ISerializationInfo;
	export var viewStyle: ISerializationInfo;
	export var viewTheme: ISerializationInfo;
	export var viewType: ISerializationInfo;
	export var xrGaugeSerializationInfo: ISerializationInfoArray;
	export var popularPropertiesGauge: string[];

}
declare module DevExpress.Reporting.Designer.Bands.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var groupUnion: ISerializationInfo;
	export var groupFooterUnion: ISerializationInfo;
	export var sortingSummary: ISerializationInfo;
	export var groupHeaderBandSerializationInfo: ISerializationInfoArray;
	export var groupFooterBandSerializationInfo: ISerializationInfoArray;
	export var popularPropertiesGroupFooter: string[];
	export var popularPropertiesGroupHeader: string[];

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
	export class XRPageInfoSurface extends XRControlSurface {
	    constructor(control: XRPageInfoViewModel, context: ISurfaceContext);
	}
	export class XRPageInfoViewModel extends XRControlViewModel {
	    constructor(model: any, parent: ElementViewModel, serializer?: ModelSerializer);
	}
	export var pageInfoValuesMap: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[];

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var pageInfo: ISerializationInfo;
	export var startPageNumber: ISerializationInfo;
	export var runningBand: ISerializationInfo;
	export var pageInfoSerializationsInfo: ISerializationInfoArray;
	export var popularPropertiesPageInfo: string[];

}
declare module DevExpress.Reporting.Designer.Bands.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var printOn: ISerializationInfo;
	export var pageBandSerializationInfoPageHeader: ISerializationInfoArray;
	export var pageBandSerializationInfo: ISerializationInfoArray;
	export var popularPropertiesPageHeader: string[];
	export var popularPropertiesPageFooter: string[];

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var weight: ISerializationInfo;
	export var rowSpan: ISerializationInfo;
	export var tableCellSerializationsInfo: ISerializationInfoArray;
	export var popularPropertiesTableCell: string[];

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var segmentWidth: ISerializationInfo;
	export var zipCodeSerializationInfo: ISerializationInfoArray;
	export var popularPropertiesZipCode: string[];

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var processHiddenCellMode: ISerializationInfo;
	export var tableSerializationsInfo: ISerializationInfoArray;
	export var popularPropertiesTable: string[];

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var rtf: ISerializationInfo;
	export var textRtf: ISerializationInfo;
	export var serializableRtfString: ISerializationInfo;
	export var newDocumentData: ISerializationInfo;
	export var richTextSerializationsInfo: ISerializationInfoArray;
	export var popularPropertiesRichText: string[];

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var chart: ISerializationInfo;
	export var controlParametersInfo: ISerializationInfo;
	export var xrChartSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var signatureOptions: ISerializationInfo;
	export var pdfSignatureInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Controls.CrossTab {
	export enum CornerHeaderDisplayMode {
	    None = 0,
	    RowFieldNames = 1,
	    ColumnFieldNames = 2
	}
	export enum CellKind {
	    None = 0,
	    Corner = 1,
	    RowHeader = 2,
	    RowTotalHeader = 3,
	    RowTotal = 4,
	    ColumnHeader = 5,
	    ColumnTotalHeader = 6,
	    ColumnTotal = 7,
	    Data = 8,
	    DataHeader = 9,
	    GrandTotal = 10,
	    EmptyHeader = 11,
	    Empty = 12
	}
	export enum TotalHeaderPosition {
	    Inner = 0,
	    Outer = 1
	}
	export enum TotalsPosition {
	    AfterData = 0,
	    BeforeData = 1
	}
	export enum DataFieldLayout {
	    InRow = 0,
	    InColumn = 1
	}

}
declare module DevExpress.Reporting.Designer.Controls.CrossTab.Metadata {
    import parseBool = DevExpress.Analytics.Utils.parseBool;;
	export var crossTabLayoutOptionsInfo: ({
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: string;
	    valuesArray: {
	        displayValue: string;
	        value: string;
	        localizationId: string;
	    }[];
	    from?: undefined;
	} | {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: boolean;
	    from: typeof parseBool;
	    valuesArray?: undefined;
	})[];
	export var crossTabLayoutOptions: {
	    propertyName: string;
	    modelName: string;
	    localizationId: string;
	    displayName: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    info: ({
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	        defaultVal: string;
	        valuesArray: {
	            displayValue: string;
	            value: string;
	            localizationId: string;
	        }[];
	        from?: undefined;
	    } | {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	        defaultVal: boolean;
	        from: typeof parseBool;
	        valuesArray?: undefined;
	    })[];
	};

}
declare module DevExpress.Reporting.Designer.Controls.CrossTab.Metadata {
    import parseBool = DevExpress.Analytics.Utils.parseBool;;
	export var crossTabPrintOptionsInfo: ({
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: string;
	    valuesArray: {
	        displayValue: string;
	        value: string;
	        localizationId: string;
	    }[];
	    from?: undefined;
	} | {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: number;
	    valuesArray?: undefined;
	    from?: undefined;
	} | {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: boolean;
	    from: typeof parseBool;
	    valuesArray?: undefined;
	})[];
	export var crossTabPrintOptions: {
	    propertyName: string;
	    modelName: string;
	    localizationId: string;
	    displayName: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    info: ({
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	        defaultVal: string;
	        valuesArray: {
	            displayValue: string;
	            value: string;
	            localizationId: string;
	        }[];
	        from?: undefined;
	    } | {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	        defaultVal: number;
	        valuesArray?: undefined;
	        from?: undefined;
	    } | {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        editor: DevExpress.Analytics.Utils.IEditorInfo;
	        defaultVal: boolean;
	        from: typeof parseBool;
	        valuesArray?: undefined;
	    })[];
	};

}
declare module DevExpress.Reporting.Designer.Controls.CrossTab.Metadata {
    import floatFromModel = DevExpress.Analytics.Utils.floatFromModel;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import parseBool = DevExpress.Analytics.Utils.parseBool;;
	export var autoSizeMode: DevExpress.Analytics.Utils.IDisplayedValue[];
	export var rowVisible: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: boolean;
	    from: typeof parseBool;
	};
	export var columnVisible: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: boolean;
	    from: typeof parseBool;
	};
	export var rowAutoHeightMode: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: string;
	    valuesArray: DevExpress.Analytics.Utils.IDisplayedValue[];
	};
	export var columnAutoWidthMode: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: string;
	    valuesArray: DevExpress.Analytics.Utils.IDisplayedValue[];
	};
	export var crossTabCellOptionsInfo: (DevExpress.Analytics.Utils.ISerializationInfo | {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: string;
	} | {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    defaultVal: boolean;
	    from: typeof parseBool;
	})[];
	export var columnIndex: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    defaultVal: number;
	    from: typeof floatFromModel;
	    alwaysSerialize: boolean;
	    disabled: boolean;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	};
	export var rowIndex: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    defaultVal: number;
	    from: typeof floatFromModel;
	    alwaysSerialize: boolean;
	    disabled: boolean;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	};
	export var cellserializtionInfoBase: ISerializationInfoArray;
	export var cellserializtionInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Widgets {
    import GroupObject = DevExpress.Analytics.Internal.GroupObject;;
	export var groups: GroupObject;

}
declare module DevExpress.Reporting.Designer.Internal {
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
	export class ReportPreviewService {
	    static initializePreview(report: ReportViewModel): any;
	}

}
declare module DevExpress.Reporting.Designer {
    import IReportDesignerRootContext = DevExpress.Reporting.Designer.IReportDesignerRootContext;;
    import WizardRunType = DevExpress.Reporting.Designer.Wizard.WizardRunType;;
	export class JSReportDesigner {
	    private _designerModel;
	    designerModel: IReportDesignerRootContext;
	    constructor(_designerModel: ko.Observable<IReportDesignerRootContext>);
	    UpdateLocalization(localization: any): void;
	    GetDesignerModel(): IReportDesignerRootContext;
	    GetPreviewModel(): any;
	    GetPropertyInfo(controlType: any, path: any): any;
	    GetButtonStorage(): any;
	    RunWizard(wizardType: WizardRunType): void;
	    GetJsonReportModel(): any;
	    IsModified(): boolean;
	    ResetIsModified(): void;
	    AddToPropertyGrid(groupName: any, property: any): void;
	    AddParameterType(parameterInfo: any, editorInfo: any): void;
	    RemoveParameterType(parameterType: any): void;
	    GetParameterInfo(parameterType: any): DevExpress.Reporting.Designer.Data.IParameterTypeValue;
	    GetParameterEditor(valueType: any): DevExpress.Analytics.Utils.IEditorInfo;
	    ReportStorageGetData(url: any): any;
	    ReportStorageSetData(reportLayout: any, url: any): any;
	    ReportStorageSetNewData(reportLayout: any, url: any): JQueryPromise<any>;
	    SaveReport(): any;
	    GetTabs(): DevExpress.Reporting.Designer.Tools.INavigateTab[];
	    GetCurrentTab(): DevExpress.Reporting.Designer.Tools.NavigateTab;
	    CloseTab(tab: any, force?: boolean): void;
	    CloseCurrentTab(): void;
	    AdjustControlCore(): void;
	    SaveNewReport(reportName: any): JQueryPromise<any>;
	    ReportStorageGetUrls(): any;
	    OpenReport(url: any): void;
	    ShowPreview(): void;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;

	export class CustomMergingEngine {
	    private _customMergeForFormatString;
	    customMerge(propertyName: string, controls: {}[], undoEngine: ko.Observable<UndoEngine>): {
	        result: ko.ObservableArray<any>;
	        subscriptions: any[];
	    };
	}

}
declare module DevExpress.Reporting.Viewer.Export {
    import ReportPreview = DevExpress.Reporting.Viewer.ReportPreview;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import TabInfo = DevExpress.Analytics.Utils.TabInfo;;
	export class ExportOptionsModel extends Disposable {
	    private _reportPreview;
	    constructor(reportPreview: ReportPreview, enableKeyboardSupport?: boolean);
	    _getExportFormatItems(): Array<{
	        text: string;
	        format: string;
	    }>;
	    _exportDocumentByFormat(format: any): void;
	    getActions(context: any): any[];
	    dispose(): void;
	    actions: any[];
	    tabInfo: TabInfo;
	}
	export class ExportOptionsEventHandlers {
	    private _menuButton;
	    onSubmenuShowing(popupContainer: any, element: any): (e: any) => void;
	    onSubmenuShown(e: any): void;
	    onSubmenuHiding(e: any): void;
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
    import ReportPreview = DevExpress.Reporting.Viewer.ReportPreview;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IAction = DevExpress.Analytics.Utils.IAction;;

    import IActionsProvider = DevExpress.Analytics.Internal.IActionsProvider;
    import ActionListsBase = DevExpress.Analytics.Internal.ActionListsBase;;
	export class PreviewDesignerActions extends Disposable implements IActionsProvider {
	    actions: IAction[];
	    dispose(): void;
	    constructor(reportPreview: ReportPreview, fullscreen: ko.Computed<boolean>);
	    getActions(context: any): IAction<any>[];
	}
	export class ActionLists extends ActionListsBase {
	    private _reportPreview;
	    constructor(reportPreview: ReportPreview, globalActionProviders: ko.ObservableArray<IActionsProvider>, customizeActions?: (actions: IAction[]) => void, enabled?: ko.Observable<boolean>);
	    processShortcut(actions: IAction[], e: JQueryKeyEventObject): void;
	    dispose(): void;
	    globalActionProviders: ko.ObservableArray<IActionsProvider>;
	}
	export class PreviewActions extends Disposable implements IActionsProvider {
	    actions: IAction[];
	    wrapDisposable<T>(object: T): T;
	    constructor(reportPreview: ReportPreview);
	    dispose(): void;
	    getActions(context: any): IAction<any>[];
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
    import ReportPreview = DevExpress.Reporting.Viewer.ReportPreview;;
    import PreviewParametersViewModel = DevExpress.Reporting.Viewer.Parameters.PreviewParametersViewModel;;
    import ExportOptionsModel = DevExpress.Reporting.Viewer.Export.ExportOptionsModel;;
    import SearchViewModel = DevExpress.Reporting.Viewer.Internal.SearchViewModel;;
    import DocumentMapModel = DevExpress.Reporting.Viewer.Internal.DocumentMapModel;;
    import ActionLists = DevExpress.Reporting.Viewer.Internal.ActionLists;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import TabPanel = DevExpress.Analytics.Utils.TabPanel;
    import DisposableType = DevExpress.Analytics.Utils.DisposableType;;
    import IDesignerPart = DevExpress.Analytics.Internal.IDesignerPart;;
    import IDocumentOperationResult = DevExpress.Reporting.Viewer.Utils.IDocumentOperationResult;;
	export interface IPreviewModelBase {
	    rootStyle: string | {
	        [key: string]: boolean;
	    };
	    reportPreview: ReportPreview;
	    parametersModel: PreviewParametersViewModel;
	    exportModel: ExportOptionsModel;
	    searchModel: SearchViewModel;
	    rtl: boolean;
	    parts?: IDesignerPart[];
	    updateSurfaceSize?: () => void;
	    resizeCallback?: () => void;
	    _addDisposable?: (obj: any) => void;
	}
	export interface IPreviewModel extends IPreviewModelBase {
	    documentMapModel: DocumentMapModel;
	    tabPanel: TabPanel;
	    actionLists: ActionLists;
	    accessibilityCompliant: boolean;
	}
	export class PreviewDisposableModel extends Disposable implements IPreviewModelBase {
	    rootStyle: string | {
	        [key: string]: boolean;
	    };
	    reportPreview: ReportPreview;
	    parametersModel: PreviewParametersViewModel;
	    exportModel: ExportOptionsModel;
	    searchModel: SearchViewModel;
	    rtl: boolean;
	    parts?: IDesignerPart[];
	    resizeCallback?: () => void;
	    updateSurfaceSize?: () => void;
	    constructor(options: IPreviewModelBase);
	    _addDisposable(object: DisposableType): void;
	    dispose(): void;
	    GetParametersModel(): PreviewParametersViewModel;
	    OpenReport(reportName: string): void;
	    Print(pageIndex?: number): void;
	    ExportTo(format: string, inlineResult?: boolean): void;
	    GetCurrentPageIndex(): number;
	    GoToPage(pageIndex: number): void;
	    Close(): void;
	    ResetParameters(): void;
	    StartBuild(): void;
	    PerformCustomDocumentOperation(customData?: string, hideMessageFromUser?: boolean): JQueryPromise<IDocumentOperationResult>;
	}
	export class PreviewModel extends PreviewDisposableModel implements IPreviewModel {
	    documentMapModel: DocumentMapModel;
	    tabPanel: TabPanel;
	    actionLists: ActionLists;
	    accessibilityCompliant: boolean;
	    constructor(options: IPreviewModel);
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
    import IElementPosition = DevExpress.Reporting.Viewer.Internal.IElementPosition;;
	export function stringToPosition(position: string): IElementPosition;
	export function getDockedElementCallback($targetElement: JQuery<Element>, $viewer: JQuery<Element>, $window: JQuery<Window>, selector: string, position?: IElementPosition): (viewer: Element) => void;
	export function updatePreviewContentSize(previewSize: ko.Observable<number> | ko.Computed<number>, root: Element, rtl?: boolean): (tabPanelPosition?: string) => void;
	export function updatePreviewZoomWithAutoFit(width: any, height: any, $element: JQuery<Element>, autoFitBy?: number): number;

}
declare module DevExpress.Reporting.Viewer.Internal {
    import IProgressBarSettings = DevExpress.Reporting.Viewer.Utils.IProgressBarSettings;;
    import IPreviewModelBase = DevExpress.Reporting.Viewer.Internal.IPreviewModelBase;;
    import ReportPreview = DevExpress.Reporting.Viewer.ReportPreview;;
	export function getUpdateProgressBarCallback(progressBarSettings: IProgressBarSettings, designerModel: IPreviewModelBase, reportPreview: ReportPreview, rootElement: Element, $window?: JQuery<Window>): () => void;

}
declare module DevExpress.Reporting.Viewer.Mobile.Internal {
    import PreviewPage = DevExpress.Reporting.Viewer.Internal.PreviewPage;;
    import MobileReportPreview = DevExpress.Reporting.Viewer.Mobile.MobileReportPreview;;

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export interface IGalleryItemBlock {
	    repaint?: boolean;
	    page: PreviewPage;
	    classSet?: any;
	    visible?: boolean;
	    position: ko.Observable<IAbsolutePosition> | ko.Computed<IAbsolutePosition>;
	}
	export interface IAbsolutePosition {
	    left: number;
	    top: number;
	    height: number;
	    width: number;
	}
	export interface IGalleryItem {
	    blocks: ko.ObservableArray<IGalleryItemBlock>;
	    realIndex?: number;
	}
	export class GalleryModel extends Disposable {
	    preview: MobileReportPreview;
	    private previewWrapperSize;
	    private _spacing;
	    private _animationTimeout;
	    private _createBlock;
	    constructor(preview: MobileReportPreview, previewWrapperSize: ko.Observable<{
	        width: number;
	        height: number;
	    }>);
	    dispose(): void;
	    updatePagesVisible(preview: MobileReportPreview): void;
	    updateCurrentBlock(): void;
	    updateContent(preview: MobileReportPreview, pagesCount: number): void;
	    updateBlockPositions(blocks: IGalleryItemBlock[], visible: any): void;
	    updateStartBlocks(galleryItem: IGalleryItem, pages: PreviewPage[]): number;
	    updateLastBlocks(galleryItem: IGalleryItem, pages: PreviewPage[]): number;
	    updateBlocks(galleryItem: IGalleryItem, pagesCount: number, preview: MobileReportPreview, index: any, useAnimation?: boolean): void;
	    changePage(preview: MobileReportPreview): void;
	    repaint: ko.Observable<{}>;
	    repaintTimeout: ko.Observable<number>;
	    contentSize: ko.Observable<{
	        width: string;
	        height: string;
	    }> | ko.Computed<{
	        width: string;
	        height: string;
	    }>;
	    horizontal: ko.Observable<number> | ko.Computed<number>;
	    vertical: ko.Observable<number> | ko.Computed<number>;
	    pageCount: number;
	    isAnimated: ko.Observable<boolean> | ko.Computed<boolean>;
	    items: ko.ObservableArray<IGalleryItem>;
	    currentBlockText: ko.Observable<string> | ko.Computed<string>;
	    selectedIndexReal: ko.Observable<number>;
	    loopEnabled: ko.Computed<boolean>;
	    selectedIndex: ko.Observable<number>;
	    animationEnabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    swipeRightEnable: ko.Computed<boolean>;
	    swipeLeftEnable: ko.Computed<boolean>;
	}

}
declare module DevExpress.Reporting.Viewer.Mobile.Internal {
    import SearchViewModel = DevExpress.Reporting.Viewer.Internal.SearchViewModel;;
    import MobileReportPreview = DevExpress.Reporting.Viewer.Mobile.MobileReportPreview;;
    import GalleryModel = DevExpress.Reporting.Viewer.Mobile.Internal.GalleryModel;
    import IGalleryItemBlock = DevExpress.Reporting.Viewer.Mobile.Internal.IGalleryItemBlock;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export interface IMobileSearchPanel {
	    searchPanelVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	    height: ko.Observable<number> | ko.Computed<number>;
	    editorVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export class MobileSearchViewModel extends SearchViewModel implements IMobileSearchPanel {
	    static maxHeight: number;
	    focusEditor(event: any): void;
	    private _killSubscription;
	    private _updateBricks;
	    constructor(reportPreview: MobileReportPreview, gallery: GalleryModel);
	    updatePagesInBlocks(blocks: Array<IGalleryItemBlock>): void;
	    stopSearching(): void;
	    startSearch(): void;
	    editorVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	    height: ko.Observable<number>;
	    searchPanelVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	    enabled: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export class SearchBarModel extends Disposable {
	    private viewModel;
	    constructor(viewModel: MobileSearchViewModel, element: HTMLDivElement, $searchText: JQuery<Element>);
	    dispose(): void;
	}

}
declare module DevExpress.Reporting.Viewer.Mobile.Internal {
    import PreviewPage = DevExpress.Reporting.Viewer.Internal.PreviewPage;
    import IPreviewPageOwner = DevExpress.Reporting.Viewer.Internal.IPreviewPageOwner;;
    import IBrickNode = DevExpress.Reporting.Viewer.Utils.IBrickNode;;
	export class MobilePreviewPage extends PreviewPage {
	    constructor(preview: IPreviewPageOwner, pageIndex: number, processClick?: (target: IBrickNode) => void, loading?: ko.Observable<boolean>);
	    maxZoom: number;
	}

}
declare module DevExpress.Reporting.Viewer.Mobile {
    import IMobileSearchPanel = DevExpress.Reporting.Viewer.Mobile.Internal.IMobileSearchPanel;;
    import ReportPreview = DevExpress.Reporting.Viewer.ReportPreview;;
    import PreviewRequestWrapper = DevExpress.Reporting.Viewer.Internal.PreviewRequestWrapper;;
    import PreviewHandlersHelper = DevExpress.Reporting.Viewer.Internal.PreviewHandlersHelper;;
    import IPreviewCustomizationHandler = DevExpress.Reporting.Viewer.Utils.IPreviewCustomizationHandler;
    import IMobileModeSettings = DevExpress.Reporting.Viewer.Utils.IMobileModeSettings;;
    import IBrickNode = DevExpress.Reporting.Viewer.Utils.IBrickNode;;
    import MobilePreviewPage = DevExpress.Reporting.Viewer.Mobile.Internal.MobilePreviewPage;;

	export interface ISlideOptions {
	    dispose: () => void;
	    disabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    readerMode: boolean;
	    animationSettings: IPreviewAnimationSettings;
	    repaintTimeout: ko.Observable<number>;
	    searchPanel: IMobileSearchPanel;
	    swipeEnabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    reachedTop: ko.Observable<boolean> | ko.Computed<boolean>;
	    reachedLeft: ko.Observable<boolean> | ko.Computed<boolean>;
	    reachedRight: ko.Observable<boolean> | ko.Computed<boolean>;
	    scrollAvailable: ko.Observable<boolean> | ko.Computed<boolean>;
	    zoomUpdating: ko.Observable<boolean> | ko.Computed<boolean>;
	    galleryIsAnimated: ko.Observable<boolean> | ko.Computed<boolean>;
	    autoFitBy: ko.Observable<number> | ko.Computed<number>;
	    topOffset: ko.Observable<number> | ko.Computed<number>;
	    brickEventsDisabled: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export interface IZoomOptions {
	    zoomUpdating: ko.Observable<boolean> | ko.Computed<boolean>;
	    zoom: ko.Observable<number> | ko.Computed<number>;
	}
	export interface IPreviewAnimationSettings {
	    zoomEnabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    swipeEnabled: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export class MobileReportPreview extends ReportPreview {
	    constructor(handlerUri?: string, previewRequestWrapper?: PreviewRequestWrapper, previewHandlersHelper?: PreviewHandlersHelper, callbacks?: IPreviewCustomizationHandler, rtl?: boolean, mobileSettings?: IMobileModeSettings);
	    createPage(pageIndex: number, processClick?: (target: IBrickNode) => void, loading?: ko.Observable<boolean>): MobilePreviewPage;
	    createBrickClickProcessor(cyclePageIndex: number): (brick: IBrickNode) => void;
	    _hasActiveEditingFields(): boolean;
	    showActions(s: MobileReportPreview): void;
	    onSlide(e: any): void;
	    availablePages: ko.Observable<number[]>;
	    visiblePages: ko.Computed<DevExpress.Reporting.Viewer.Internal.PreviewPage[]>;
	    goToPage(pageIndex: any, forcePage?: any): void;
	    getScrollViewOptions(): {
	        onUpdated: (e: any) => void;
	        direction: string;
	        pushBackValue: number;
	        bounceEnabled: boolean;
	        disabled: ko.Observable<boolean>;
	    };
	    setScrollReached(e: any): void;
	    dispose(): void;
	    readerMode: boolean;
	    animationSettings: IPreviewAnimationSettings;
	    topOffset: ko.Observable<number>;
	    previewWrapperSize: ko.Observable<{
	        width: number;
	        height: number;
	    }>;
	    searchPanelVisible: ko.Observable<boolean>;
	    interactionDisabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    actionsVisible: ko.Observable<boolean>;
	    scrollReachedLeft: ko.Observable<boolean>;
	    scrollReachedRight: ko.Observable<boolean>;
	    scrollReachedTop: ko.Observable<boolean>;
	    scrollReachedBottom: ko.Observable<boolean>;
	    zoomUpdating: ko.Observable<boolean>;
	    mobileZoom: ko.Computed<number>;
	}

}
declare module DevExpress.Reporting.Viewer.Mobile.Internal {
    import MobileReportPreview = DevExpress.Reporting.Viewer.Mobile.MobileReportPreview;;
    import GalleryModel = DevExpress.Reporting.Viewer.Mobile.Internal.GalleryModel;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export class MobilePaginator extends Disposable {
	    constructor(reportPreview: MobileReportPreview, gallery: GalleryModel);
	    visible: ko.Observable<boolean>;
	    text: ko.Observable<string> | ko.Computed<string>;
	}

}
declare module DevExpress.Reporting.Viewer.Mobile.Internal {
	export function updatePreviewContentSizeMobile(previewWrapperSize: ko.Observable<{
	    width: number;
	    height: number;
	}>, $root: JQuery<Element>): () => void;

}
declare module DevExpress.Reporting.Viewer.Mobile.Internal {
	export var editorTemplates: {
	    rangeEditor: {
	        header: string;
	    };
	};

}
declare module DevExpress.Reporting.Viewer.Mobile.Internal {
    import PreviewParameterHelper = DevExpress.Reporting.Viewer.Parameters.PreviewParameterHelper;;
	export class MobilePreviewParameterHelper extends PreviewParameterHelper {
	    getRangeEditor(): {
	        header: string;
	    };
	}

}
declare module DevExpress.Reporting.Viewer.Mobile.Internal {
    import MobileReportPreview = DevExpress.Reporting.Viewer.Mobile.MobileReportPreview;;
    import ExportOptionsModel = DevExpress.Reporting.Viewer.Export.ExportOptionsModel;;
    import PreviewParametersViewModel = DevExpress.Reporting.Viewer.Parameters.PreviewParametersViewModel;;
    import MobileSearchViewModel = DevExpress.Reporting.Viewer.Mobile.Internal.MobileSearchViewModel;;
    import IPreviewCustomizationHandler = DevExpress.Reporting.Viewer.Utils.IPreviewCustomizationHandler;;

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export interface IMobileActionContent {
	    name: string;
	    data: any;
	    dispose?: () => void;
	}
	export interface IMobileAction {
	    imageClassName: string;
	    clickAction: () => void;
	    visible?: any;
	    content?: IMobileActionContent;
	}
	export class MobileActionList extends Disposable {
	    actions: IMobileAction[];
	    constructor(actions: IMobileAction[]);
	    dispose(): void;
	    visible: ko.Observable<boolean>;
	}
	export interface IPreviewActionsMobileOptions {
	    reportPreview: MobileReportPreview;
	    exportModel: ExportOptionsModel;
	    parametersModel: PreviewParametersViewModel;
	    searchModel: MobileSearchViewModel;
	    exportTypes: ko.ObservableArray<{
	        text: string;
	        format: string;
	    }>;
	    callbacks: IPreviewCustomizationHandler;
	}
	export function getPreviewActionsMobile(options: IPreviewActionsMobileOptions): MobileActionList;

}
declare module DevExpress.Reporting.Viewer.Mobile.Internal {

    import PreviewDisposableModel = DevExpress.Reporting.Viewer.Internal.PreviewDisposableModel;;
    import ISlideOptions = DevExpress.Reporting.Viewer.Mobile.ISlideOptions;;
    import GalleryModel = DevExpress.Reporting.Viewer.Mobile.Internal.GalleryModel;;
    import MobilePaginator = DevExpress.Reporting.Viewer.Mobile.Internal.MobilePaginator;;
    import IMobileDesignerModel = DevExpress.Reporting.Viewer.Mobile.Internal.IMobileDesignerModel;;
	export class MobilePreviewModel extends PreviewDisposableModel {
	    slideOptions: ISlideOptions;
	    gallery: GalleryModel;
	    brickEventsDisabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    paginator: MobilePaginator;
	    availableFormats: ko.ObservableArray<{
	        text: string;
	        format: string;
	    }>;
	    constructor(options: IMobileDesignerModel);
	}

}
declare module DevExpress.Reporting.Viewer {
    import AccessibilityKeyboardHelperBase = DevExpress.Analytics.Internal.AccessibilityKeyboardHelperBase;
    import ControlElementWithParentHighlight = DevExpress.Analytics.Internal.ControlElementWithParentHighlight;
    import ListKeyboardHelper = DevExpress.Analytics.Internal.ListKeyboardHelper;;
	export class DateRangeDialogElementsKeyboardHelper extends AccessibilityKeyboardHelperBase {
	    private _hide;
	    private _visible;
	    controlElementClassName: string;
	    predefinedDateRangesKeyboardHelper: PredefinedDateRangesKeyboardHelper;
	    createControlElement(element: HTMLElement, index?: number): ControlElementWithParentHighlight;
	    constructor(_hide: () => void, _visible: ko.Observable<boolean>);
	    itemHandleEscKey(e: any, index?: any): boolean;
	    itemHandleUpArrowKey(e: any, index?: any): boolean;
	    itemHandleTabKey(e: any, index: any): boolean;
	    itemHandleShiftTabKey(e: any, index?: any): boolean;
	}
	export class PredefinedDateRangesKeyboardHelper extends ListKeyboardHelper {
	    private owner;
	    constructor(owner: DateRangeDialogElementsKeyboardHelper);
	    itemHandleEscKey(e: any, index: any): boolean;
	    itemHandleTabKey(e: any, index: any): boolean;
	    itemHandleShiftTabKey(e: any, index?: any): boolean;
	    itemHandleUpArrowKey(e: any, index: any): any;
	}

}
declare module DevExpress.Reporting.Viewer.Widgets {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import DateRangeDialogElementsKeyboardHelper = DevExpress.Reporting.Viewer.DateRangeDialogElementsKeyboardHelper;;
	export interface IDateRangeEditorItem {
	    displayName: string;
	    range: () => Date[];
	}
	export interface IDateRangeEditorOptions {
	    value: ko.ObservableArray<Date>;
	    isMobile?: boolean;
	}
	export var predefinedDateRanges: IDateRangeEditorItem[];
	export class DateRangeEditor extends Disposable {
	    private _options;
	    private _locker;
	    private _getStringValue;
	    _popupVisible: ko.Observable<boolean>;
	    _showPopup: () => void;
	    _hidePopup: () => void;
	    _displayText: ko.Computed<string>;
	    _$element: JQuery;
	    _isSelected(item: IDateRangeEditorItem): boolean;
	    constructor(_options: IDateRangeEditorOptions);
	    private _toParameterValue;
	    _accessibilityDialogItems: ko.ObservableArray<any>;
	    _createTemplateData(value: ko.Observable<Date>, min: ko.Observable<Date>): {
	        value: ko.Observable<Date>;
	        min: ko.Observable<Date>;
	        inRange: (date: Date) => boolean;
	    };
	    applyDate(range: Date[], force?: boolean): void;
	    inRange(date: any): boolean;
	    applyValue(updateEndDate?: boolean): void;
	    popupTemplate: string;
	    items: any[];
	    startDate: ko.Observable<Date>;
	    endDate: ko.Observable<Date>;
	    popupModel: any;
	    dialogKeyboardHelper: DateRangeDialogElementsKeyboardHelper;
	}

}
declare module DevExpress.Reporting.Viewer.Mobile.Internal {
    import PreviewParametersViewModel = DevExpress.Reporting.Viewer.Parameters.PreviewParametersViewModel;;
    import MobileReportPreview = DevExpress.Reporting.Viewer.Mobile.MobileReportPreview;;
    import DateRangeEditor = DevExpress.Reporting.Viewer.Widgets.DateRangeEditor;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export interface IParamtersPopupFormModel {
	    visible: ko.Observable<boolean>;
	    submit?: () => void;
	    reset?: () => void;
	    cancel?: () => void;
	}
	export interface IParametersPopupButton {
	    className: string;
	    text: string;
	    action: (params: any) => void;
	    disabled: boolean | ko.Observable<boolean> | ko.Computed<boolean> | ko.Subscribable<boolean>;
	    visible: boolean | ko.Observable<boolean> | ko.Computed<boolean> | ko.Subscribable<boolean>;
	    id: 'dxrv-mobile-reset' | 'dxrv-mobile-cancel' | 'dxrv-mobile-submit' | string;
	}
	export class ParametersPopupModelBase extends Disposable {
	    private formModel;
	    private _parametersButtonContaner;
	    private _submit;
	    private _reset;
	    private _cancel;
	    constructor(formModel: IParamtersPopupFormModel);
	    cacheElementContent(element: any): void;
	    dispose(): void;
	    initVisibilityIcons(): void;
	    title: string;
	    contentTemplate: string;
	    model: any;
	    visible: ko.Observable<boolean> | ko.Computed<boolean>;
	    actionButtons: IParametersPopupButton[];
	    actionIcons: any;
	    cancelDisabled: ko.Subscribable<boolean>;
	    showIcons: ko.Observable<boolean>;
	    className: string;
	}
	export class ParametersPopupModel extends ParametersPopupModelBase {
	    model: PreviewParametersViewModel;
	    private _reportPreview;
	    constructor(model: PreviewParametersViewModel, _reportPreview: MobileReportPreview);
	}
	export class DateRangeParemeterPopupModel extends ParametersPopupModelBase {
	    model: DateRangeEditor;
	    private _oldStart;
	    private _oldEnd;
	    private _dateEditorClassName;
	    private _dateButtonEditorClassName;
	    constructor(model: DateRangeEditor);
	    textRangeValue: ko.Subscribable<string>;
	    getStringDate: (value: ko.Subscribable<string>) => string;
	    focusButton: (e: any) => void;
	}

}
declare module DevExpress.Reporting.Viewer {
	export var MobilePreviewElements: {
	    Surface: string;
	    Search: string;
	    Pages: string;
	    MobileActions: string;
	    Parameters: string;
	};

}
declare module DevExpress.Reporting.Viewer.Mobile.Internal {
    import IPreviewModelBase = DevExpress.Reporting.Viewer.Internal.IPreviewModelBase;;
    import MobileReportPreview = DevExpress.Reporting.Viewer.Mobile.MobileReportPreview;
    import ISlideOptions = DevExpress.Reporting.Viewer.Mobile.ISlideOptions;;
    import MobileSearchViewModel = DevExpress.Reporting.Viewer.Mobile.Internal.MobileSearchViewModel;;
    import GalleryModel = DevExpress.Reporting.Viewer.Mobile.Internal.GalleryModel;;
    import MobilePaginator = DevExpress.Reporting.Viewer.Mobile.Internal.MobilePaginator;;
    import IBindingSettings = DevExpress.Reporting.Viewer.Utils.IBindingSettings;;
    import MobilePreviewModel = DevExpress.Reporting.Viewer.Mobile.Internal.MobilePreviewModel;;

	export interface IDesignerModelPart {
	    id: string;
	    templateName: string;
	    model: any;
	}
	export interface IMobileDesignerModel extends IPreviewModelBase {
	    reportPreview: MobileReportPreview;
	    searchModel: MobileSearchViewModel;
	    gallery?: GalleryModel;
	    paginator?: MobilePaginator;
	    brickEventsDisabled?: ko.Observable<boolean> | ko.Computed<boolean>;
	    slideOptions?: ISlideOptions;
	    availableFormats: ko.ObservableArray<{
	        text: string;
	        format: string;
	    }>;
	}
	export function createMobilePreview(bindingSettings: IBindingSettings): MobilePreviewModel;

}
declare module DevExpress.Reporting.Viewer.Internal {
    import IFoundText = DevExpress.Reporting.Viewer.Internal.IFoundText;;
	export var formatSearchResult: (value: IFoundText) => string;

}
declare module DevExpress.Reporting.Viewer.Internal {
    import IWebDocumentViewerModel = DevExpress.Reporting.Viewer.Utils.IWebDocumentViewerModel;
    import IBindingSettings = DevExpress.Reporting.Viewer.Utils.IBindingSettings;
    import IPreviewCustomizationHandler = DevExpress.Reporting.Viewer.Utils.IPreviewCustomizationHandler;;
    import PreviewModel = DevExpress.Reporting.Viewer.Internal.PreviewModel;
    import PreviewDisposableModel = DevExpress.Reporting.Viewer.Internal.PreviewDisposableModel;;
	export function createDesktopPreview(bindingSettings: IBindingSettings): PreviewModel;
	export function createPreview(bindingSettings: IBindingSettings): JQueryDeferred<PreviewDisposableModel>;
	export function createAndInitPreviewModel(viewerModel: IWebDocumentViewerModel, element: Element, callbacks?: IPreviewCustomizationHandler, applyBindings?: boolean): JQueryDeferred<PreviewDisposableModel>;
	export function createPreviewModel(viewerModel: IWebDocumentViewerModel, element: Element, callbacks?: IPreviewCustomizationHandler, applyBindings?: boolean): JQueryDeferred<PreviewDisposableModel>;
	export function initPreviewModel(previewModel: any, viewerModel: IWebDocumentViewerModel): void;

}
declare module DevExpress.Reporting.Designer.Internal {
    import IArea = DevExpress.Analytics.Elements.IArea;;
    import SnapLinesCollector = DevExpress.Analytics.Internal.SnapLinesCollector;;
	export class ReportSnapLinesCollector extends SnapLinesCollector {
	    private _rtl;
	    _getCollection(parent: any): {
	        rect: ko.Observable<IArea>;
	    }[];
	    private _enumerateBandCollection;
	    private _processBandRtl;
	    _enumerateCollection(parent: any, parentAbsoluteProsition: {
	        top: number;
	        left: number;
	    }, callback: (item: any, itemAbsoluteRect: {
	        left: number;
	        right: number;
	        top: number;
	        bottom: number;
	    }) => void): void;
	    constructor(_rtl: ko.Observable<boolean> | ko.Computed<boolean>);
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;
    import AnalyticSelectionDragDropHandler = DevExpress.Analytics.Internal.AnalyticSelectionDragDropHandler;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
	export class SelectionDragDropHandler extends AnalyticSelectionDragDropHandler {
	    private _canAddItems;
	    private _localizationCanDrop;
	    constructor(_canAddItems: ko.Computed<boolean>, surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper: SnapLinesHelper, dragHelperContent: DragHelperContent);
	    getLocation(adjustedTarget: any, item: any): DevExpress.Analytics.Elements.IArea;
	    canDrop(dropTarget: any, controlModel: any, metaData: any): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import MenuSettings = DevExpress.Analytics.Internal.MenuSettings;;

	export class ReportMenuSettings extends MenuSettings {
	    appMenuVisible: ko.Observable<boolean>;
	    dispose(): void;
	    _$menuElement: JQuery;
	    setMenuElement($element: any): void;
	    toggleAppMenu: any;
	    constructor();
	    _toggleAppMenu(): void;
	    generate(): {};
	    isMenuCollapsed: ko.Observable<boolean>;
	}

}
declare module DevExpress.Reporting.Designer.Utils {
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
	export function base64UTF16LEtobase64UTF8(base64UTF16: string, resultCallback: any): void;
	export function _isReorderBand(dropTarget: ISelectionTarget, dragFrom: ElementViewModel): boolean;
	export function _isMarginBand(band: BandViewModel): boolean;
	export function _isPageBand(band: BandViewModel): boolean;
	export var availableFonts: DevExpress.Reporting.Observable<{
	    [key: string]: string;
	}>;

}
declare module DevExpress.Reporting.Designer.Internal {
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
    import ReorderTreeListDragDropHelper = DevExpress.Analytics.Widgets.Internal.ReorderTreeListDragDropHelper;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
	export class ReportControlsDragDropHelper extends ReorderTreeListDragDropHelper {
	    private _dragHelperContent?;
	    private _undoEngine?;
	    private _isTargetContainer;
	    private _serializer;
	    private _orderingAreaHeight;
	    private _tableControlTypes;
	    private _canReorder;
	    private _canInsertToTarget;
	    private _targetIsClosestOfDraggable;
	    private _canDrop;
	    private _insertTableChildren;
	    private _getDroppableClassName;
	    private _reorderBands;
	    private _reorderTableControls;
	    private _changeControlParent;
	    constructor(_dragHelperContent?: DragHelperContent, _undoEngine?: UndoEngine);
	    start(draggable: TreeListItemViewModel): void;
	    setNewDropTarget(elementModel: any, element: HTMLElement, mouseLocationY?: number): void;
	    getSiblings(): any;
	    stop(): ISelectionTarget;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
	/// <reference types="jqueryui" />
    import ReportControlsDragDropHelper = DevExpress.Reporting.Designer.Internal.ReportControlsDragDropHelper;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;
    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;

	export class ReportExplorerDragDropHandler extends DragDropHandler {
	    private _canAddItems;
	    private undoEngine;
	    private _lastList;
	    private _timeout;
	    private _isStyle;
	    private _isFormatingRule;
	    private _isReportControl;
	    dispose(): void;
	    constructor(_canAddItems: ko.Computed<boolean>, surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, dragHelperContent: DragHelperContent);
	    startDrag(draggable: any): void;
	    drag(event: JQueryEventObject, ui: JQueryUI.DraggableEventUIParams): void;
	    doStopDrag(ui: any, draggable: any, event: JQueryEventObject): void;
	    reportControlsDragDropHelper: ReportControlsDragDropHelper;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;
    import ObjectExplorerProvider = DevExpress.Analytics.Internal.ObjectExplorerProvider;
    import ObjectStructureTreeListController = DevExpress.Analytics.Internal.ObjectStructureTreeListController;;
	export class ReportExplorerModel extends Disposable {
	    static getPathByMember(model: any): any;
	    private _createActionsForOneElement;
	    private _createActionsForArray;
	    private _getPathNonControl;
	    constructor(reportModel: ko.Observable<ReportViewModel>, editableObject: any, clickHandler: any, dragDropHandler: ReportExplorerDragDropHandler, selection: ISelectionProvider);
	    itemsProvider: ObjectExplorerProvider;
	    treeListController: ObjectStructureTreeListController;
	}
    import ReportExplorerDragDropHandler = DevExpress.Reporting.Designer.Internal.ReportExplorerDragDropHandler;;

}
declare module DevExpress.Reporting.Designer.Actions {
	export var ActionId: {
	    NewReport: string;
	    NewReportViaWizard: string;
	    OpenReport: string;
	    ReportWizard: string;
	    ReportWizardFullScreen: string;
	    Preview: string;
	    Scripts: string;
	    AddDataSource: string;
	    AddSqlDataSource: string;
	    AddMultiQuerySqlDataSource: string;
	    ValidateBindings: string;
	    Save: string;
	    SaveAs: string;
	    Exit: string;
	    FullScreen: string;
	    Localization: string;
	};

}
declare module DevExpress.Reporting.Designer.Internal {
	export var StringId: {
	    Copy: string;
	    NewViaWizard: string;
	    Open: string;
	    Save: string;
	    SaveAs: string;
	    MdiReportChanged: string;
	};

}
declare module DevExpress.Reporting.Designer.Internal {
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
	export class AlignmentHandler {
	    private _selectionProvider;
	    private _surfaceContext;
	    constructor(selectionProvider: ISelectionProvider, surfaceContext: ko.Observable<ISurfaceContext>);
	    private _getFocusedItem;
	    private _getFocusedParent;
	    private _getPositionFromBand;
	    private _visitAllSelectedItemsInSameContainerWithFocused;
	    private _centerByBand;
	    private _roundingValue;
	    alignLeft(): void;
	    alignTop(): void;
	    alignRight(): void;
	    alignBottom(): void;
	    alignVerticalCenters(): void;
	    alignHorizontalCenters(): void;
	    sizeToControlWidth(): void;
	    sizeToControlHeight(): void;
	    sizeToControl(): void;
	    centerHorizontally(): void;
	    centerVertically(): void;
	    alignToGrid(): void;
	    sizeToGrid(): void;
	    sendToBack(): void;
	    bringToFront(): void;
	    canChangeZOrder(): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlSurfaceBase = DevExpress.Reporting.Designer.Controls.XRControlSurfaceBase;
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;

    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;;
	export class XRPageBreakSurface extends XRControlSurfaceBase<XRControlViewModel> {
	    static _unitProperties: IUnitProperties<XRControlViewModel>;
	    preInitProperties(control: any, context: any): void;
	    constructor(control: XRControlViewModel, context: ISurfaceContext);
	    readonly isIntersectionDeny: boolean;
	    linePosition: any;
	    lineHeight: ko.Computed<number>;
	}

}
declare module DevExpress.Reporting.Designer.Actions {
    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;

	export class FitToContainerAction {
	    private _control;
	    private _container;
	    constructor(_control: ko.Observable<SurfaceElementBase<ElementViewModel>>);
	    doAction(): void;
	    allowed(): boolean;
	    visible(): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Controls.CrossTab.Metadata {
    import floatFromModel = DevExpress.Analytics.Utils.floatFromModel;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import parseBool = DevExpress.Analytics.Utils.parseBool;;
	export var crossTabCellWidth: {
	    propertyName: string;
	    modelName: string;
	    localizationId: string;
	    defaultVal: number;
	    from: typeof floatFromModel;
	};
	export var crossTabColumnDefinitionInfo: ({
	    propertyName: string;
	    modelName: string;
	    localizationId: string;
	    defaultVal: number;
	    from: typeof floatFromModel;
	} | {
	    propertyName: string;
	    modelName: string;
	    defaultVal: string;
	    valuesArray: DevExpress.Analytics.Utils.IDisplayedValue[];
	} | {
	    propertyName: string;
	    modelName: string;
	    defaultVal: boolean;
	    from: typeof parseBool;
	})[];
	export var crossTabCellHeight: {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    defaultVal: number;
	    from: typeof floatFromModel;
	};
	export var crossTabRowDefinitionInfo: ({
	    propertyName: string;
	    modelName: string;
	    defaultVal: boolean;
	    from: typeof parseBool;
	} | {
	    propertyName: string;
	    modelName: string;
	    displayName: string;
	    localizationId: string;
	    defaultVal: number;
	    from: typeof floatFromModel;
	} | {
	    propertyName: string;
	    modelName: string;
	    defaultVal: string;
	    valuesArray: DevExpress.Analytics.Utils.IDisplayedValue[];
	})[];
	export var rowDefinitions: ISerializationInfo;
	export var columnDefinitions: ISerializationInfo;

}
declare module DevExpress.Reporting.Designer.Controls.CrossTab {

    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import XRCrossTabViewModel = DevExpress.Reporting.Designer.Controls.XRCrossTabViewModel;;
    import XRCrossTabCellViewModel = DevExpress.Reporting.Designer.Controls.XRCrossTabCellViewModel;;
    import ICrossTabCell = DevExpress.Reporting.Designer.Controls.CrossTab.ICrossTabCell;;
	export function findcells(cells: XRCrossTabCellViewModel[], columnIndex?: number, rowIndex?: number): XRCrossTabCellViewModel[];
	export class CrossTabDefinitionsModel extends SerializableModel {
	    constructor(model: any, parent?: XRCrossTabViewModel, serializer?: IModelSerializer);
	    visible: ko.Observable<boolean>;
	}
	export class CrossTabRowDefinitionsModel extends CrossTabDefinitionsModel {
	    getInfo(): ({
	        propertyName: string;
	        modelName: string;
	        defaultVal: boolean;
;
	    } | {
	        propertyName: string;
	        modelName: string;
	        displayName: string;
	        localizationId: string;
	        defaultVal: number;
;
	    } | {
	        propertyName: string;
	        modelName: string;
	        defaultVal: string;
	        valuesArray: DevExpress.Analytics.Utils.IDisplayedValue[];
	    })[];
	    height: ko.Observable<number> | ko.Computed<number>;
	    autoHeightMode: ko.Observable<string>;
	}
	export class CrossTabColumnDefinitionsModel extends CrossTabDefinitionsModel {
	    getInfo(): ({
	        propertyName: string;
	        modelName: string;
	        localizationId: string;
	        defaultVal: number;
;
	    } | {
	        propertyName: string;
	        modelName: string;
	        defaultVal: string;
	        valuesArray: DevExpress.Analytics.Utils.IDisplayedValue[];
	    } | {
	        propertyName: string;
	        modelName: string;
	        defaultVal: boolean;
;
	    })[];
	    width: ko.Observable<number> | ko.Computed<number>;
	    autoWidthMode: ko.Observable<string>;
	}
	export class CellMatrixHelper {
	    constructor(cells: XRCrossTabCellViewModel[]);
	    findRowCell(i: any, j: any, span?: number): any;
	    findColumnCell(i: any, j: any, span?: number): any;
	    matrix: ICrossTabCell[][];
	    columnCount: number;
	    rowCount: number;
	}
	interface IDefenitionFinder {
	    cell: ICrossTabCell;
	    defenition: CrossTabDefinitionsModel;
	}
	export class DefenitionUpdater extends Disposable {
	    private _columnDefinitions;
	    private _rowDefinitions;
	    private _serializer;
	    constructor(crossTab: XRCrossTabViewModel);
	    findDefinition(array: IDefenitionFinder[], cell: any): IDefenitionFinder;
	    update(cells: XRCrossTabCellViewModel[], width: number, height: number): {
	        columnDefs: CrossTabColumnDefinitionsModel[];
	        rowDefs: CrossTabRowDefinitionsModel[];
	    };
	}
	export {};

}
declare module DevExpress.Reporting.Designer.Controls {

    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
    import XRReportElementViewModel = DevExpress.Reporting.Designer.Controls.XRReportElementViewModel;;
    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import CellCreator = DevExpress.Reporting.Designer.Controls.CrossTab.CellCreator;
    import CrossTabCellInfo = DevExpress.Reporting.Designer.Controls.CrossTab.CrossTabCellInfo;
    import ICrossTabCell = DevExpress.Reporting.Designer.Controls.CrossTab.ICrossTabCell;;
    import XRCellsurface = DevExpress.Reporting.Designer.Controls.XRCellsurface;
    import XRCrossTabCellViewModel = DevExpress.Reporting.Designer.Controls.XRCrossTabCellViewModel;;
    import CrossTabColumnDefinitionsModel = DevExpress.Reporting.Designer.Controls.CrossTab.CrossTabColumnDefinitionsModel;
    import CrossTabRowDefinitionsModel = DevExpress.Reporting.Designer.Controls.CrossTab.CrossTabRowDefinitionsModel;
    import DefenitionUpdater = DevExpress.Reporting.Designer.Controls.CrossTab.DefenitionUpdater;;
    import StyleModel = DevExpress.Reporting.Designer.Controls.StyleModel;;
    import DataFieldLayout = DevExpress.Reporting.Designer.Controls.CrossTab.DataFieldLayout;;
    import ControlParameter = DevExpress.Reporting.Designer.Controls.ControlParameter;;
	export class XRCrossTabViewModel extends XRControlViewModel {
	    private _getCreator;
	    private _getArray;
	    private _initStyles;
	    private _calcSize;
	    constructor(model: any, parent: XRReportElementViewModel, serializer?: ModelSerializer);
	    removeChild(cell: XRCrossTabCellViewModel): void;
	    removeField(dataLevel: number, columnLevel: number, rowLevel: number): void;
	    initialize(): void;
	    updateLayout(): void;
	    getNames(): {
	        'columnFields': any;
	        'rowFields': any;
	        'dataFields': any;
	    };
	    onDelete(): void;
	    preInitProperties(): void;
	    isPropertyDisabled(propertyName: string): boolean;
	    applyCells(cellsInfo: CrossTabCellInfo[], initOnly?: boolean): XRCrossTabCellViewModel[];
	    applyCell(from: CrossTabCellInfo, to: ICrossTabCell): void;
	    insertNewField(collectionName: string, insertPosition: number, fieldName: string, dataFieldLayout?: DataFieldLayout): void;
	    getPath: (propertyName: any) => string;
	    dependentStyles: StyleModel[];
	    dataSource: ko.Observable;
	    width: ko.Computed<number>;
	    height: ko.Computed<number>;
	    _cells: ko.ObservableArray<XRCrossTabCellViewModel>;
	    cells: ko.ObservableArray<XRCrossTabCellViewModel>;
	    rowFields: ko.ObservableArray<CrossTabFieldModel>;
	    columnFields: ko.ObservableArray<CrossTabFieldModel>;
	    dataFields: ko.ObservableArray<CrossTabDataFieldModel>;
	    _rowDefinitions: ko.ObservableArray<CrossTabRowDefinitionsModel>;
	    _columnDefinitions: ko.ObservableArray<CrossTabColumnDefinitionsModel>;
	    layoutOptions: CrossTabLayoutOptionsModel;
	    cellCreator: CellCreator;
	    defenitionUpdater: DefenitionUpdater;
	    isModelReady: ko.Computed<boolean>;
	    originalPivotGridLayout: ko.Observable<string>;
	    controlParameters: ko.ObservableArray<ControlParameter>;
	    filterString: any;
	    _filterString: any;
	}
	export class CrossTabLayoutOptionsModel extends SerializableModel {
	    parent: XRCrossTabViewModel;
	    constructor(model: any, parent: XRCrossTabViewModel, serializer: ModelSerializer);
	    isPropertyDisabled(name: any): boolean;
	    getInfo(): ISerializationInfoArray;
	    cornerHeaderDisplayMode: ko.Observable<string>;
	    dataFieldLayout: ko.Observable<string>;
	    columnTotalsPosition: ko.Observable<string>;
	    rowTotalsPosition: ko.Observable<string>;
	    columnTotalHeaderPosition: ko.Observable<string>;
	    rowTotalHeaderPosition: ko.Observable<string>;
	    hierarchicalRowLayout: ko.Observable<boolean>;
	}
	export class CrossTabFieldModel extends SerializableModel {
	    constructor(model: any, parent: XRCrossTabViewModel, serializer: ModelSerializer, name: string);
	    setFieldName(fullPath: string): void;
	    getInfo(): ISerializationInfoArray;
	    getPath: (propertyName: any) => string;
	    isPropertyDisabled: (propertyName: string) => boolean;
	    parent: XRCrossTabViewModel;
	    name: ko.Computed<string>;
	    fieldName: ko.Observable<string>;
	    crossTabSortBySummaryInfo: any;
	}
	export class CrossTabDataFieldModel extends CrossTabFieldModel {
	    getInfo(): DevExpress.Analytics.Utils.ISerializationInfo[];
	}
	export class XRCrossTabSurface extends XRControlSurface {
	    constructor(control: XRCrossTabViewModel, context: any);
	    selectLine(selection: ISelectionProvider, cell: XRCrossTabCellViewModel, isMultiSelect: boolean, isRow: boolean): void;
	    controls: ko.ObservableArray<XRCellsurface>;
	}

}
declare module DevExpress.Reporting.Designer.Controls.CrossTab {

    import SerializableModel = DevExpress.Analytics.Elements.SerializableModel;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import CrossTabFieldModel = DevExpress.Reporting.Designer.Controls.CrossTabFieldModel;
    import XRCrossTabViewModel = DevExpress.Reporting.Designer.Controls.XRCrossTabViewModel;;
    import CellKind = DevExpress.Reporting.Designer.Controls.CrossTab.CellKind;;
	export interface ICrossTabCell {
	    _columnIndex: ko.Observable<number>;
	    _rowIndex: ko.Observable<number>;
	    _columnSpan: ko.Observable<number>;
	    _rowSpan: ko.Observable<number>;
	    kind: ko.Observable<CellKind>;
	    dataLevel?: number;
	    rowLevel?: number;
	    columnLevel?: number;
	    field?: ko.Observable<CrossTabFieldModel>;
	    dependentFields: CrossTabFieldModel[];
	}
	export class CrossTabCellInfo extends SerializableModel implements ICrossTabCell {
	    constructor(model: any, serializer?: ModelSerializer);
	    _columnIndex: ko.Observable<number>;
	    _rowIndex: ko.Observable<number>;
	    _columnSpan: ko.Observable<number>;
	    _rowSpan: ko.Observable<number>;
	    kind: ko.Observable<CellKind>;
	    field: ko.Observable<CrossTabFieldModel>;
	    dataLevel: number;
	    rowLevel: number;
	    columnLevel: number;
	    dependentFields: CrossTabFieldModel[];
	}
	export class CellCreator extends Disposable {
	    protected crossTab: XRCrossTabViewModel;
	    readonly rowFieldCount: number;
	    readonly columnFieldCount: number;
	    readonly dataFieldCount: number;
	    readonly rowDataCount: number;
	    readonly columnDataCount: number;
	    constructor(crossTab: XRCrossTabViewModel);
	    nextRowIndex(cell: ICrossTabCell): number;
	    lastRowIndex(cell: ICrossTabCell): number;
	    nextColumnIndex(cell: ICrossTabCell): number;
	    lastColumnIndex(cell: ICrossTabCell): number;
	    setCellKind(cell: ICrossTabCell, kind: CellKind): void;
	    setLevel(cell: ICrossTabCell, dataLevel: number, columnLevel: number, rowLevel: number): void;
	    setDataLevel(cell: ICrossTabCell, level: number): void;
	    setColumnLevel(cell: ICrossTabCell, level: number): void;
	    setRowLevel(cell: ICrossTabCell, level: number): void;
	    indexToLevel(index: number, count: number): number;
	    setLayout(cell: ICrossTabCell, columnIndex: any, rowIndex: any, columnSpan: any, rowSpan: any): void;
	    static createInstance(crossTab: XRCrossTabViewModel): CellCreator | HorizontalCreator | VerticalCreator;
	    create(): any[];
	    creator(cellKind: CellKind): ICrossTabCell;
	    createCorners(columnCount: number, rowCount: number): ICrossTabCell[];
	    createDataHeaders(): any[];
	    createDataHeader(columnIndex: any, rowIndex: any, dataLevel: any, columnLevel?: number, rowLevel?: number): ICrossTabCell;
	    createData(): ICrossTabCell[];
	    createDataCell(colIndex: number, rowIndex: number, level: number): ICrossTabCell;
	    createColumnTotals(startColumnIndex: number, startRowIndex: number, dataCount: number): any[];
	    createColumnTotal(columnIndex: number, rowIndex: number, dataLevel: number, columnLevel: number): ICrossTabCell;
	    createRowTotals(startColumnIndex: number, startRowIndex: number, dataCount: number): any[];
	    createRowTotal(columnIndex: any, rowIndex: any, dataLevel: any, rowLevel: any): ICrossTabCell;
	    createGrandTotals(dataItems: ICrossTabCell[], startRowIndex: number, startColumnIndex: number, columnInc: number, rowInc: number): any[];
	    createGrandTotal(dataLevel: any, columnLevel: any, rowLevel: any): ICrossTabCell;
	    setGrandTotalLayout(cells: ICrossTabCell, inc: number, columnIndex: any, rowIndex: any): void;
	    createColumnHeaders(startColumnIndex: number, columnSpan: number, dataCount: number): any[];
	    createColumnTotalHeaders(startColumnIndex: number, startRowIndex: number, rowSpan: number, dataCount: number): any[];
	    createRowHeaders(startRowIndex: number, rowSpan: number, dataCount: number): any[];
	    createRowTotalHeaders(startColumnIndex: number, columnSpan: number, startRowIndex: number, dataCount: number): any[];
	    createEmptyHeaders(columnSpan: number): any[];
	    createEmptyCells(dataCount: number): any[];
	    createEmptyHeader(level: number): ICrossTabCell;
	    createEmptyCell(level: number): ICrossTabCell;
	    createColumnTotalHeader(level: number): ICrossTabCell;
	    createColumnGrandTotalHeader(): ICrossTabCell;
	    createRowTotalHeader(level: number): ICrossTabCell;
	    createRowGrandTotalHeader(): ICrossTabCell;
	    lastCorner: ICrossTabCell;
	}
	export class HorizontalCreator extends CellCreator {
	    readonly columnDataCount: number;
	    createCorners(columnCount: number, rowCount: number): ICrossTabCell[];
	    createDataHeaders(): any[];
	    createData(): any[];
	    createRowTotals(startColumnIndex: number, startRowIndex: number, dataCount: number): any[];
	    createColumnTotals(startColumnIndex: number, startRowIndex: number, dataCount: number): any[];
	    createGrandTotals(dataItems: ICrossTabCell[], startRowIndex: number, startColumnIndex: number, columnIndex: number, rowIndex: number): any[];
	    createColumnTotal(columnIndex: number, rowIndex: number, dataLevel: number, columnLevel: number): ICrossTabCell;
	    createRowTotal(columnIndex: number, rowIndex: number, dataLevel: number, rowLevel: number): ICrossTabCell;
	    createEmptyHeaders(columnSpan: number): any[];
	}
	export class VerticalCreator extends CellCreator {
	    readonly rowDataCount: number;
	    createCorners(columnCount: number, rowCount: number): ICrossTabCell[];
	    createDataHeaders(): any[];
	    createData(): any[];
	    createRowTotals(startColumnIndex: number, startRowIndex: number, dataCount: number): any[];
	    createColumnTotals(startColumnIndex: number, startRowIndex: number, dataCount: number): any[];
	    createColumnTotal(columnIndex: number, rowIndex: number, dataLevel: number, columnLevel: number): ICrossTabCell;
	    createRowTotal(columnIndex: number, rowIndex: number, dataLevel: number, rowLevel: number): ICrossTabCell;
	    createGrandTotals(dataItems: ICrossTabCell[], startRowIndex: number, startColumnIndex: number, columnIndex: number, rowIndex: number): any[];
	    setGrandTotalLayout(items: ICrossTabCell, inc: number, columnIndex: any, rowIndex: any): void;
	    createEmptyCells(dataCount: number): any[];
	}

}
declare module DevExpress.Reporting.Designer.Controls {

    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
    import Rectangle = DevExpress.Analytics.Elements.Rectangle;;
    import ICrossTabCell = DevExpress.Reporting.Designer.Controls.CrossTab.ICrossTabCell;;
    import CellKind = DevExpress.Reporting.Designer.Controls.CrossTab.CellKind;
    import DataFieldLayout = DevExpress.Reporting.Designer.Controls.CrossTab.DataFieldLayout;;
    import CrossTabFieldModel = DevExpress.Reporting.Designer.Controls.CrossTabFieldModel;
    import XRCrossTabViewModel = DevExpress.Reporting.Designer.Controls.XRCrossTabViewModel;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
	export function kindToString(kind: CellKind): "NO" | "CRN" | "RH" | "RTH" | "RT" | "CH" | "CTH" | "CT" | "DAT" | "DH" | "GDT" | "Emtpy" | "EmtpyH";
	export class XRCrossTabCellViewModel extends XRControlViewModel implements ICrossTabCell {
	    private parent;
	    readonly namePrefix: string;
	    static cellKinds: {
	        'Header': CellKind[];
	        'Total': CellKind[];
	        'Data': CellKind[];
	    };
	    private readonly _width;
	    private readonly _height;
	    private readonly _left;
	    private readonly _top;
	    private _text;
	    private _textFormatString;
	    private _showCellCode;
	    private _oldFieldName;
	    private _getDefaultName;
	    private _testFieldName;
	    constructor(model: any, parent: XRCrossTabViewModel, serializer?: ModelSerializer);
	    getPath: (propertyName: any) => string;
	    reset(): void;
	    canRemove(): boolean;
	    canDropDown(): boolean;
	    canDropRight(): boolean;
	    canDropUp(): boolean;
	    canDropLeft(): boolean;
	    isPropertyVisible(name: any): boolean;
	    isPropertyModified(name: any): any;
	    isPropertyDisabled(name: any): any;
	    isBindable(): boolean;
	    isIndependant(): boolean;
	    isEditable(): boolean;
	    createAndAssignNewField(fieldName: string, insertBefore: boolean, dataFieldLayout?: DataFieldLayout): void;
	    fieldName: ko.Observable<string> | ko.Computed<string>;
	    summaryType: any;
	    summaryDisplayType: any;
	    sortOrder: any;
	    crossTabGroupInterval: any;
	    crossTabGroupIntervalNumericRange: any;
	    crossTabSortBySummaryInfo: any;
	    _columnIndex: ko.Observable<number>;
	    _rowIndex: ko.Observable<number>;
	    _columnSpan: ko.Observable<number>;
	    _rowSpan: ko.Observable<number>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    text: ko.Observable<string> | ko.Computed<string>;
	    dataLevel?: number;
	    rowLevel?: number;
	    columnLevel?: number;
	    kind: ko.Observable<CellKind>;
	    field: ko.Observable<CrossTabFieldModel>;
	    dependentFields: CrossTabFieldModel[];
	    textFormatString: ko.Observable<string> | ko.Computed<string>;
	    rowVisible: ko.Computed<boolean>;
	    columnVisible: ko.Computed<boolean>;
	    rowAutoHeightMode: ko.Observable<string>;
	    columnAutoWidthMode: ko.Observable<string>;
	    fieldNameAreValid: ko.Observable<boolean>;
	}
	export class XRCellsurface extends XRControlSurface {
	    constructor(control: XRCrossTabCellViewModel, context: any);
	    checkParent(surfaceParent: ISelectionTarget): boolean;
	    selectLine(selection: ISelectionProvider, event?: {
	        ctrlKey: boolean;
	        metaKey: boolean;
	    }, isRow?: boolean): void;
	    cellClick(): void;
	    isEditable(): boolean;
	    private _getDropCallback;
	    private _canSetFieldName;
	    getAdornTemplate(): string;
	    dragCallback(item: TreeListItemViewModel): void;
	    findNextSelection(): any;
	    contenttemplate: string;
	    showDropSurface: ko.Computed<boolean>;
	    dropRect: Rectangle;
	    isDropTarget: ko.Observable<boolean>;
	    dragCss: ko.Observable<string>;
	    dropCallback: (treeListItem: TreeListItemViewModel) => void;
	}

}
declare module DevExpress.Reporting.Designer.Actions {
    import BaseActionsProvider = DevExpress.Analytics.Internal.BaseActionsProvider;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;

	export class ElementActions extends BaseActionsProvider {
	    private _selectionProvider;
	    private _generalDisabled;
	    private _isMultiSelect;
	    constructor(surfaceContext: ko.Observable<ISurfaceContext>, selectionProvider: ISelectionProvider);
	    condition(context: any): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Actions {
    import ElementActions = DevExpress.Reporting.Designer.Actions.ElementActions;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
	export class ReportElementActions extends ElementActions {
	    constructor(surfaceContext: ko.Observable<ISurfaceContext>, selection: ISelectionProvider);
	    getActions(context: any): DevExpress.Analytics.Utils.IAction<any>[];
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
	export class SpaceCommandHandler {
	    private _selectionProvider;
	    private _surfaceContext;
	    constructor(selectionProvider: ISelectionProvider, surfaceContext: ko.Observable<ISurfaceContext>);
	    private _comparer;
	    private _spaceIncrease;
	    private _spaceMakeEqual;
	    private _concatenateWithSpace;
	    horizSpaceConcatenate(): void;
	    vertSpaceConcatenate(): void;
	    horizSpaceMakeEqual(): void;
	    vertSpaceMakeEqual(): void;
	    horizSpaceDecrease(): void;
	    horizSpaceIncrease(): void;
	    vertSpaceDecrease(): void;
	    vertSpaceIncrease(): void;
	}

}
declare module DevExpress.Reporting.Designer.Actions {
    import BaseActionsProvider = DevExpress.Analytics.Internal.BaseActionsProvider;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
    import IAction = DevExpress.Analytics.Utils.IAction;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
	export class ElementsGroupActions extends BaseActionsProvider {
	    private _selectionProvider;
	    actions: IAction[];
	    constructor(surfaceContext: ko.Observable<ISurfaceContext>, selectionProvider: ISelectionProvider);
	    condition(context: any): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Actions {
    import IComponentAddedEventArgs = DevExpress.Reporting.Designer.Utils.IComponentAddedEventArgs;;
    import IActionsProvider = DevExpress.Analytics.Internal.IActionsProvider;;
    import IAction = DevExpress.Analytics.Utils.IAction;;
	export class ReportActions implements IActionsProvider {
	    actions: IAction[];
	    private _contextModel;
	    private _targetModel;
	    private _canAddBand;
	    private _addBand;
	    constructor(onComponentAdded?: any);
	    getActions(context: any): IAction<any>[];
	    onComponentAdded: (e: IComponentAddedEventArgs) => void;
	}

}
declare module DevExpress.Reporting.Designer.Actions {
    import XRTableRowViewModel = DevExpress.Reporting.Designer.Controls.XRTableRowViewModel;;
    import XRTableControlViewModel = DevExpress.Reporting.Designer.Controls.XRTableControlViewModel;;
    import IComponentAddedEventArgs = DevExpress.Reporting.Designer.Utils.IComponentAddedEventArgs;;
    import BaseActionsProvider = DevExpress.Analytics.Internal.BaseActionsProvider;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
	export class TableRowActions extends BaseActionsProvider {
	    selection: ISelectionProvider;
	    readonly _row: XRTableRowViewModel;
	    readonly _table: XRTableControlViewModel;
	    isDisabled(): boolean;
	    constructor(selection: ISelectionProvider, onComponentAdded?: any, isDisabled?: () => boolean);
	    insertRowAbove(): void;
	    insertRowBelow(): void;
	    deleteRow(): void;
	    condition(context: any): boolean;
	    onComponentAdded: (e: IComponentAddedEventArgs) => void;
	}

}
declare module DevExpress.Reporting.Designer.Actions {
    import TableRowActions = DevExpress.Reporting.Designer.Actions.TableRowActions;;
    import XRTableCellViewModel = DevExpress.Reporting.Designer.Controls.XRTableCellViewModel;;
    import XRTableRowViewModel = DevExpress.Reporting.Designer.Controls.XRTableRowViewModel;;
    import XRTableControlViewModel = DevExpress.Reporting.Designer.Controls.XRTableControlViewModel;;
    import IComponentAddedEventArgs = DevExpress.Reporting.Designer.Utils.IComponentAddedEventArgs;;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
	export class TableCellActions extends TableRowActions {
	    readonly _cell: XRTableCellViewModel;
	    readonly _row: XRTableRowViewModel;
	    readonly _table: XRTableControlViewModel;
	    private readonly _cellSurface;
	    constructor(selection: ISelectionProvider, onComponentAdded?: any, isDisabled?: () => boolean);
	    insertCell(): void;
	    deleteCell(): void;
	    deleteRow(): void;
	    insertColumn(isRight: boolean): void;
	    deleteColumn(): void;
	    condition(context: any): boolean;
	    onComponentAdded: (e: IComponentAddedEventArgs) => void;
	}

}
declare module DevExpress.Reporting.Designer.Actions {
    import BaseActionsProvider = DevExpress.Analytics.Internal.BaseActionsProvider;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
	export class TextElementAction extends BaseActionsProvider {
	    private _selectionProvider;
	    private readonly _textControls;
	    private _inaccessibleAction;
	    constructor(_selectionProvider: ISelectionProvider);
	    condition(context: any): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Actions {
    import XRTableCellViewModel = DevExpress.Reporting.Designer.Controls.XRTableCellViewModel;;
    import BaseActionsProvider = DevExpress.Analytics.Internal.BaseActionsProvider;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
	export class TableCellGroupActions extends BaseActionsProvider {
	    private _selectionProvider;
	    private _distributeColumnsAction;
	    private _distributeRowsAction;
	    constructor(selectionProvider: ISelectionProvider);
	    _distributeColumns(): void;
	    _distributeRows(): void;
	    _calculateMinimalHeight(cell: XRTableCellViewModel): number;
	    _calculateTextHeight(cell: XRTableCellViewModel): number;
	    _calculateBordersHeight(cell: XRTableCellViewModel): number;
	    _isCellTextControl(cell: XRTableCellViewModel): boolean;
	    _calculatePaddingsHeight(cell: XRTableCellViewModel): number;
	    _calculatePaddingsWidth(cell: XRTableCellViewModel): number;
	    _selectedCells(): any[];
	    condition(context: any): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
	export enum DefaultCrossTabControlEnum {
	    XRCrossTab = "XRCrossTab",
	    XRPivotGrid = "XRPivotGrid"
	}

}
declare module DevExpress.Reporting.Designer.Internal {

	export class BaseConverter {
	    protected _model: any;
	    popupOptions: {
	        height: number;
	        visible: ko.Observable<boolean>;
	        title: any;
	        confirmMessage: string;
	        infoMessage: string;
	        linkText: string;
	        linkUrl: string;
	        container: (element: HTMLElement) => JQuery<HTMLElement>;
	        buttons: {
	            toolbar: string;
	            location: string;
	            widget: string;
	            options: {
	                text: any;
	                onClick: () => void;
	            };
	        }[];
	    };
	    convert(model: any): void;
	    protected _applyChanges(): void;
	    protected _cancel(): void;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
	export class ControlConverterService {
	    static getXmlStringFromJson(controlJsonLayout: string, doneCallback: (result: any) => void, errorCallback: (error: any) => void): any;
	    static getControlModelFromXmlString(controlXmlLayout: string, doneCallback: (result: any) => void, errorCallback: (error: any) => void): any;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
    import BaseConverter = DevExpress.Reporting.Designer.Internal.BaseConverter;;
	export class CrossTabConverter extends BaseConverter {
	    private _selectionProvider;
	    private _context;
	    private _detailLink;
	    private _warnings;
	    private _undoEngine;
	    constructor(_selectionProvider: ISelectionProvider, _context: any);
	    protected _applyChanges(): void;
	    private _convertStyles;
	    private _prepareNoStyles;
	    private _prepareGeneralStyle;
	    private _prepareStandardStyles;
	    private _applyStyles;
	    private _applyStyle;
	    private _convertOptions;
	    private _convertFields;
	    private _copyPropertiesToField;
	    private _saveOriginalLayout;
	    private _applyVisibility;
	    private _applyText;
	    private _findRelatedPivotGridItem;
	    private _validateChartLinked;
	}
	export class PivotGridConverter extends BaseConverter {
	    private _selectionProvider;
	    constructor(_selectionProvider: ISelectionProvider);
	    protected _applyChanges(): void;
	}

}
declare module DevExpress.Reporting.Designer.Actions {
    import BaseActionsProvider = DevExpress.Analytics.Internal.BaseActionsProvider;;
    import BaseConverter = DevExpress.Reporting.Designer.Internal.BaseConverter;;
	export class PivotGridActions extends BaseActionsProvider {
	    private _converters;
	    readonly _converter: BaseConverter;
	    constructor(_converters: BaseConverter[], isDisabled?: () => boolean);
	    condition(context: any): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import ICopyPasteStrategy = DevExpress.Analytics.Internal.ICopyPasteStrategy;;
	export var reportCopyPasteStrategy: (componentAdded?: any) => ICopyPasteStrategy;

}
declare module DevExpress.Reporting.Designer.Internal {
    import XRChartSurface = DevExpress.Reporting.Designer.Controls.XRChartSurface;;
    import IChartDesignerOptions = DevExpress.Reporting.Chart.Internal.IChartDesignerOptions;;

	export var createChartDesignerOptions: (designerModel: any, dataSourceHelper: any, model: any, parameters: any, chartValueBindingProvider: any) => {
	    dispose: () => void;
	    options: IChartDesignerOptions;
	    visible: ko.Observable<boolean>;
	    buttons: {
	        toolbar: string;
	        location: string;
	        widget: string;
	        options: {
	            text: any;
	            onClick: () => void;
	        };
	    }[];
	    run: (chartSurface: XRChartSurface) => void;
	    container: (element: HTMLElement) => JQuery<HTMLElement>;
	};

}
declare module DevExpress.Reporting.Designer.Utils {
	export var ReportDesignerElements: {
	    MenuButton: string;
	    Toolbar: string;
	    Toolbox: string;
	    GroupedToolbox: string;
	    Surface: string;
	    RightPanel: string;
	} & {
	    MenuButton: string;
	    NavigationPanel: string;
	    ReportDialog: string;
	    ChartDialog: string;
	    ReportConverterDialog: string;
	    Parameters: string;
	};
	export var ReportDesignerAddOns: {
	    Preview: string;
	    ReportWizard: string;
	    ReportWizardFullscreen: string;
	    LocalizationEditor: string;
	    ErrorPanel: string;
	    DataSourceWizard: string;
	    MultiQueryDataSourceWizard: string;
	    MultiQueryDataSourceWizardFullscreen: string;
	    MasterDetailEditor: string;
	    ScriptEditor: string;
	};

}
declare module DevExpress.Reporting.Designer.Internal {
    import ObjectStorageItem = DevExpress.Reporting.Designer.Data.ObjectStorageItem;;
    import ReportViewModel = DevExpress.Reporting.Designer.Controls.ReportViewModel;;
    import DataBindingMode = DevExpress.Reporting.Designer.Internal.DataBindingMode;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;

    import BaseConverter = DevExpress.Reporting.Designer.Internal.BaseConverter;;
	export interface IRulesDictionaryItem {
	    condition: string;
	    dataMember: string;
	    dataSource: ObjectStorageItem;
	    formatting: any;
	}
	export class ReportConverter extends BaseConverter {
	    private _controlsHelper;
	    private _undoEngine;
	    private _dataBindingMode;
	    private convertChoiceEnum;
	    private _formattingMapper;
	    private _mapRulesProperties;
	    private _expressionsToControlMap;
	    private _lastChoice;
	    private _defaultFormatting;
	    private _notShowAgain;
	    private _detailLink;
	    protected _model: ReportViewModel;
	    constructor(_controlsHelper: any, _undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, _dataBindingMode?: string);
	    private _hasBindings;
	    private _hasFormattingRules;
	    convert(model: ReportViewModel, convertBindingsToExpressions?: string): void;
	    private _generateStyleName;
	    private _createBindingExpression;
	    private _tryToGenerateBindingExpressions;
	    private _resetDataBindings;
	    private _mapPaddingObj;
	    private _mapFontObj;
	    private _splitFontPropertyValue;
	    private _splitPaddingPropertyValue;
	    private _patchRuleCondition;
	    private _tryToGenerateFormattingRulesExpressions;
	    private _getControlDataSourceDataMember;
	    private _generateFormattingRulesDictionary;
	    private _createRuleExpression;
	    private _canConvertReport;
	    protected _applyChanges(): void;
	    protected _cancel(mode?: DataBindingMode): void;
	}

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var labelSerializationsInfo: ISerializationInfoArray;
	export var popularPropertiesLabel: string[];

}
declare module DevExpress.Reporting {
	export class Base64ImageParser {
	    static getImageRatio(data: string, format: string): {
	        x: number;
	        y: number;
	    };
	    private static _getDataChunks;
	    private static _countDpiFromBytes;
	    private static _pngHasDpiChunks;
	    static getMonitorPPI(): number;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;;
    import ImageSource = DevExpress.Reporting.ImageSource;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;

    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import IResizeHandler = DevExpress.Analytics.Internal.IResizeHandler;;
	export class XRPictureBoxViewModel extends XRControlViewModel {
	    constructor(model: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    isAlignmentDisabled(): boolean;
	    isPropertyDisabled(propertyName: string): any;
	    imageAlignment: ko.Observable<string> | ko.Computed<string>;
	    imageUrl: ko.Observable<string> | ko.Computed<string>;
	    imageSource: ko.Observable<ImageSource>;
	    _sizing: ko.Observable<string> | ko.Computed<string>;
	    sizing: ko.Observable<string> | ko.Computed<string>;
	    isSmallerImage: ko.Observable<boolean> | ko.Computed<boolean>;
	    readonly isAutoSize: boolean;
	    imageRatio: {
	        x: number;
	        y: number;
	    };
	    originalImageWidth: ko.Observable<number>;
	    originalImageHeight: ko.Observable<number>;
	}
	export class XRPictureBoxSurface extends XRControlSurface {
	    private _createBackgroundPosition;
	    private _createBackimage;
	    private _createBackgroundOrigin;
	    constructor(control: XRPictureBoxViewModel, context: ISurfaceContext);
	    getResizeOptions(resizeHandler: IResizeHandler): IResizeHandler;
	    selectiontemplate: string;
	    getAdornTemplate(): string;
	    _control: XRPictureBoxViewModel;
	    resizeDisabled: ko.Computed<boolean>;
	    resizeOptions: IResizeHandler;
	}

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var panelSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Internal {
	export class CharacterCombHelper {
	    static getAlignments(textAlignment: string): {
	        vertical: string;
	        horizontal: string;
	    };
	    static getLines(text: string, horizontal: number, multiline: boolean, wordwrap: boolean): any[];
	    static getTextOffset(texts: string[], position: number, verticalAlign: string, horizontalAlign: string, vertical: number, horizontal: number): number;
	    static setText(texts: string[], cells: Array<any>, getTextOffset: (texts: string[], position: number) => number): void;
	    static distributionEmptySpace(emptySpace: number, vertical: boolean, textAlignment: string): number;
	    static getHorizontalVerticalByText(multiline: boolean, wordwrap: boolean, text: string, horizontal: number, vertical: number): {
	        horizontal: number;
	        vertical: number;
	    };
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import ISize = DevExpress.Analytics.Elements.ISize;;

    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class XRCharacterComb extends XRControlViewModel {
	    static unitProperties: any[];
	    isPropertyDisabled(name: string): any;
	    private _createCellSideFromOriginalSide;
	    constructor(control: any, parent: ElementViewModel, serializer?: IModelSerializer);
	    roundSize(): void;
	    font: ko.Observable<string> | ko.Computed<string>;
	    cellWidth: ko.Computed<number>;
	    cellHeight: ko.Computed<number>;
	    autoCellSide: ko.Observable<number> | ko.Computed<number>;
	    verticalSpacing: ko.Observable<number> | ko.Computed<number>;
	    horizontalSpacing: ko.Observable<number> | ko.Computed<number>;
	    textAlignment: ko.Observable<string> | ko.Computed<string>;
	    sizeMode: ko.Observable<string> | ko.Computed<string>;
	}
	export class XRCharacterCombSurface extends XRControlSurface {
	    private _createCell;
	    private _updateCellsText;
	    private _getBorderWidthBySpacing;
	    private _applyBounds;
	    updateArray(cellsCount: number, array?: Array<any>): void;
	    fitBoundsToText(): void;
	    constructor(control: XRCharacterComb, context: ISurfaceContext);
	    getText(): string;
	    borderWidth: ko.Computed<number>;
	    borders: ko.Observable<string> | ko.Computed<string>;
	    verticalSpacing: ko.Observable<number> | ko.Computed<number>;
	    horizontalSpacing: ko.Observable<number> | ko.Computed<number>;
	    fullCellWidth: ko.Computed<number>;
	    fullCellHeight: ko.Computed<number>;
	    cellSize: ISize;
	    rtl: () => boolean;
	    vertical: ko.Computed<number>;
	    horizontal: ko.Computed<number>;
	    topEmptySpace: ko.Computed<number>;
	    leftEmptySpace: ko.Computed<number>;
	    cells: ko.ObservableArray<any>;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
	export class XRLineSurface extends XRControlSurface {
	    constructor(control: XRControlViewModel, context: ISurfaceContext);
	    linePosition: any;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;

	export class XRBarCodeViewModel extends XRControlViewModel {
	    static unitProperties: any[];
	    createBarcode(model: any, serializer?: any): {
	        'name': ko.Observable<any>;
	        'getInfo': () => DevExpress.Analytics.Utils.ISerializationInfoArray;
	    };
	    constructor(model: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    symbology: any;
	    barcodeFake: any;
	}
	export class XRBarcodeSurface extends XRControlSurface {
	    constructor(control: XRControlViewModel, context: ISurfaceContext);
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;

	export class XRZipCodeSurface extends XRControlSurface {
	    constructor(control: XRControlViewModel, context: ISurfaceContext);
	    fontSize: ko.Computed<number>;
	    letterSpacing: ko.Computed<number>;
	}

}
declare module DevExpress.Reporting.Designer.Controls {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
    import TodoControlSurface = DevExpress.Reporting.Designer.Internal.TodoControlSurface;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;

    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
	export class XRSparklineViewModel extends XRControlViewModel {
	    createView(model: any, serializer?: any): {
	        'type': ko.Observable<any>;
	        'getInfo': () => any;
	    };
	    constructor(model: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    getPath(propertyName: any): any;
	    view: any;
	    dataSource: ko.Observable<any>;
	    dataMember: ko.Observable<string> | ko.Computed<string>;
	    sparklineFake: any;
	    valueMember: ko.Observable<string> | ko.Computed<string>;
	}
	export class XRSparkLineSurface extends TodoControlSurface {
	    constructor(control: XRControlViewModel, context: ISurfaceContext);
	}

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var pageBreakSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Bands {
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;
    import BandSurface = DevExpress.Reporting.Designer.Bands.BandSurface;;
    import ReportSurface = DevExpress.Reporting.Designer.Controls.ReportSurface;;
	export class TopMarginBand extends BandViewModel {
	    initHeight(): void;
	}
	export class BottomMarginBand extends BandViewModel {
	    initHeight(): void;
	}
	export class BottomMarginSurface extends BandSurface {
	    getBackgroundRect(): {
	        top: number;
	        bottom: any;
	        height: number;
	    };
	    parent: ReportSurface;
	}

}
declare module DevExpress.Reporting.Designer.Bands.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var detailReportBandSerializationInfo: ISerializationInfoArray;
	export var popularPropertiesDetailReport: string[];

}
declare module DevExpress.Reporting.Designer.Bands {
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;;
    import GroupFieldModel = DevExpress.Reporting.Designer.Bands.GroupFieldModel;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
	export interface ISortingSummary {
	    enabled: boolean;
	    Function: string;
	    fieldName: string;
	    ignoreNullValues: string;
	    sortOrder: string;
	    getPath: (propertyName: string) => string;
	}
	export class GroupHeaderBand extends BandViewModel {
	    dispose(): void;
	    constructor(band: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    groupFields: ko.ObservableArray<GroupFieldModel>;
	    sortingSummary: ISortingSummary;
	}

}
declare module DevExpress.Reporting.Designer.Bands {
    import BandSurface = DevExpress.Reporting.Designer.Bands.BandSurface;;
    import ReportSurface = DevExpress.Reporting.Designer.Controls.ReportSurface;;
	export class PageFooterSurface extends BandSurface {
	    getBackgroundRect(): {
	        top: number;
	        bottom: any;
	        height: number;
	    };
	    parent: ReportSurface;
	}

}
declare module DevExpress.Reporting.Designer.Bands.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var commonVerticalBandProperties: ISerializationInfoArray;
	export var bandLayout: ISerializationInfo;
	export var verticalHeaderBandSerializationInfo: ISerializationInfoArray;
	export var popularPropertiesVerticalHeaderBand: string[];
	export var verticalTotalBandSerializationInfo: ISerializationInfoArray;
	export var popularPropertiesVerticalTotalBand: string[];

}
declare module DevExpress.Reporting.Designer.Bands.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var verticalDetailBandSerializationInfo: ISerializationInfoArray;
	export var popularPropertiesVerticalDetailBand: string[];

}
declare module DevExpress.Reporting.Designer.Bands {
    import VerticalBandViewModel = DevExpress.Reporting.Designer.Bands.VerticalBandViewModel;;
    import GroupFieldModel = DevExpress.Reporting.Designer.Bands.GroupFieldModel;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
	export class VerticalDetailBandViewModel extends VerticalBandViewModel {
	    dispose(): void;
	    preInit(band: any, parent: ElementViewModel, serializer?: ModelSerializer): void;
	    sortFields: ko.ObservableArray<GroupFieldModel>;
	}

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var tableRowSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Controls.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var crossTabSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Internal {
	export function registerControls(fieldListProvider?: any): void;

}
declare module DevExpress.Reporting.Designer.Internal {
    import PropertiesAccessibilityProvider = DevExpress.Analytics.Internal.PropertiesAccessibilityProvider;;
    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class LocaliziblePropertiesAccessibilityProvider extends PropertiesAccessibilityProvider {
	    private isDefaultLanguage;
	    constructor(isDefaultLanguage: ko.Computed<boolean>);
	    isPropertyVisible(editor: Editor): any;
	    _hasLocalizedParent(parent: Editor): any;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import StyleModel = DevExpress.Reporting.Designer.Controls.StyleModel;;

	export class StylesEditorHeaderModel {
	    static newItem: string;
	    static newItemTextId: string;
	    constructor(styleName: ko.Observable<string>, styles: ko.ObservableArray<StyleModel>, disabled: ko.Observable<boolean>, popupContainer: string);
	    items: ko.Computed<StyleModel[]>;
	    value: any;
	    onValueChanged: (e: any) => void;
	    displayExpr: string;
	    valueExpr: string;
	    displayCustomValue: boolean;
	    placeholder: any;
	    noDataText: any;
	    disabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    dropDownOptions: any;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import EditorAddOn = DevExpress.Analytics.Internal.EditorAddOn;
    import IModelAction = DevExpress.Analytics.Internal.IModelAction;
    import PopupService = DevExpress.Analytics.Internal.PopupService;;
    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class DesignerEditorAddOn extends EditorAddOn {
	    imageTemplateName: string;
	    constructor(editor: Editor, popupService: PopupService, imageTemplateName?: string);
	    onPopupShown(popupService: PopupService): void;
	    showPopup(_: any, element: any): void;
	}
	export class ExpressionEditorAddOn extends DesignerEditorAddOn {
	    actionFilter(action: IModelAction): boolean;
	    onPopupShown(popupService: PopupService): void;
	}
	export class ValueEditorAddOn extends DesignerEditorAddOn {
	    onPopupShown(popupService: PopupService): void;
	    actionFilter(action: IModelAction): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Actions {
    import BaseActionsProvider = DevExpress.Analytics.Internal.BaseActionsProvider;;
    import BaseConverter = DevExpress.Reporting.Designer.Internal.BaseConverter;;
	export class CrossTabActions extends BaseActionsProvider {
	    private _converters;
	    readonly _converter: BaseConverter;
	    constructor(_converters: BaseConverter[], isDisabled?: () => boolean);
	    condition(context: any): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Actions {
    import BaseActionsProvider = DevExpress.Analytics.Internal.BaseActionsProvider;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
    import XRPdfContentViewModel = DevExpress.Reporting.Designer.Controls.XRPdfContentViewModel;;
	export class PdfContentActions extends BaseActionsProvider {
	    private _selection;
	    readonly _focusedPdfContent: XRPdfContentViewModel;
	    constructor(_selection: ISelectionProvider, isDisabled?: () => boolean);
	    condition(context: any): boolean;
	}

}
declare module DevExpress.Reporting.Designer.Tools {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import XRReportElementViewModel = DevExpress.Reporting.Designer.Controls.XRReportElementViewModel;;
    import ReportExpressionEditorWrapper = DevExpress.Reporting.Designer.Widgets.ReportExpressionEditorWrapper;;
    import ISmartTag = DevExpress.Reporting.Designer.Tools.ISmartTag;;
	export class ExpressionSmartTag extends Disposable implements ISmartTag {
	    reportElement: XRReportElementViewModel;
	    constructor(reportElement: XRReportElementViewModel);
	    onClick(): void;
	    templateName: string;
	    imageTemplateName: string;
	    expressionEditor: ko.Observable<ReportExpressionEditorWrapper>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import IReportDesignerRootContext = DevExpress.Reporting.Designer.IReportDesignerRootContext;
    import IReportDesignerContext = DevExpress.Reporting.Designer.IReportDesignerContext;;
    import IReportDesignerCustomizationHandler = DevExpress.Reporting.Designer.Utils.IReportDesignerCustomizationHandler;
    import IReportWizardSettings = DevExpress.Reporting.Designer.Utils.IReportWizardSettings;;
    import IPreviewCustomizationHandler = DevExpress.Reporting.Viewer.Utils.IPreviewCustomizationHandler;;
    import DataBindingModeValue = DevExpress.Reporting.Designer.Utils.DataBindingModeValue;
    import DefaultCrossTabControlValue = DevExpress.Reporting.Designer.Utils.DefaultCrossTabControlValue;;
    import ReportDialogSettings = DevExpress.Reporting.Designer.Internal.ReportDialogSettings;
    import PreviewOptions = DevExpress.Reporting.Designer.Internal.PreviewOptions;
    import IReportUriSettings = DevExpress.Reporting.Designer.Internal.IReportUriSettings;
    import WizardsInitializerSettings = DevExpress.Reporting.Designer.Internal.WizardsInitializerSettings;
    import IReportDesignerGeneratorSettings = DevExpress.Reporting.Designer.Internal.IReportDesignerGeneratorSettings;;
    import ReportMenuSettings = DevExpress.Reporting.Designer.Internal.ReportMenuSettings;;
    import ReportItemsProvider = DevExpress.Reporting.Designer.Internal.ReportItemsProvider;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import TabInfo = DevExpress.Analytics.Utils.TabInfo;
    import ToolboxItem = DevExpress.Analytics.Utils.ToolboxItem;
    import TabPanel = DevExpress.Analytics.Utils.TabPanel;;

    import IActionsProvider = DevExpress.Analytics.Internal.IActionsProvider;
    import CommonDesignerGenerator = DevExpress.Analytics.Internal.CommonDesignerGenerator;
    import IPropertiesAccessibilityProvider = DevExpress.Analytics.Internal.IPropertiesAccessibilityProvider;
    import SelectionSettings = DevExpress.Analytics.Internal.SelectionSettings;
    import GroupObject = DevExpress.Analytics.Internal.GroupObject;
    import ControlsHelperSettings = DevExpress.Analytics.Internal.ControlsHelperSettings;
    import ContextActionsSettings = DevExpress.Analytics.Internal.ContextActionsSettings;
    import ActionLists = DevExpress.Analytics.Internal.ActionLists;
    import IDesignerPart = DevExpress.Analytics.Internal.IDesignerPart;
    import InlineTextEdit = DevExpress.Analytics.Internal.InlineTextEdit;
    import ObjectExplorerProvider = DevExpress.Analytics.Internal.ObjectExplorerProvider;;
    import IDataSourceWizardConnectionStrings = DevExpress.Analytics.Wizard.IDataSourceWizardConnectionStrings;;
	export class ReportDesignerInitializer extends CommonDesignerGenerator<IReportDesignerRootContext> {
	    private options;
	    private _navigation;
	    private _selection;
	    private _onAfterRenderCallbacks;
	    private _sqlDataSourceEditor;
	    private _jsonDataSourceEditor;
	    private _objectDataSourceEditor;
	    private _dataSourceActionProvider;
	    private _previewUri;
	    private _dataBiningMode;
	    private _defaultCrossTabControl;
	    private _converters;
	    private _parameters;
	    private _calculatedFieldsSource;
	    private _convertBindingsToExpressions;
	    private _reportcontext;
	    readonly reportContext: ko.Computed<IReportDesignerContext>;
	    private _allowMDI;
	    private _callbacks;
	    private _customMergeEngine;
	    private _accessibilityProvider;
	    readonly buildingModel: IReportDesignerRootContext;
	    private readonly _designerCallbacks;
	    subscribeIncomeReport(report: ko.Observable | ko.Computed, reportUrl?: ko.Observable<string> | ko.Computed<string>, dataSourceRefs?: any[]): this;
	    private _addDisposable;
	    private _tryAddScriptEditor;
	    private _getControls;
	    private _createEmptyReportItemsProvider;
	    addReportDialogs(func: (settings: ReportDialogSettings) => void): this;
	    addErrorPanelViewModel(element: any): this;
	    addNavigateToControl(element?: Element): this;
	    addFlagsAndInitProperties(element?: Element): this;
	    addPreview(options: PreviewOptions): this;
	    addReportUrls(subreports: any): this;
	    private _wrapActionProvider;
	    initializeFieldListActionProviders(func?: () => IActionsProvider[]): this;
	    initializeCalculatedFieldsSource(): this;
	    initializeFieldListItemsExtenders(): this;
	    initializeParameters(): this;
	    initializeFieldListProvider(): this;
	    initializeReportItemsProvider(): this;
	    initializeDataBindingsProvider(): this;
	    initializeDisplayNameProvider(): this;
	    initializeExpressionDisplayNameProvider(): this;
	    initializeDataSourceHelper(): this;
	    addSelection(func?: (settings: SelectionSettings) => void): this;
	    addToolboxItems(items?: () => ToolboxItem[]): this;
	    addGroupedToolboxItems(): this;
	    addControlProperties(editors: ISerializationInfoArray, groups: GroupObject, accessibilityProvider?: IPropertiesAccessibilityProvider): this;
	    createControlProperties(editors: ISerializationInfoArray, groups: GroupObject, accessibilityProvider?: IPropertiesAccessibilityProvider): DevExpress.Analytics.Internal.ControlProperties;
	    addMenu(func?: (settings: ReportMenuSettings) => void): this;
	    addControlsHelper(func?: (settings: ControlsHelperSettings) => void): this;
	    addSmartTagModel(): this;
	    setControlsHelperFilter(filter: (control: any) => boolean): any;
	    private _createPropertiesTab;
	    private _createExpressionsTab;
	    private _createReportExplorerTab;
	    private _createFieldListTab;
	    addTabPanel(panel?: () => TabPanel, addTabInfo?: () => TabInfo[]): this;
	    private _createActionsStorage;
	    private _updateCallback;
	    addOpenReportMethod(): this;
	    addShowPreviewMethod(): this;
	    initializeUIEffects(applyBindings: boolean, element: Element): this;
	    private _createNewViaWizardAction;
	    private _createLocalizationModeAction;
	    private _createDesignInReportWizardAction;
	    private _createMultiQueryDataSourceWizardAction;
	    private _customizeDesignerActions;
	    private _patchReportBeforeRedesign;
	    private _restoreAfterFail;
	    addContextActions(func?: (contextActions: ContextActionsSettings) => void): this;
	    addActionList(actionListFunc?: () => ActionLists): this;
	    private _createChartDesignerPart;
	    private _createWizardPart;
	    addParts(func?: (parts: any) => IDesignerPart[]): this;
	    addDefaultAddons(addons?: IDesignerPart[]): this;
	    tryAddSqlDataSourceEditorAddon(relationsEditor?: ko.Observable<DevExpress.QueryBuilder.Widgets.Internal.MasterDetailEditor>): this;
	    tryAddScriptEditorAddon(isScriptsDisabled: any): this;
	    tryAddInlineRichTextEdit(): this;
	    onContextChanged(subreports?: any, func?: (context: IReportDesignerContext) => void): this;
	    configurateRtl(rtl: boolean): this;
	    configureReportStorageRegistration(reportStorageIsRegister: boolean, allowMDI: boolean): this;
	    applyUri(uriSettings: IReportUriSettings): this;
	    initBindingMode(dataBiningMode: string, convertBindingsToExpressions: string): this;
	    initDefaultCrossTabControl(defaultCrossTabControl: DefaultCrossTabControlValue): this;
	    registerControls(dataBindingMode: DataBindingModeValue, reportItemsProvider: ko.Observable<ReportItemsProvider> | ko.Computed<ReportItemsProvider>): this;
	    addCallbacks(callbacks: {
	        designer?: IReportDesignerCustomizationHandler;
	        preview?: IPreviewCustomizationHandler;
	    }): this;
	    addProcessErrorCallback(processError?: (e: any) => void): this;
	    runCustomizeToolboxEvent(customizeToolbox?: (controlsStore: DevExpress.Reporting.Designer.Controls.ControlsFactory) => void): this;
	    addLocalization(localization: any): this;
	    initCultureInfo(cultureInfoList: any): this;
	    updateFont(fontSet: string[] | {
	        [key: string]: string;
	    }): this;
	    initFormatStringPatterns(formatStringData: any): this;
	    addPopularProperties(controlsFactory: any, accessibilityProvider?: IPropertiesAccessibilityProvider): this;
	    addInlineTextEdit(func: () => InlineTextEdit): this;
	    addStylesProjection(styles?: ko.PureComputed<ko.ObservableArray<DevExpress.Reporting.Designer.Controls.StyleModel>>): this;
	    addFormattingRulesProjection(rules?: ko.PureComputed<ko.ObservableArray<DevExpress.Reporting.Designer.Controls.FormattingRule>>): this;
	    addReportExplorerProvider(reportExplorerProvider?: ObjectExplorerProvider): this;
	    addControlsProjection(controlsHelper?: DevExpress.Analytics.Internal.DesignControlsHelper): this;
	    addBandsProjection(controlsHelper?: DevExpress.Analytics.Internal.DesignControlsHelper): this;
	    addWizardRunner(): this;
	    addWizards(connectionStrings: IDataSourceWizardConnectionStrings, wizardSettings: IReportWizardSettings, cusomizeSettingsFunc: (settings: WizardsInitializerSettings) => void): this;
	    addLocalizationEditor(): this;
	    addStaticContext(): this;
	    tryApplyBindings(applyBindings: boolean, element: Element): this;
	    dispose(): void;
	    constructor(options: IReportDesignerGeneratorSettings);
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import IReportDesignerInitializationData = DevExpress.Reporting.Designer.Utils.IReportDesignerInitializationData;
    import IReportDesignerCustomizationHandler = DevExpress.Reporting.Designer.Utils.IReportDesignerCustomizationHandler;
    import IReportDesignerInitializationModel = DevExpress.Reporting.Designer.Utils.IReportDesignerInitializationModel;;
    import IPreviewCustomizationHandler = DevExpress.Reporting.Viewer.Utils.IPreviewCustomizationHandler;;
    import IEnumType = DevExpress.Reporting.IEnumType;;
    import ILocalizationSettings = DevExpress.Analytics.Internal.ILocalizationSettings;;
	export function createReportDesigner(element: Element, data: IReportDesignerInitializationData, callbacks: {
	    designer?: IReportDesignerCustomizationHandler;
	    preview?: IPreviewCustomizationHandler;
	}, localizationSettings?: ILocalizationSettings, knownEnums?: Array<IEnumType>, designerHandlerUri?: string, previewHandlerUri?: string, rtl?: boolean, applyBindings?: boolean): JQueryDeferred<any>;
	export function createReportDesignerFromModel(model: IReportDesignerInitializationModel, element: Element, callbacks?: {
	    designer?: IReportDesignerCustomizationHandler;
	    preview?: IPreviewCustomizationHandler;
	}, applyBindings?: boolean): JQueryDeferred<any>;

}
declare module DevExpress.Reporting.Designer {

    import IReportDesignerInitializationModel = DevExpress.Reporting.Designer.Utils.IReportDesignerInitializationModel;
    import IReportDesignerCustomizationHandler = DevExpress.Reporting.Designer.Utils.IReportDesignerCustomizationHandler;;
    import IPreviewCustomizationHandler = DevExpress.Reporting.Viewer.Utils.IPreviewCustomizationHandler;;
    import JSReportDesigner = DevExpress.Reporting.Designer.JSReportDesigner;;
    import ICommonBindingCustomizationHandler = DevExpress.Analytics.Internal.ICommonBindingCustomizationHandler;
    import JSDesignerBindingCommon = DevExpress.Analytics.Internal.JSDesignerBindingCommon;;
	export interface IJSDesignerCallbacks extends ICommonBindingCustomizationHandler<JSReportDesigner> {
	    designer?: IReportDesignerCustomizationHandler;
	    preview?: IPreviewCustomizationHandler;
	}
	export interface IReportDesignerOptions {
	    designerModel?: any;
	    initializationData?: IReportDesignerInitializationModel | ko.Observable<IReportDesignerInitializationModel>;
	    requestOptions?: {
	        host: string;
	        getDesignerModelAction: string;
	        getLocalizationAction?: string;
	    };
	    callbacks?: IJSDesignerCallbacks;
	    reportModel?: any;
	    reportUrl?: any;
	    parts?: any[];
	    limitation?: boolean;
	    undoEngine?: any;
	    developmentMode?: boolean;
	}
	export class JSReportDesignerBinding extends JSDesignerBindingCommon<JSReportDesigner, IReportDesignerOptions> {
	    private _initializationData;
	    private _callbacks;
	    private _model;
	    private _deferreds;
	    private _applyBindings;
	    private _initializeCallbacks;
	    private _createModel;
	    private _showErrorInfo;
	    private _getDesignerModelRequest;
	    constructor(_options: IReportDesignerOptions, customEventRaiser?: any);
	    dispose(): void;
	    applyBindings(element: HTMLElement): void;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var dataBindingsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Reporting.Designer.Internal {
	export {};

}
declare module DevExpress.Reporting.Designer.Internal {
    import DataFilterModel = DevExpress.Reporting.Chart.Internal.Models.DataFilterModel;;
	export class DataFilterModelReport extends DataFilterModel {
	    getInfo(): any[];
	    private _createReportDataProperty;
	    private _mapObject;
	    constructor(model: any, serializer?: any);
	    dataMember: ko.Observable<string> | ko.Computed<string>;
	    dataSource: ko.Observable<any>;
	    misc: any;
	    report: any;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
	export {};

}
declare module DevExpress.Reporting {

    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
    import UndoEditor = DevExpress.QueryBuilder.Widgets.Internal.UndoEditor;;
	export class BandLevelEditor extends UndoEditor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    max: ko.PureComputed;
	    min: number;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export class CoordinateGridViewModel extends Disposable {
	    _initGrid(length: number, gridSize: number, gridLines: ko.ObservableArray<any>, flip?: boolean): void;
	    constructor(options: {
	        height: ko.Observable<number> | ko.Computed<number>;
	        width: ko.Observable<number> | ko.Computed<number>;
	        snapGridSize: ko.Observable<number> | ko.Computed<number>;
	        zoom: ko.Observable<number> | ko.Computed<number>;
	        measureUnit: ko.Observable<string> | ko.Computed<string>;
	        flip?: ko.Observable<boolean> | ko.Computed<boolean>;
	    });
	    width: ko.Observable<number>;
	    height: ko.Observable<number>;
	    verticalGridLines: ko.ObservableArray<any>;
	    horizontalGridLines: ko.ObservableArray<any>;
	    majorVerticalGridLines: ko.ObservableArray<any>;
	    majorHorizontalGridLines: ko.ObservableArray<any>;
	    dispose(): void;
	}

}
declare module DevExpress.Reporting.Designer.Internal.HtmlMarkUp {
	export interface IDiplayNameParameters {
	    text: string;
	    wordWrap?: boolean;
	    fontSize?: number;
	    fontUnit?: string;
	}
	export interface IInheritValues {
	    fontSize?: number;
	    backcolor?: boolean;
	}
	export interface ITag {
	    node: Element;
	    element: HTMLElement;
	    createElement: () => any;
	    appendTo: (el: HTMLElement) => void;
	    hasChildNodes: boolean;
	    setProperties: (parameters?: IDiplayNameParameters, inheritValues?: IInheritValues) => any;
	    value?: any;
	    inheritValues: IInheritValues;
	}
	export class ValueConverter {
	    private _displayNameParameters;
	    static ValueAttrName: string;
	    private _regExp;
	    private _createTag;
	    private _parceToXml;
	    private _checkValidTag;
	    private _createTree;
	    constructor(_displayNameParameters: IDiplayNameParameters);
	    appendTo(element: HTMLElement): void;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
	export {};

}
declare module DevExpress.Reporting.Designer.Internal {
    import IControlPropertiesViewModel = DevExpress.Analytics.Internal.IControlPropertiesViewModel;;
    import FontModel = DevExpress.Analytics.Widgets.Internal.FontModel;;

	export class ExpressionableFontModel extends FontModel {
	    private _model;
	    constructor(value: ko.Observable<string> | ko.Computed<string>, _model: ko.Observable<IControlPropertiesViewModel> | ko.Computed<IControlPropertiesViewModel>);
	    modificators: {
	        bold: ko.Observable<boolean>;
	        boldHasExpression: ko.Computed<boolean>;
	        italic: ko.Observable<boolean>;
	        italicHasExpression: ko.Computed<boolean>;
	        strikeout: ko.Observable<boolean>;
	        strikeoutHasExpression: ko.Computed<boolean>;
	        underline: ko.Observable<boolean>;
	        underlineHasExpression: ko.Computed<boolean>;
	    };
	    isPropertyHighlighted: (propertyName: any) => boolean;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export class RulerViewModel extends Disposable {
	    _initGrid(length: number, gridSize: any, gridLines: any, flip?: boolean): void;
	    constructor(options: {
	        length: () => number;
	        units: ko.Observable<string> | ko.Computed<string>;
	        zoom: ko.Observable<number> | ko.Computed<number>;
	        direction?: string;
	        flip?: any;
	        disable?: {
	            start: number;
	            width: number;
	        };
	    });
	    height: ko.Observable<number>;
	    width: ko.Observable<number>;
	    gridLines: ko.ObservableArray<any>;
	    majorGridLines: ko.ObservableArray<any>;
	    disable: any;
	    defaultGridLinesCoordinate: ko.Observable<any>;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import BandSurface = DevExpress.Reporting.Designer.Bands.BandSurface;;
    import ReportSurface = DevExpress.Reporting.Designer.Controls.ReportSurface;;
	export interface WatermarkBindingOptions {
	    band: BandSurface;
	    reportSurface: ReportSurface;
	    forLeftMargin: boolean;
	    image: string;
	    transparency: number;
	    viewMode: string;
	    align: string;
	    tiling: boolean;
	}

}
declare module DevExpress.Reporting.Designer.Internal {

    import _dxtInherit = DevExpress.Analytics.Internal._dxtInherit;;
	export class dxEventDropDownEditor extends _dxtInherit {
	    getComponentName(): string;
	    ctor(): void;
	    _getDefaultOptions(): any;
	    _init(): void;
	    _initSecondAction(): void;
	    _render(): void;
	    _renderDropDownButton(): void;
	    _createEllipsisButton(): any;
	    _attachEllipsisButtonClickHandler(): void;
	    _optionChanged(args: any): void;
	}

}
declare module DevExpress.Reporting.Designer.Internal {
    import IFormatStringEditorActions = DevExpress.Analytics.Widgets.IFormatStringEditorActions;;
	export class FormatStringService {
	    static saveCustomPattern(typeString: string, format: string): any;
	    static removeCustomPattern(typeString: string, format: string): any;
	    static updatePreview(value: string, typeString: string, format: string): any;
	    static actions: IFormatStringEditorActions;
	}

}
declare module DevExpress.Reporting.Designer.Widgets.Internal {
    import XRControlViewModel = DevExpress.Reporting.Designer.Controls.XRControlViewModel;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;
    import IExpressionOptions = DevExpress.Analytics.Widgets.IExpressionOptions;;
	export interface ISummaryOptions {
	    ignoreNullValues: ko.Observable<boolean> | ko.Computed<boolean>;
	    treatStringsAsNumerics: ko.Observable<boolean> | ko.Computed<boolean>;
	    Running: ko.Observable<string> | ko.Computed<string>;
	}
	export class SummaryEditorPopup {
	    dispose(): void;
	    model: ko.Observable<SummaryEditorModel>;
	    grid: ObjectProperties;
	    visible: ko.Observable<boolean>;
	    container: (element: HTMLElement) => JQuery<HTMLElement>;
	    buttons: {
	        toolbar: string;
	        location: string;
	        widget: string;
	        options: {
	            text: any;
	            onClick: () => void;
	        };
	    }[];
	}
	export class SummaryEditorModel extends Disposable {
	    private _control;
	    dispose(): void;
	    private _summary;
	    private _order;
	    private _summaryFunctionValues;
	    private _info;
	    private _initExpressionValues;
	    getInfo(): ISerializationInfoArray;
	    constructor(_control: XRControlViewModel);
	    patchSerializationInfo(info: ISerializationInfo): void;
	    applyChanges(): void;
	    isPropertyDisabled(propertyName: string): boolean;
	    isDisabled(): boolean;
	    Func: ko.Observable<string>;
	    calculate: IExpressionOptions;
	    weight: IExpressionOptions;
	    ignoreNullValues: ko.Observable<boolean> | ko.Computed<boolean>;
	    treatStringsAsNumerics: ko.Observable<boolean> | ko.Computed<boolean>;
	    Running: ko.Observable<string> | ko.Computed<string>;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import BandViewModel = DevExpress.Reporting.Designer.Bands.BandViewModel;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
    import Editor = DevExpress.Analytics.Widgets.Editor;;

	export class BandEditorBase extends Editor {
	    generateValue: (bands: (filter?: any, noneNeaded?: any) => ko.Computed<any>) => any;
	    bands: any;
	    filter: (item: BandViewModel) => boolean;
	    noneNeaded: boolean;
	}
	export class RunningBandEditor extends BandEditorBase {
	    filter: (item: BandViewModel) => boolean;
	    noneNeaded: boolean;
	}
	export class BandsEditor extends BandEditorBase {
	    filter: (item: BandViewModel) => boolean;
	    noneNeaded: boolean;
	}
	export class SortingBandEditor extends BandEditorBase {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    filter: (item: BandViewModel) => boolean;
	    noneNeaded: boolean;
	}
	export class PageBreakBandEditor extends Editor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    values: ko.Computed<{
	        displayValue: string;
	        value: string;
	    }[]>;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import Parameter = DevExpress.Reporting.Designer.Data.Parameter;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;;

    import TreeListController = DevExpress.Analytics.Widgets.Internal.TreeListController;;
    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class ChartValueBindingEditor extends Editor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    generateDisplayValue(reportDataSource: ko.Observable<IDataSourceInfo>): string;
	    generateValue(undoEngine: UndoEngine, reportParameters: ko.ObservableArray<Parameter>, reportDataSource: ko.Observable<IDataSourceInfo>): ko.Observable<string> | ko.Computed<string>;
	    treeListController: TreeListController;
	    binding: ko.Observable<string> | ko.Computed<string>;
	    displayBinding: ko.Observable<string> | ko.Computed<string>;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import DataSourceHelper = DevExpress.Reporting.Designer.Internal.DataSourceHelper;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;

    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class DataSourceEditor extends Editor {
	    private _getEditorOptions;
	    dispose(): void;
	    getEditorOptions(dataSourceHelper: ko.Observable<DataSourceHelper>, undoEngine: ko.Observable<UndoEngine>, popupContainer: string): any;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;

    import ObjectExplorerProvider = DevExpress.Analytics.Internal.ObjectExplorerProvider;
    import ObjectStructureTreeListController = DevExpress.Analytics.Internal.ObjectStructureTreeListController;;
    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class ExplorerEditor extends Editor {
	    constructor(modelPropertyInfo: any, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    private _collectionNames;
	    private _isEqualModel;
	    private _isVisible;
	    treeListController: ObjectStructureTreeListController;
	    displayExpr: ko.Observable<string> | ko.Computed<string>;
	    itemsProvider: ObjectExplorerProvider;
	}
	export class DrillDownEditor extends ExplorerEditor {
	    private _setDisabled;
	    private _findFistAvailableBand;
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    path: ko.Observable<any>;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;

    import FontEditor = DevExpress.Analytics.Widgets.FontEditor;
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;;
	export class ExpressionableFontEditor extends FontEditor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    createObjectProperties(): ObjectProperties;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import IDisplayNameProvider = DevExpress.Analytics.Utils.IDisplayNameProvider;;

    import FieldListEditor = DevExpress.Analytics.Widgets.FieldListEditor;;
	export class FieldsComboboxEditor extends FieldListEditor {
	    private _createItem;
	    private _updateValues;
	    wrapValues(displayNameProvider: ko.Observable<IDisplayNameProvider>): any;
	    wrappedValues: any;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class FormatStringEditor extends Editor {
	    readonly actions: DevExpress.Analytics.Widgets.IFormatStringEditorActions;
	    readonly customPatterns: (newVal?: {
	        [key: string]: string[];
	    }) => {
	        [key: string]: string[];
	    };
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;

    import ICollectionEditorOptions = DevExpress.Analytics.Widgets.Internal.ICollectionEditorOptions;;
    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class FormattingRuleEditor extends Editor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    options: ICollectionEditorOptions;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;

    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class GaugeStyleEditor extends Editor {
	    private _viewModel;
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    update(viewModel: any): void;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import IFileUploadResult = DevExpress.Analytics.Internal.IFileUploadResult;;
    import dxFileImagePicker = DevExpress.Analytics.Widgets.Internal.dxFileImagePicker;;
	export class dxImageSourceEditor extends dxFileImagePicker {
	    updateOptions(options: any): void;
	    _toggleReadOnlyState(): void;
	    _handleResult(result: IFileUploadResult): void;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;

    import IDisplayedObject = DevExpress.Analytics.Internal.IDisplayedObject;;
    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class NameEditor extends Editor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    _getEditorValidationRules(): any;
	    generateRules(allControls: ko.ObservableArray<IDisplayedObject>): any;
	    currentValidationRules: any;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IDisplayNameProvider = DevExpress.Analytics.Utils.IDisplayNameProvider;;

    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class PivotGridCriteriaEditor extends Editor {
	    private _createItemsProvider;
	    private _getFieldName;
	    private _createDisplayNameProvider;
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    wrapModel(fieldListProvider: any): this;
	    itemsProvider: IItemsProvider;
	    displayNameProvider: IDisplayNameProvider;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {

    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;

    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;
    import PropertyGridEditor = DevExpress.Analytics.Widgets.PropertyGridEditor;
    import FieldListEditor = DevExpress.Analytics.Widgets.FieldListEditor;;
	export class ContentByTypeEditor extends PropertyGridEditor {
	    createObjectProperties(): ObjectProperties;
	    getViewModel(): ko.Computed<any>;
	}
	export class DataBindingsEditor extends PropertyGridEditor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    createObjectProperties(): ObjectProperties;
	}
	export class DataBindingEditor extends FieldListEditor {
	    readonly actions: DevExpress.Analytics.Widgets.IFormatStringEditorActions;
	    readonly customPatterns: (newVal?: {
	        [key: string]: string[];
	    }) => {
	        [key: string]: string[];
	    };
	}
	export class FontEditorUndo extends PropertyGridEditor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    generateValue(undoEngine: ko.Observable<UndoEngine>): any;
	    createObjectProperties(): ObjectProperties;
	    undoEngine: ko.Observable<UndoEngine>;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {

    import Editor = DevExpress.Analytics.Widgets.Editor;;
    import WrappedExpressionOptions = DevExpress.Reporting.Designer.Internal.WrappedExpressionOptions;;
	export class ReportExpressionEditor extends Editor {
	    private _adapter;
	    constructor(modelPropertyInfo: any, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    patchOptions(reportExplorerProvider: any, editableObject: any): boolean;
	    popupVisible: ko.Observable<boolean>;
	    value: ko.Computed<WrappedExpressionOptions>;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {

    import ReportExpressionEditorWrapper = DevExpress.Reporting.Designer.Widgets.ReportExpressionEditorWrapper;;
    import ReportExpressionEditor = DevExpress.Reporting.Designer.Widgets.ReportExpressionEditor;;
	export class ReportComplexExpressionEditor extends ReportExpressionEditor {
	    wrapper: ReportExpressionEditorWrapper;
	    constructor(modelPropertyInfo: any, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    showPopup(editableObject: any): void;
	    editorTemplateName: string;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import IKeyValuePair = DevExpress.Reporting.IKeyValuePair;;
    import INavigateTab = DevExpress.Reporting.Designer.Tools.INavigateTab;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;

    import Editor = DevExpress.Analytics.Widgets.Editor;;
    import DataSource =  DevExpress.data.DataSource ;;
	export class ReportUrlEditor extends Editor {
	    private _initUrls;
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    getValues(urls: ko.ObservableArray<IKeyValuePair<string>>, tab: ko.Observable<INavigateTab>): ko.Computed<DataSource>;
	    updateUrls(): void;
	    urls: ko.Computed<IKeyValuePair<string>[]> | ko.Observable<IKeyValuePair<string>[]>;
	    dataSource: ko.Computed<DataSource>;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;

    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class ComboboxUndoEditor extends Editor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    generateValue(undoEngine: ko.Observable<UndoEngine>): ko.Observable<any> | ko.Computed<any>;
	    undoValue: ko.Observable | ko.Computed;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
    import SummaryEditorModel = DevExpress.Reporting.Designer.Widgets.Internal.SummaryEditorModel;
    import SummaryEditorPopup = DevExpress.Reporting.Designer.Widgets.Internal.SummaryEditorPopup;;
    import PropertyGridEditor = DevExpress.Analytics.Widgets.PropertyGridEditor;;
	export class SummaryEditor extends PropertyGridEditor {
	    dispose(): void;
	    getPopupServiceActions(): DevExpress.Analytics.Internal.IModelAction[];
	    summaryModel: SummaryEditorModel;
	    popup: SummaryEditorPopup;
	}

}
declare module DevExpress.Reporting.Designer.Widgets {
	export function registerEditors(): void;

}
declare module DevExpress.Reporting.Designer.Widgets {
    import IFileUploadResult = DevExpress.Analytics.Internal.IFileUploadResult;;
    import dxFileImagePicker = DevExpress.Analytics.Widgets.Internal.dxFileImagePicker;;
	export class dxRichTextFileEditor extends dxFileImagePicker {
	    constructor(element: any, options?: any);
	    _handleResult(result: IFileUploadResult): void;
	}

}
declare module DevExpress.Reporting.Viewer {
	export class JSReportViewer {
	    private _previewModel;
	    previewModel: any;
	    constructor(_previewModel: ko.Observable<any>);
	    previewExists(): any;
	    GetReportPreview(): any;
	    GetPreviewModel(): any;
	    GetParametersModel(): any;
	    PerformCustomDocumentOperation(customData: any, hideMessageFromUser: any): any;
	    OpenReport(reportName: any): any;
	    Print(pageIndex: any): any;
	    ExportTo(format: any, inlineResult: any): void;
	    GetCurrentPageIndex(): any;
	    GoToPage(pageIndex: any): void;
	    Close(): void;
	    ResetParameters(): void;
	    StartBuild(): any;
	    UpdateLocalization(localization: any): void;
	    AdjustControlCore(): void;
	}

}
declare module DevExpress.Reporting.Viewer {
    import IPreviewCustomizationHandler = DevExpress.Reporting.Viewer.Utils.IPreviewCustomizationHandler;;
    import JSReportViewer = DevExpress.Reporting.Viewer.JSReportViewer;;
    import ICommonBindingCustomizationHandler = DevExpress.Analytics.Internal.ICommonBindingCustomizationHandler;
    import IJSDesignerBindingCommonOptions = DevExpress.Analytics.Internal.IJSDesignerBindingCommonOptions;
    import JSDesignerBindingCommon = DevExpress.Analytics.Internal.JSDesignerBindingCommon;;
	export interface IJSReportViewerCallbacks extends IPreviewCustomizationHandler, ICommonBindingCustomizationHandler<JSReportViewer> {
	}
	export interface IReportViewerOptions extends IJSDesignerBindingCommonOptions {
	    viewerModel?: any;
	    reportPreview?: any;
	    callbacks?: IJSReportViewerCallbacks;
	    parts?: any[];
	    handlerUri?: string;
	    requestOptions?: {
	        host?: string;
	        invokeAction: string;
	        getLocalizationAction?: string;
	    };
	    documentId?: string;
	    reportId?: string;
	    reportUrl?: any;
	    keepReportOnComponentDisposal?: boolean;
	}
	export class JSReportViewerBinding extends JSDesignerBindingCommon<JSReportViewer, IReportViewerOptions> {
	    private _callbacks;
	    private _deferreds;
	    private _closeReportOnDisposing;
	    dispose(): void;
	    private _initializeEvents;
	    private _initializeCallbacks;
	    private _applyBindings;
	    constructor(_options: IReportViewerOptions, customEventRaiser?: any);
	    _createModel(element: any): JQueryDeferred<DevExpress.Reporting.Viewer.Internal.PreviewDisposableModel>;
	    applyBindings(element: any): void;
	}

}
declare module DevExpress.Reporting.Viewer.Internal {
	export {};

}
declare module DevExpress.Reporting.Viewer.Mobile.Internal {

    import _dxtInherit = DevExpress.Analytics.Internal._dxtInherit;;
	export interface BlockItem {
	    element: JQuery;
	    left: number;
	}
	export class dxGalleryReportPreview extends _dxtInherit {
	    getComponentName(): string;
	    ctor(element: any, options: any): void;
	    repaint(): void;
	    _swipeStartHandler(e: any): void;
	    _getNextIndex(offset: any): any;
	    _setSwipeAnimation(element: BlockItem, difference: any, offset: any, right: boolean): void;
	    _addAnimation(item: any): void;
	    _restoreDefault(item: BlockItem): void;
	    _getItem(index: any, loopTest: any): any;
	    _swipeUpdateHandler(e: any): void;
	    _swipeEndHandler(e: any): void;
	    _endSwipe(): void;
	}

}
declare module DevExpress.Reporting.Viewer.Mobile.Internal {
    import ISlideOptions = DevExpress.Reporting.Viewer.Mobile.ISlideOptions;;
	export var slowdownDisctanceFactor: number;
	export var minScale: number;
	export class EventProcessor {
	    element: any;
	    slideOptions: ISlideOptions;
	    private _direction;
	    private _startingPositionX;
	    private _startingPositionY;
	    private _getFirstPageOffset;
	    getDirection(x?: any, y?: any): {
	        vertical: boolean;
	        horizontal: boolean;
	        scrollDown: boolean;
	    };
	    setPosition(x: any, y: any): void;
	    initialize(x: number, y: number): void;
	    start(e: JQueryEventObject): void;
	    move(e: JQueryEventObject): void;
	    end(e: JQueryEventObject): void;
	    constructor(element: any, slideOptions: ISlideOptions);
	    applySearchAnimation(value: any): void;
	    isLeftMove: boolean;
	    isRightMove: boolean;
	    latestY: number;
	    latestX: number;
	    $window: JQuery<Window>;
	    $element: JQuery;
	    $gallery: JQuery<Element>;
	    $galleryblocks: JQuery<Element>;
	    $body: JQuery;
	    firstMobilePageOffset: {
	        left: number;
	        top: number;
	    };
	}

}
declare module DevExpress.Reporting.Viewer.Mobile.Internal {



}
declare module DevExpress.Reporting.Viewer.Internal {

    import _dxtInherit = DevExpress.Analytics.Internal._dxtInherit;;
	export class dxSearchEditor extends _dxtInherit {
	    _$button: JQuery;
	    _$buttonIcon: JQuery;
	    _$buttons: any[];
	    _searchModel: any;
	    _activeStateUnit: any;
	    _focusRequestRaised: any;
	    _koContext: any;
	    getComponentName(): string;
	    ctor(element: any, options: any): void;
	    findNext(searchUp: boolean): boolean;
	    _init(): void;
	    _render(): void;
	    _renderButton(direction: string): void;
	    _attachButtonEvents(direction: string): void;
	}

}
declare module DevExpress.Reporting.Viewer.Widgets.Internal {
    import IDisplayedValue = DevExpress.Analytics.Utils.IDisplayedValue;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

	export interface IMultiValueItem extends IDisplayedValue {
	    selected?: ko.Observable<boolean> | ko.Computed<boolean>;
	    toggleSelected?: () => void;
	}
	export class MultiValueEditorOptions extends Disposable {
	    private _isValueSelected;
	    constructor(value: ko.Observable<any>, items: Array<IDisplayedValue>);
	    selectedItems: ko.Observable<Array<IMultiValueItem>> | ko.Computed<Array<IMultiValueItem>>;
	    editorValue: ko.Observable<IMultiValueItem> | ko.Computed<IMultiValueItem>;
	    isSelectedAll: ko.Observable<boolean> | ko.Computed<boolean>;
	    _items: Array<IMultiValueItem>;
	    selectedValuesString: ko.Observable<string> | ko.Computed<string>;
	    displayItems: Array<IMultiValueItem>;
	    dataSource: any;
	    updateValue: () => void;
	    onOptionChanged: (e: any) => void;
	    value: ko.Observable | ko.Computed;
	}

}
declare module DevExpress.Reporting.Designer.Controls.RichEdit {
    import RichEdit = DevExpress.RichEdit.RichEdit;;
    import EventManager = DevExpress.Analytics.Utils.EventManager;;
	export type ToolbarActionType = 'ButtonGroup' | 'Button' | 'ComboBox' | 'ColorBox';
	export var ToolbarActionId: {
	    ParagraphAlignmentButtonGroup: string;
	    HyperlinkButton: string;
	    ClearFormattingButton: string;
	    FontStyleButtonGroup: string;
	    ToggleCaseButton: string;
	    FontSizeComboBox: string;
	    FontComboBox: string;
	    FontColorBox: string;
	    BackgroundColorBox: string;
	};
	export var ToolbarGroupId: {
	    AlignmentAndFormatting: string;
	    FontStyleAndCase: string;
	    FontSize: string;
	    Font: string;
	    FontColor: string;
	    BackgroundColor: string;
	};
	export interface IToolbarAction {
	    id?: string;
	    visible?: boolean;
	    template?: string;
	    text?: string;
	    items?: (IToolbarAction | any)[];
	    actionType?: ToolbarActionType;
	    action?: (rich: RichEdit, value: any) => void;
	    hint?: string;
	    icon?: string;
	    defaultValue?: any;
	    selectionMode?: 'multiple' | 'single';
	}
	export interface IToolbarGroup {
	    id: string;
	    visible?: boolean;
	    template?: string;
	    items: (IToolbarAction | any)[];
	    title?: string;
	}
	export interface ICustomizeToolbarActionsEventArgs {
	    actions: IToolbarAction[];
	    getById: (id: string) => IToolbarGroup | IToolbarAction;
	}
	export interface IRichEditEvents {
	    'customizeToolbarActions': ICustomizeToolbarActionsEventArgs;
	}
	export var events: (newVal?: EventManager<any, IRichEditEvents>) => EventManager<any, IRichEditEvents>;

}
declare module DevExpress.Reporting.Designer.Controls.RichEdit {
	export var getRichEditInstance: () => any;

}
declare module DevExpress.Reporting.Designer.Controls.RichEdit.Internal {
    import IToolbarAction = DevExpress.Reporting.Designer.Controls.RichEdit.IToolbarAction;;
    import XRRichTextStreamType = DevExpress.Reporting.Designer.Controls.XRRichTextStreamType;;
    import CommandId = DevExpress.RichEdit.CommandId;;
	export interface IToolbarComponent extends IToolbarAction {
	    command?: CommandId;
	    title?: string;
	}
	export enum RichAction {
	    OpenDocument = 0,
	    SaveDocument = 1,
	    NewDocument = 2
	}
	export interface IRichCore {
	    commandManager: any;
	    model: any;
	    viewManager: any;
	}
	export interface INativeRich {
	    core: IRichCore;
	}
	export interface IRichLoadData {
	    dataFormat: XRRichTextStreamType;
	    data: string;
	    oldText: string;
	}

}
declare module DevExpress.Reporting.Designer.Controls.RichEdit.Internal {
    import RichAction = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.RichAction;;
    import XRRichEditControlModel = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.XRRichEditControlModel;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	interface DispatcherData {
	    queueAction: RichAction;
	    ready: () => void;
	    documentConverted: (result: string) => void;
	    documentFormat: any;
	    base64: any;
	    errorCallBack: () => void;
	}
	export class RichEditLoadDispatcher extends Disposable {
	    protected richEdit: XRRichEditControlModel;
	    constructor(richEdit: XRRichEditControlModel);
	    process(element: DispatcherData): void;
	}
	export {};

}
declare module DevExpress.Reporting.Designer.Controls.RichEdit.Internal.Toolbar {
    import IToolbarAction = DevExpress.Reporting.Designer.Controls.RichEdit.IToolbarAction;
    import IToolbarGroup = DevExpress.Reporting.Designer.Controls.RichEdit.IToolbarGroup;;
    import IToolbarComponent = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.IToolbarComponent;;
    import Locker = DevExpress.Reporting.Internal.Locker;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import getParentContainer = DevExpress.Analytics.Internal.getParentContainer;;
    import RichEdit = DevExpress.RichEdit.RichEdit;
    import CommandStateChangedEventArgs = DevExpress.RichEdit.CommandStateChangedEventArgs;
    import CommandId = DevExpress.RichEdit.CommandId;;

	export interface IValueConverter {
	    toModel: (value: any) => any;
	    fromModel: (value: any) => any;
	}
	interface IComponentBase {
	    template: string;
	    id: string;
	    visible: boolean;
	    items?: ComponentCommon[];
	    _updateStateInternal?(commandIdMap?: Record<number, boolean>): void;
	}
	interface IItem extends IToolbarAction {
	    command: CommandId;
	    value?: any;
	}
	export interface IOptions extends ICommandOptions {
	    visible: ko.Subscribable<boolean>;
	    fonts: string[];
	}
	interface ICommandOptions {
	    commandManager: any;
	    executeCommand: (command: CommandId, params?: any, setFocus?: boolean) => void;
	    richEditPublic: RichEdit;
	} abstract class ComponentCommon extends Disposable implements IComponentBase {
	    protected locker: Locker;
	    protected options: ICommandOptions;
	    protected abstract updateState(): void;
	    protected abstract needUpdateState(commandIdMap: Record<number, boolean>): boolean;
	    _updateStateInternal(commandIdMap?: Record<number, boolean>): void;
	    protected _executeCommand(value?: any, command?: CommandId): any;
	    executeCommand(value?: any, command?: number): void;
	    constructor(options: ICommandOptions, info: IToolbarComponent);
	    unwrapItem(item: IToolbarComponent): IItem;
	    protected getConverter(): IValueConverter;
	    init(info?: IToolbarComponent): void;
	    protected hasCustomValue(): boolean;
	    id: string;
	    template: string;
	    text: string;
	    visible: boolean;
	    action: (rich: RichEdit, value: any) => void;
	    value: ko.Observable;
	    itemKey: string;
	}
	export class CustomComponent extends ComponentCommon {
	    protected updateState(): void;
	    protected needUpdateState(_commandIdMap: Record<number, boolean>): boolean;
	}
	export class Component extends ComponentCommon {
	    private _command;
	    protected needUpdateState(commandIdMap: Record<number, boolean>): boolean;
	    init(info: IToolbarComponent): void;
	    protected updateState(): void;
	    item: IItem;
	}
	export class ComponentButtonGroup extends ComponentCommon {
	    constructor(options: any, info?: IToolbarComponent);
	    protected needUpdateState(commandIdMap: Record<number, boolean>): boolean;
	    init(info: IToolbarComponent): void;
	    private onSelectItems;
	    getCommand(item?: IItem): CommandId;
	    protected updateState(): void;
	    selectedItems: ko.ObservableArray<IItem>;
	    selectionMode: 'multiple' | 'single';
	    itemKey: string;
	    items: IItem[];
	}
	export class ComponentButton extends Component {
	    constructor(options: any, info: IToolbarComponent);
	    clickAction(): void;
	    icon: string;
	    hint: string;
	}
	export class ComponentComboBox extends Component {
	    constructor(options: any, info: IToolbarComponent);
	    protected hasCustomValue(): boolean;
	    items: any[];
	    validationRules: any[];
	    supportCustomValue: boolean;
	}
	export class ComponentFontSizeComboBox extends ComponentComboBox {
	    validationRules: {
	        type: string;
	    }[];
	    supportCustomValue: boolean;
	}
	export class ComponentColorPicker extends Component {
	    constructor(options: any, info: IToolbarComponent);
	    protected getConverter(): IValueConverter;
	    protected hasCustomValue(): boolean;
	}
	export class ComponentCollection implements IToolbarGroup {
	    id: any;
	    title: string;
	    visible: boolean;
	    template: string;
	    constructor(id: any, title?: string, visible?: boolean, template?: string);
	    showTitle: () => string;
	    items: IComponentBase[];
	}
	export class ToolbarSurface extends Disposable {
	    private _popover;
	    private _getDefaultItems;
	    private _initComponentCollection;
	    private _initComponents;
	    private _extendTemplateOptions;
	    constructor(options: IOptions);
	    onCommandStateChanged(sender: RichEdit, args: CommandStateChangedEventArgs): void;
	    onContentReady: (e: {
	        element: any;
	        component: DevExpress.Reporting.Viewer.Widgets.Internal.IPopupComponent;
	        model: any;
	    }) => void;
	    getPositionTarget: (element: HTMLElement) => HTMLElement;
	    closeOnOutsideClick: (e: any) => boolean;
	    template: string;
	    parentClass: string;
	    visible: ko.Subscribable<boolean>;
	    getPopupContainer: typeof getParentContainer;
	    componentCollection: ComponentCollection[];
	}
	export {};

}
declare module DevExpress.Reporting.Designer.Controls.RichEdit.Internal {
    import InlineTextEdit = DevExpress.Analytics.Internal.InlineTextEdit;;
	export class InlineRichEditControl extends InlineTextEdit {
	}

}
declare module DevExpress.Reporting.Designer.Controls.RichEdit.Internal {
    import RichEditLoadDispatcher = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.RichEditLoadDispatcher;;
    import ToolbarSurface = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.Toolbar.ToolbarSurface;;
    import INativeRich = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.INativeRich;
    import IRichLoadData = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.IRichLoadData;;
    import InlineRichEditControl = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.InlineRichEditControl;;
    import XRRichController = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.XRRichController;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;

    import FontModel = DevExpress.Analytics.Widgets.Internal.FontModel;;
    import RichEdit = DevExpress.RichEdit.RichEdit;
    import Interval = DevExpress.RichEdit.Interval;
    import CommandId = DevExpress.RichEdit.CommandId;;
	export class XRRichEditControlModel extends Disposable {
	    protected _richEdit: RichEdit;
	    private disableCommands;
	    _dispatcher: RichEditLoadDispatcher;
	    _element: HTMLElement;
	    _toolbar: ToolbarSurface;
	    _verticalScrollOffset: number;
	    _richHeight: number;
	    setRichHeight(value: any): void;
	    _elementExists(): boolean;
	    className: ko.Computed;
	    visible: ko.Subscribable<boolean>;
	    getToolbar(): ToolbarSurface;
	    getRealControl(): RichEdit;
	    protected getRealControlNative(): INativeRich;
	    updateCanvasScroll(): void;
	    dispose(): void;
	    constructor(element: HTMLElement, inlineControl: InlineRichEditControl, selected: ko.Subscribable<boolean>);
	    executeCommand(commandId: CommandId, parameter?: any, setFocus?: boolean): void;
	    insertHtml(html: any): void;
	    createOptions(): any;
	    private getFonts;
	    private getRichEditFonts;
	    protected createToolbar(): void;
	    saveDocumentNative(documentFormat: number, onResultReady?: (result: any) => void): void;
	    newDocumentNative(onResultReady?: () => void): void;
	    openDocumentNative(base64: string, documentFormat: number, onResultReady?: () => void, onError?: () => void): void;
	    saveDocument(documentFormat: number, onResultReady?: (result: any) => void): void;
	    newDocument(onResultReady?: () => void): void;
	    openDocument(base64: string, documentFormat: number, onResultReady?: () => void, onError?: () => void): void;
	    changeSize(): void;
	    focusChanged(inFocus: boolean): void;
	    getText(interval?: Interval): string;
	    documentIsEmpty(): boolean;
	}
	export class RichLoader extends Disposable {
	    protected richEdit: XRRichEditControlModel;
	    protected loadData: IRichLoadData;
	    _textConverted: (text: string) => void;
	    textConverted: (text: string) => void;
	    constructor(richEdit: XRRichEditControlModel);
	    load(loadData: IRichLoadData): void;
	}
	export class RichEditPaddingModelWrapper extends Disposable {
	    private _richEdit;
	    private _paddingModel;
	    private _setPaddings;
	    constructor(padding: ko.Subscribable<string>, _richEdit: XRRichEditControlModel);
	}
	export class RichEditFontModel extends FontModel {
	    richEdit: XRRichEditControlModel;
	    controller: XRRichController;
	    constructor(value: ko.Observable<string> | ko.Computed<string>, richEdit: XRRichEditControlModel, foreColor: ko.Observable<string> | ko.Computed<string>, controller: XRRichController);
	    protected applyCommand(commandId: CommandId, parameter?: any): void;
	}

}
declare module DevExpress.Reporting.Designer.Controls.RichEdit.Internal {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import Locker = DevExpress.Reporting.Internal.Locker;;
    import XRRichModernSurface = DevExpress.Reporting.Designer.Controls.RichEdit.XRRichModernSurface;;
    import XRRichViewModel = DevExpress.Reporting.Designer.Controls.XRRichViewModel;;
    import RichEditFontModel = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.RichEditFontModel;
    import RichEditPaddingModelWrapper = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.RichEditPaddingModelWrapper;
    import RichLoader = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.RichLoader;
    import XRRichEditControlModel = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.XRRichEditControlModel;;
	export class XRRichController extends Disposable {
	    element: HTMLElement;
	    fontModel: RichEditFontModel;
	    paddingModel: RichEditPaddingModelWrapper;
	    surface: XRRichModernSurface;
	    richLoader: RichLoader;
	    locker: Locker;
	    richEdit: XRRichEditControlModel;
	    private _oldValidState;
	    readonly controlModel: XRRichViewModel;
	    createSubscribtions(): void;
	    dispose(): void;
	    init(): void;
	    constructor(richEdit: XRRichEditControlModel, xrRichSurfaceModel: XRRichModernSurface);
	    setRtfString(newRtf: string): void;
	    private rtfStringChanged;
	    checkValidationState(): boolean;
	    onVisibilityChanged(newVisibility: boolean): void;
	    onDocumentDataChanged(newDocument: string): void;
	}

}
declare module DevExpress.Reporting.Designer.Controls.RichEdit {
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;

    import XRRichController = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.XRRichController;;
    import XRRichEditControlModel = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.XRRichEditControlModel;;
    import XRControlSurface = DevExpress.Reporting.Designer.Controls.XRControlSurface;;
    import XRRichViewModel = DevExpress.Reporting.Designer.Controls.XRRichViewModel;;
	export class XRRichModernSurface extends XRControlSurface {
	    private _convertReady;
	    constructor(control: XRRichViewModel, context: ISurfaceContext);
	    createController(richEdit: XRRichEditControlModel): void;
	    isValid: ko.Observable<boolean>;
	    defaultStyleunit: ko.Computed;
	    controller: XRRichController;
	    serializedRtf: ko.Observable<string>;
	}

}
declare module DevExpress.Reporting.Designer.Controls.RichEdit {
	export {};

}
declare module DevExpress.Reporting.Designer.Controls.RichEdit {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import XRRichEditControlModel = DevExpress.Reporting.Designer.Controls.RichEdit.Internal.XRRichEditControlModel;;
	interface IRichEditVirtualScrollItem {
	    element: HTMLElement;
	    model: XRRichEditControlModel;
	}
	export class RichEditVirtualScroll extends Disposable {
	    private _viewPort;
	    dispose(): void;
	    items: IRichEditVirtualScrollItem[];
	    registerViewPort(viewPort: HTMLElement): void;
	    registerRichEditControl(element: HTMLElement, model: XRRichEditControlModel): void;
	    unregisterRichEditControl(element: HTMLElement): void;
	    updateRich(item: IRichEditVirtualScrollItem, viewPortRect: ClientRect): void;
	    updateRichPosition(): void;
	}
	export {};

}
