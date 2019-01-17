function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("tns-core-modules/utils/utils");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout");
var commonModule = require("./ui-autocomplete.common");
__export(require("./ui-autocomplete.common"));
var knownTemplates;
(function (knownTemplates) {
    knownTemplates.suggestionItemTemplate = "suggestionItemTemplate";
})(knownTemplates = exports.knownTemplates || (exports.knownTemplates = {}));
var TokenModel = /** @class */ (function (_super) {
    __extends(TokenModel, _super);
    function TokenModel(text, imageName) {
        var _this = _super.call(this, text, imageName) || this;
        if (imageName !== null && imageName !== undefined) {
            var drawable = RadAutoCompleteTextView.resolveDrawableFromResource(imageName);
            _this._android = new com.telerik.widget.autocomplete.TokenModel(text, drawable);
            _this._android.setNsImageName(imageName);
        }
        else {
            _this._android = new com.telerik.widget.autocomplete.TokenModel(text, null);
        }
        return _this;
    }
    Object.defineProperty(TokenModel.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return TokenModel;
}(commonModule.TokenModel));
exports.TokenModel = TokenModel;
var SuggestionView = /** @class */ (function (_super) {
    __extends(SuggestionView, _super);
    function SuggestionView(parent) {
        return _super.call(this) || this;
    }
    Object.defineProperty(SuggestionView.prototype, "android", {
        get: function () {
            return this._android;
        },
        set: function (value) {
            this._android = value;
        },
        enumerable: true,
        configurable: true
    });
    return SuggestionView;
}(commonModule.SuggestionView));
exports.SuggestionView = SuggestionView;
var AutoCompleteAdapterClass;
function ensureAutoCompleteAdapter() {
    if (AutoCompleteAdapterClass) {
        return AutoCompleteAdapterClass;
    }
    var AutoCompleteAdapter = /** @class */ (function (_super) {
        __extends(AutoCompleteAdapter, _super);
        function AutoCompleteAdapter(owner, items, isRemote) {
            var _this = _super.call(this, utils_1.ad.getApplicationContext(), items, null) || this;
            _this.suggestionsMap = {};
            _this.owner = owner;
            _this.isRemote = isRemote;
            return global.__native(_this);
        }
        AutoCompleteAdapter.prototype.onCreateViewHolder = function (parent, viewType) {
            var view = this.owner.getViewForViewType(commonModule.AutoCompleteViewTypes.ItemView);
            var parentView = new stack_layout_1.StackLayout();
            parentView.orientation = "vertical";
            parentView.addChild(view);
            this.owner._addView(parentView);
            var layoutParams = new org.nativescript.widgets.CommonLayoutParams();
            layoutParams.width = org.nativescript.widgets.CommonLayoutParams.MATCH_PARENT;
            layoutParams.height = org.nativescript.widgets.CommonLayoutParams.WRAP_CONTENT;
            var holder = new com.telerik.widget.autocomplete.SuggestionItemViewHolder(parentView.android);
            parentView.android.setLayoutParams(layoutParams);
            holder['nsView'] = parentView;
            return holder;
        };
        AutoCompleteAdapter.prototype.onBindViewHolder = function (holder, position) {
            var nativeItem = this.getFilteredList().get(position);
            var model = this.nativeModelToNSModel(nativeItem);
            if (holder.nsView !== undefined) {
                holder.nsView.bindingContext = model;
                this.attachOnClickListener(holder.itemView);
                var args = {
                    eventName: commonModule.RadAutoCompleteTextView.itemLoadingEvent,
                    index: position,
                    view: holder.nsView._subViews[0],
                    android: holder,
                    data: model
                };
                this.owner.notify(args);
            }
        };
        AutoCompleteAdapter.prototype.filter = function (charText) {
            if (!this.isRemote) {
                _super.prototype.filter.call(this, charText);
                var nsResult = new Array();
                for (var i = 0; i < this.getFilteredList().size(); i++) {
                    var nativeItem = this.getFilteredList().get(i);
                    var model = this.nativeModelToNSModel(nativeItem);
                    nsResult.push(model);
                }
                this.owner._filteredItems = nsResult;
                return;
            }
            this.owner.android.getAdapter().getFilteredList().clear();
            charText = charText.toLowerCase();
            var self = this;
            if (charText.length !== 0) {
                this.owner.asyncCall(charText).then(function (items) {
                    var result = new java.util.ArrayList();
                    var nsResult = new Array();
                    if (self.owner.completionMode === commonModule.CompletionMode.StartsWith) {
                        for (var i = 0; i < items.length; i++) {
                            var current = items[i];
                            var upperCase = current.android.getText().toLowerCase();
                            if (upperCase.startsWith(charText)) {
                                result.add(current.android);
                                nsResult.push(current);
                            }
                        }
                    }
                    else {
                        for (var i = 0; i < items.length; i++) {
                            var current = items[i];
                            var upperCase = current.android.getText().toLowerCase();
                            if (upperCase.indexOf(charText !== -1)) {
                                result.add(current.android);
                                nsResult.push(current);
                            }
                        }
                    }
                    if (self.owner.isLoaded) {
                        self.setItems(result);
                        self.owner.android.getAdapter().setFilteredList(result);
                        self.owner.android.resolveAfterFilter(self.owner.android.getTextField().getText().toString(), true);
                        self.owner._filteredItems = nsResult;
                    }
                });
            }
        };
        AutoCompleteAdapter.prototype.nativeModelToNSModel = function (nativeItem) {
            var img = nativeItem.getNsImageName();
            var model = new TokenModel(nativeItem.getText(), img);
            return model;
        };
        return AutoCompleteAdapter;
    }(com.telerik.widget.autocomplete.AutoCompleteAdapter));
    AutoCompleteAdapterClass = AutoCompleteAdapter;
}
var AutoCompleteShowSuggestionListener;
var AutoCompleteTextChangedListener;
var AutoCompleteTokenAddedListener;
var AutoCompleteTokenSelectedListener;
var AutoCompleteTokenDeselectedListener;
var AutoCompleteTokenRemovedListener;
var AutoCompleteDidAutoCompleteListener;
function initListeners() {
    if (!AutoCompleteShowSuggestionListener) {
        var AutoCompleteShowSuggestionListenerImpl = /** @class */ (function (_super) {
            __extends(AutoCompleteShowSuggestionListenerImpl, _super);
            function AutoCompleteShowSuggestionListenerImpl(owner) {
                var _this = _super.call(this) || this;
                _this.owner = owner;
                return global.__native(_this);
            }
            AutoCompleteShowSuggestionListenerImpl.prototype.onShowSuggestionList = function (autoComplete, suggestions) {
                var args = new commonModule.AutoCompleteEventData(this.owner, commonModule.RadAutoCompleteTextView.suggestionViewBecameVisibleEvent, undefined, undefined);
                this.owner.notify(args);
            };
            AutoCompleteShowSuggestionListenerImpl = __decorate([
                Interfaces([com.telerik.widget.autocomplete.ShowSuggestionListListener]),
                __metadata("design:paramtypes", [RadAutoCompleteTextView])
            ], AutoCompleteShowSuggestionListenerImpl);
            return AutoCompleteShowSuggestionListenerImpl;
        }(java.lang.Object));
        AutoCompleteShowSuggestionListener = AutoCompleteShowSuggestionListenerImpl;
    }
    if (!AutoCompleteTextChangedListener) {
        var AutoCompleteTextChangedListenerImpl = /** @class */ (function (_super) {
            __extends(AutoCompleteTextChangedListenerImpl, _super);
            function AutoCompleteTextChangedListenerImpl(owner) {
                var _this = _super.call(this) || this;
                _this.owner = owner;
                return global.__native(_this);
            }
            AutoCompleteTextChangedListenerImpl.prototype.onTextChanged = function (autoComplete, text) {
                if (this.owner.text !== text) {
                    var args = new commonModule.AutoCompleteEventData(this.owner, commonModule.RadAutoCompleteTextView.textChangedEvent, text, undefined);
                    this.owner.text = text;
                    this.owner.notify(args);
                }
            };
            AutoCompleteTextChangedListenerImpl = __decorate([
                Interfaces([com.telerik.widget.autocomplete.TextChangedListener]),
                __metadata("design:paramtypes", [RadAutoCompleteTextView])
            ], AutoCompleteTextChangedListenerImpl);
            return AutoCompleteTextChangedListenerImpl;
        }(java.lang.Object));
        AutoCompleteTextChangedListener = AutoCompleteTextChangedListenerImpl;
    }
    if (!AutoCompleteTokenAddedListener) {
        var AutoCompleteTokenAddedListenerImpl = /** @class */ (function (_super) {
            __extends(AutoCompleteTokenAddedListenerImpl, _super);
            function AutoCompleteTokenAddedListenerImpl(owner) {
                var _this = _super.call(this) || this;
                _this.owner = owner;
                return global.__native(_this);
            }
            AutoCompleteTokenAddedListenerImpl.prototype.onTokenAdded = function (autoComplete, token) {
                var tokenModel = new TokenModel(token.getText(), token.getNsImageName());
                var args = new commonModule.AutoCompleteEventData(this.owner, commonModule.RadAutoCompleteTextView.tokenAddedEvent, token.getText(), tokenModel);
                this.owner.notify(args);
            };
            AutoCompleteTokenAddedListenerImpl = __decorate([
                Interfaces([com.telerik.widget.autocomplete.TokenAddedListener]),
                __metadata("design:paramtypes", [RadAutoCompleteTextView])
            ], AutoCompleteTokenAddedListenerImpl);
            return AutoCompleteTokenAddedListenerImpl;
        }(java.lang.Object));
        AutoCompleteTokenAddedListener = AutoCompleteTokenAddedListenerImpl;
    }
    if (!AutoCompleteTokenSelectedListener) {
        var AutoCompleteTokenSelectedListenerImpl = /** @class */ (function (_super) {
            __extends(AutoCompleteTokenSelectedListenerImpl, _super);
            function AutoCompleteTokenSelectedListenerImpl(owner) {
                var _this = _super.call(this) || this;
                _this.owner = owner;
                return global.__native(_this);
            }
            AutoCompleteTokenSelectedListenerImpl.prototype.onTokenSelected = function (autoComplete, token) {
                var tokenModel = new TokenModel(token.getText(), token.getNsImageName());
                var args = new commonModule.AutoCompleteEventData(this.owner, commonModule.RadAutoCompleteTextView.tokenSelectedEvent, token.getText(), tokenModel);
                this.owner.notify(args);
            };
            AutoCompleteTokenSelectedListenerImpl = __decorate([
                Interfaces([com.telerik.widget.autocomplete.TokenSelectedListener]),
                __metadata("design:paramtypes", [RadAutoCompleteTextView])
            ], AutoCompleteTokenSelectedListenerImpl);
            return AutoCompleteTokenSelectedListenerImpl;
        }(java.lang.Object));
        AutoCompleteTokenSelectedListener = AutoCompleteTokenSelectedListenerImpl;
    }
    if (!AutoCompleteTokenDeselectedListener) {
        var AutoCompleteTokenDeselectedListenerImpl = /** @class */ (function (_super) {
            __extends(AutoCompleteTokenDeselectedListenerImpl, _super);
            function AutoCompleteTokenDeselectedListenerImpl(owner) {
                var _this = _super.call(this) || this;
                _this.owner = owner;
                return global.__native(_this);
            }
            AutoCompleteTokenDeselectedListenerImpl.prototype.onTokenDeselected = function (autoComplete, token) {
                var tokenModel = new TokenModel(token.getText(), token.getNsImageName());
                var args = new commonModule.AutoCompleteEventData(this.owner, commonModule.RadAutoCompleteTextView.tokenDeselectedEvent, token.getText(), tokenModel);
                this.owner.notify(args);
            };
            AutoCompleteTokenDeselectedListenerImpl = __decorate([
                Interfaces([com.telerik.widget.autocomplete.TokenDeselectedListener]),
                __metadata("design:paramtypes", [RadAutoCompleteTextView])
            ], AutoCompleteTokenDeselectedListenerImpl);
            return AutoCompleteTokenDeselectedListenerImpl;
        }(java.lang.Object));
        AutoCompleteTokenDeselectedListener = AutoCompleteTokenDeselectedListenerImpl;
    }
    if (!AutoCompleteTokenRemovedListener) {
        var AutoCompleteTokenRemovedListenerImpl = /** @class */ (function (_super) {
            __extends(AutoCompleteTokenRemovedListenerImpl, _super);
            function AutoCompleteTokenRemovedListenerImpl(owner) {
                var _this = _super.call(this) || this;
                _this.owner = owner;
                return global.__native(_this);
            }
            AutoCompleteTokenRemovedListenerImpl.prototype.onTokenRemoved = function (autoComplete, token) {
                var tokenModel = new TokenModel(token.getText(), token.getNsImageName());
                var args = new commonModule.AutoCompleteEventData(this.owner, commonModule.RadAutoCompleteTextView.tokenRemovedEvent, token.getText(), tokenModel);
                this.owner.notify(args);
            };
            AutoCompleteTokenRemovedListenerImpl = __decorate([
                Interfaces([com.telerik.widget.autocomplete.TokenRemovedListener]),
                __metadata("design:paramtypes", [RadAutoCompleteTextView])
            ], AutoCompleteTokenRemovedListenerImpl);
            return AutoCompleteTokenRemovedListenerImpl;
        }(java.lang.Object));
        AutoCompleteTokenRemovedListener = AutoCompleteTokenRemovedListenerImpl;
    }
    if (!AutoCompleteDidAutoCompleteListener) {
        var AutoCompleteDidAutoCompleteListenerImpl = /** @class */ (function (_super) {
            __extends(AutoCompleteDidAutoCompleteListenerImpl, _super);
            function AutoCompleteDidAutoCompleteListenerImpl(owner) {
                var _this = _super.call(this) || this;
                _this.owner = owner;
                return global.__native(_this);
            }
            AutoCompleteDidAutoCompleteListenerImpl.prototype.onDidAutoComplete = function (autoComplete, text) {
                var args = new commonModule.AutoCompleteEventData(this.owner, commonModule.RadAutoCompleteTextView.didAutoCompleteEvent, text, undefined);
                this.owner.notify(args);
            };
            AutoCompleteDidAutoCompleteListenerImpl = __decorate([
                Interfaces([com.telerik.widget.autocomplete.DidAutoCompleteListener]),
                __metadata("design:paramtypes", [RadAutoCompleteTextView])
            ], AutoCompleteDidAutoCompleteListenerImpl);
            return AutoCompleteDidAutoCompleteListenerImpl;
        }(java.lang.Object));
        AutoCompleteDidAutoCompleteListener = AutoCompleteDidAutoCompleteListenerImpl;
    }
}
var RadAutoCompleteTextView = /** @class */ (function (_super) {
    __extends(RadAutoCompleteTextView, _super);
    function RadAutoCompleteTextView() {
        var _this = _super.call(this) || this;
        _this._androidViewId = -1;
        return _this;
    }
    RadAutoCompleteTextView.prototype.createNativeView = function () {
        this._android = new com.telerik.widget.autocomplete.RadAutoCompleteTextView(this._context);
        initListeners();
        this._android._showSuggestionListener = new AutoCompleteShowSuggestionListener(this);
        this._android._textChangedListener = new AutoCompleteTextChangedListener(this);
        this._android._tokenAddedListener = new AutoCompleteTokenAddedListener(this);
        this._android._tokenSelectedListener = new AutoCompleteTokenSelectedListener(this);
        this._android._tokenDeselectedListener = new AutoCompleteTokenDeselectedListener(this);
        this._android._tokenRemovedListener = new AutoCompleteTokenRemovedListener(this);
        this._android._didAutoCompleteListener = new AutoCompleteDidAutoCompleteListener(this);
        this._android.addShowSuggestionListListener(this._android._showSuggestionListener);
        this._android.addTextChangedListener(this._android._textChangedListener);
        this._android.addTokenAddedListener(this._android._tokenAddedListener);
        this._android.addTokenSelectedListener(this._android._tokenSelectedListener);
        this._android.addTokenDeselectedListener(this._android._tokenDeselectedListener);
        this._android.addTokenRemovedListener(this._android._tokenRemovedListener);
        this._android.addDidAutoCompleteListener(this._android._didAutoCompleteListener);
        if (this.displayMode) {
            this.adjustDisplayMode(this.displayMode);
        }
        if (this.suggestMode) {
            this.adjustSuggestMode(this.suggestMode);
        }
        if (this.layoutMode) {
            this.adjustLayoutMode(this.layoutMode);
        }
        if (this.completionMode) {
            this.adjustCompletionMode(this.completionMode);
        }
        if (this.suggestionView) {
            this.adjustSuggestionView(this.suggestionView);
        }
        if (this.hint) {
            this.adjustHint(this.hint);
        }
        if (this.text) {
            this.adjustText(this.text);
        }
        if (this.minimumCharactersToSearch) {
            this.adjustMinimumCharactersToSearch(this.minimumCharactersToSearch);
        }
        if (this.noResultsText) {
            this.adjustNoResultsText(this.noResultsText);
        }
        if (this.closeButtonImageSrc) {
            this.adjustCloseButtonImage(this.closeButtonImageSrc);
        }
        this.adjustShowCloseButton(this.showCloseButton);
        if (this.asyncCall) {
            this.adjustAsyncCall(true);
        }
        else {
            this.loadData(false);
        }
        return this._nativeView;
    };
    RadAutoCompleteTextView.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        if (this._androidViewId < 0) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._nativeView.setId(this._androidViewId);
    };
    RadAutoCompleteTextView.prototype.disposeNativeView = function () {
        if (this._android._showSuggestionListener) {
            this._android._showSuggestionListener.owner = null;
        }
        if (this._android._textChangedListener) {
            this._android._textChangedListener.owner = null;
        }
        if (this._android._tokenAddedListener) {
            this._android._tokenAddedListener.owner = null;
        }
        if (this._android._tokenSelectedListener) {
            this._android._tokenSelectedListener.owner = null;
        }
        if (this._android._tokenDeselectedListener) {
            this._android._tokenDeselectedListener.owner = null;
        }
        if (this._android._tokenRemovedListener) {
            this._android._tokenRemovedListener.owner = null;
        }
        if (this._android._didAutoCompleteListener) {
            this._android._didAutoCompleteListener.owner = null;
        }
        _super.prototype.disposeNativeView.call(this);
    };
    Object.defineProperty(RadAutoCompleteTextView.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadAutoCompleteTextView.prototype, "filteredItems", {
        get: function () {
            if (this._filteredItems === undefined) {
                this._filteredItems = new Array();
            }
            return this._filteredItems;
        },
        enumerable: true,
        configurable: true
    });
    RadAutoCompleteTextView.prototype.resetAutocomplete = function () {
        this._android.resetAutocomplete();
    };
    RadAutoCompleteTextView.prototype.addToken = function (token) {
        var image = token.image ? RadAutoCompleteTextView.resolveDrawableFromResource(token.image) : null;
        var nativeObject = new com.telerik.widget.autocomplete.TokenModel(token.text, image);
        this._android.addTokenView(nativeObject);
        if (this._android.getDisplayMode() === com.telerik.widget.autocomplete.DisplayMode.PLAIN) {
            // HACK: to unify behavior in iOS and Android
            this._android.setText(token.text);
        }
    };
    RadAutoCompleteTextView.prototype.insertTokenAtIndex = function (token, index) {
        var image = token.image ? RadAutoCompleteTextView.resolveDrawableFromResource(token.image) : null;
        var nativeObject = new com.telerik.widget.autocomplete.TokenModel(token.text, image);
        var nativeTokenView = new com.telerik.widget.autocomplete.TokenView(this._context);
        nativeTokenView.setModel(nativeObject);
        this._android.insertTokenAt(index, nativeTokenView);
    };
    RadAutoCompleteTextView.prototype.removeToken = function (token) {
        var nativeObject = new com.telerik.widget.autocomplete.TokenModel(token.text, null);
        var nativeTokenView = new com.telerik.widget.autocomplete.TokenView(this._context);
        nativeTokenView.setModel(nativeObject);
        this._android.removeToken(nativeTokenView);
    };
    RadAutoCompleteTextView.prototype.removeTokenAtIndex = function (index) {
        this._android.removeTokenAt(index);
    };
    RadAutoCompleteTextView.prototype.removeAllTokens = function () {
        this._android.removeAllTokens();
    };
    RadAutoCompleteTextView.prototype.tokens = function () {
        return this._android.getTokens();
    };
    RadAutoCompleteTextView.prototype.tokenAtIndex = function (index) {
        return this._android.getTokenAt(index);
    };
    RadAutoCompleteTextView.prototype.onDisplayModeChanged = function (oldValue, newValue) {
        this.adjustDisplayMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onLayoutModeChanged = function (oldValue, newValue) {
        this.adjustLayoutMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onSuggestModeChanged = function (oldValue, newValue) {
        this.adjustSuggestMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onCompletionModeChanged = function (oldValue, newValue) {
        this.adjustCompletionMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onItemsChanged = function (oldValue, newValue) {
        this.loadData(false);
    };
    RadAutoCompleteTextView.prototype.onSuggestionViewChanged = function (oldValue, newValue) {
        this.adjustSuggestionView(newValue);
    };
    RadAutoCompleteTextView.prototype.onHintChanged = function (oldValue, newValue) {
        this.adjustHint(newValue);
    };
    RadAutoCompleteTextView.prototype.onTextChanged = function (oldValue, newValue) {
        this.adjustText(newValue);
    };
    RadAutoCompleteTextView.prototype.onMinimumCharactersToSearchChanged = function (oldValue, newValue) {
        this.adjustMinimumCharactersToSearch(newValue);
    };
    RadAutoCompleteTextView.prototype.onNoResultsTextChanged = function (oldValue, newValue) {
        this.adjustNoResultsText(newValue);
    };
    RadAutoCompleteTextView.prototype.onLoadSuggestionsAsyncChanged = function (oldValue, newValue) {
        this.asyncCall = newValue;
        this.adjustAsyncCall(true);
    };
    RadAutoCompleteTextView.prototype.onShowCloseButtonChanged = function (oldValue, newValue) {
        this.adjustShowCloseButton(newValue);
    };
    RadAutoCompleteTextView.prototype.onCloseButtonImageSrcChanged = function (oldValue, newValue) {
        this.adjustCloseButtonImage(newValue);
    };
    RadAutoCompleteTextView.prototype.onReadOnlyChanged = function (oldValue, newValue) {
        this._android.setReadOnly(newValue);
    };
    RadAutoCompleteTextView.prototype.adjustAsyncCall = function (value) {
        if (this._android && value) {
            this._android.setUsingAsyncData(value);
            this.loadData(true);
        }
    };
    RadAutoCompleteTextView.prototype.adjustHint = function (value) {
        if (this._android && value) {
            this._android.setAutocompleteHint(value);
        }
    };
    RadAutoCompleteTextView.prototype.adjustText = function (value) {
        if (this._android && this._android.getText().toString() !== value) {
            this._android.setText(value);
        }
    };
    RadAutoCompleteTextView.prototype.adjustMinimumCharactersToSearch = function (value) {
        if (this._android && value) {
            this._android.setMinimumCharactersToSearch(value);
        }
    };
    RadAutoCompleteTextView.prototype.adjustNoResultsText = function (value) {
        if (this._android && value) {
            this._android.setNoResultsText(value);
        }
    };
    RadAutoCompleteTextView.prototype.adjustSuggestionView = function (value) {
        if (this._android && value) {
            var suggestionView = value;
            suggestionView.android = this._android.getSuggestionView();
            if (suggestionView.suggestionViewHeight) {
                var heightInPixels = utils_1.layout.toDevicePixels(suggestionView.suggestionViewHeight);
                this._android.setSuggestionViewHeight(heightInPixels);
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustCompletionMode = function (value) {
        if (this._android && value) {
            if (value === commonModule.CompletionMode.Contains) {
                this._android.getAdapter().setCompletionMode(com.telerik.widget.autocomplete.CompletionMode.CONTAINS);
            }
            else {
                this._android.getAdapter().setCompletionMode(com.telerik.widget.autocomplete.CompletionMode.STARTS_WITH);
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustDisplayMode = function (value) {
        if (this._android && value) {
            this._android.setDisplayMode((value === commonModule.DisplayMode.Plain) ?
                com.telerik.widget.autocomplete.DisplayMode.PLAIN :
                com.telerik.widget.autocomplete.DisplayMode.TOKENS);
        }
    };
    RadAutoCompleteTextView.prototype.adjustSuggestMode = function (value) {
        if (this._android && value) {
            if (value === commonModule.SuggestMode.Suggest) {
                this._android.setSuggestMode(com.telerik.widget.autocomplete.SuggestMode.SUGGEST);
            }
            else if (value === commonModule.SuggestMode.Append) {
                this._android.setSuggestMode(com.telerik.widget.autocomplete.SuggestMode.APPEND);
            }
            else {
                this._android.setSuggestMode(com.telerik.widget.autocomplete.SuggestMode.SUGGEST_APPEND);
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustLayoutMode = function (value) {
        if (value && this._android) {
            this._android.setTokensLayoutMode((value === commonModule.LayoutMode.Horizontal) ?
                com.telerik.widget.autocomplete.LayoutMode.HORIZONTAL :
                com.telerik.widget.autocomplete.LayoutMode.WRAP);
        }
    };
    RadAutoCompleteTextView.prototype.adjustShowCloseButton = function (value) {
        if (this._android) {
            this._android.setShowCloseButton(value);
        }
    };
    RadAutoCompleteTextView.prototype.adjustCloseButtonImage = function (value) {
        if (this._android) {
            if (value !== null && value !== undefined) {
                var drawable = RadAutoCompleteTextView.resolveDrawableFromResource(value);
                if (drawable) {
                    this._android.getCloseButtonView().setBackgroundDrawable(drawable);
                }
            }
        }
    };
    RadAutoCompleteTextView.prototype.loadData = function (isRemote) {
        if (this._nativeView !== undefined) {
            if ((this.items === undefined && isRemote === true) || this.items !== undefined) {
                var nativeSource = new java.util.ArrayList();
                if (this.items !== undefined) {
                    for (var i = 0; i < this.items.length; i++) {
                        var a = this.items.getItem(i);
                        nativeSource.add(a.android);
                    }
                }
                ensureAutoCompleteAdapter();
                var adapter = new AutoCompleteAdapterClass(this, nativeSource, isRemote);
                this._android.setAdapter(adapter);
                this.adjustCompletionMode(this.completionMode);
            }
        }
    };
    RadAutoCompleteTextView.resolveDrawableFromResource = function (imageName) {
        var nativeValue = imageName;
        var drawable;
        if (imageName.startsWith("res://")) {
            nativeValue = imageName.substring(6, imageName.length);
        }
        var appResources = utils_1.ad.getApplicationContext().getResources();
        var packageName = utils_1.ad.getApplication().getPackageName();
        if (appResources) {
            var identifier = appResources.getIdentifier(nativeValue, 'drawable', packageName);
            if (identifier > 0) {
                drawable = appResources.getDrawable(identifier);
            }
            else {
                console.log("WARNING: Can't find drawable with name: " + nativeValue);
            }
        }
        return drawable;
    };
    return RadAutoCompleteTextView;
}(commonModule.RadAutoCompleteTextView));
exports.RadAutoCompleteTextView = RadAutoCompleteTextView;
