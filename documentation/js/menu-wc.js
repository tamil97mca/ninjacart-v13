'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ninja-cart documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-4c0316df4e1a7d1f459fc473c9af6ffda38ff814166576a30be8566b857d75ff97b573f68b4c731c8b7476ce637e8230f13c04cd3f1da802a08b57168c382b9a"' : 'data-bs-target="#xs-components-links-module-AdminModule-4c0316df4e1a7d1f459fc473c9af6ffda38ff814166576a30be8566b857d75ff97b573f68b4c731c8b7476ce637e8230f13c04cd3f1da802a08b57168c382b9a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-4c0316df4e1a7d1f459fc473c9af6ffda38ff814166576a30be8566b857d75ff97b573f68b4c731c8b7476ce637e8230f13c04cd3f1da802a08b57168c382b9a"' :
                                            'id="xs-components-links-module-AdminModule-4c0316df4e1a7d1f459fc473c9af6ffda38ff814166576a30be8566b857d75ff97b573f68b4c731c8b7476ce637e8230f13c04cd3f1da802a08b57168c382b9a"' }>
                                            <li class="link">
                                                <a href="components/AdminListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminPanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminPanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaceOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaceOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SalesChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SalesChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideNavBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideNavBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateProductComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-884df829ff9739c3abd43caab9812cd0dc6060e97f1383df88fa42de034b5df5cb9a6fbc0990dddc5b6ecfa91f62b1bfd09a71f73c8b4f5ba263411ed8331070"' : 'data-bs-target="#xs-components-links-module-AppModule-884df829ff9739c3abd43caab9812cd0dc6060e97f1383df88fa42de034b5df5cb9a6fbc0990dddc5b6ecfa91f62b1bfd09a71f73c8b4f5ba263411ed8331070"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-884df829ff9739c3abd43caab9812cd0dc6060e97f1383df88fa42de034b5df5cb9a6fbc0990dddc5b6ecfa91f62b1bfd09a71f73c8b4f5ba263411ed8331070"' :
                                            'id="xs-components-links-module-AppModule-884df829ff9739c3abd43caab9812cd0dc6060e97f1383df88fa42de034b5df5cb9a6fbc0990dddc5b6ecfa91f62b1bfd09a71f73c8b4f5ba263411ed8331070"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageGalleryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageGalleryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderNowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderNowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-8bee9cdbc07d6277b98313bb95132371614db5ed57c6eb94fbe83c17b2d1f12ab1f870cb28cfc717fff7637c4a49b618e0ca2ebf2dcd57f1abd2211b76b712b2"' : 'data-bs-target="#xs-components-links-module-AuthModule-8bee9cdbc07d6277b98313bb95132371614db5ed57c6eb94fbe83c17b2d1f12ab1f870cb28cfc717fff7637c4a49b618e0ca2ebf2dcd57f1abd2211b76b712b2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-8bee9cdbc07d6277b98313bb95132371614db5ed57c6eb94fbe83c17b2d1f12ab1f870cb28cfc717fff7637c4a49b618e0ca2ebf2dcd57f1abd2211b76b712b2"' :
                                            'id="xs-components-links-module-AuthModule-8bee9cdbc07d6277b98313bb95132371614db5ed57c6eb94fbe83c17b2d1f12ab1f870cb28cfc717fff7637c4a49b618e0ca2ebf2dcd57f1abd2211b76b712b2"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductModule-c425d791f737b572b202da50cb87ff71323d736bbe1619cedd3ec57cd200250dc958899f875e0d9b4cb18bacc68a2c71f5e040245d448779c076eb1fac81d1a1"' : 'data-bs-target="#xs-components-links-module-ProductModule-c425d791f737b572b202da50cb87ff71323d736bbe1619cedd3ec57cd200250dc958899f875e0d9b4cb18bacc68a2c71f5e040245d448779c076eb1fac81d1a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-c425d791f737b572b202da50cb87ff71323d736bbe1619cedd3ec57cd200250dc958899f875e0d9b4cb18bacc68a2c71f5e040245d448779c076eb1fac81d1a1"' :
                                            'id="xs-components-links-module-ProductModule-c425d791f737b572b202da50cb87ff71323d736bbe1619cedd3ec57cd200250dc958899f875e0d9b4cb18bacc68a2c71f5e040245d448779c076eb1fac81d1a1"' }>
                                            <li class="link">
                                                <a href="components/AddProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductcategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductcategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RemoveProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoveProductComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-ProductModule-c425d791f737b572b202da50cb87ff71323d736bbe1619cedd3ec57cd200250dc958899f875e0d9b4cb18bacc68a2c71f5e040245d448779c076eb1fac81d1a1"' : 'data-bs-target="#xs-pipes-links-module-ProductModule-c425d791f737b572b202da50cb87ff71323d736bbe1619cedd3ec57cd200250dc958899f875e0d9b4cb18bacc68a2c71f5e040245d448779c076eb1fac81d1a1"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ProductModule-c425d791f737b572b202da50cb87ff71323d736bbe1619cedd3ec57cd200250dc958899f875e0d9b4cb18bacc68a2c71f5e040245d448779c076eb1fac81d1a1"' :
                                            'id="xs-pipes-links-module-ProductModule-c425d791f737b572b202da50cb87ff71323d736bbe1619cedd3ec57cd200250dc958899f875e0d9b4cb18bacc68a2c71f5e040245d448779c076eb1fac81d1a1"' }>
                                            <li class="link">
                                                <a href="pipes/SearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductRoutingModule.html" data-type="entity-link" >ProductRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ThemeModule.html" data-type="entity-link" >ThemeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ThemeModule-a90ce7e207cff20572a763cc7629f16abd9cdb116f5f3e9facdb7fdbe5a80a89edadaa0c8f45976c0121243a4dc88a1635c29091d83bc8f4c19259c7b28c8bae"' : 'data-bs-target="#xs-components-links-module-ThemeModule-a90ce7e207cff20572a763cc7629f16abd9cdb116f5f3e9facdb7fdbe5a80a89edadaa0c8f45976c0121243a4dc88a1635c29091d83bc8f4c19259c7b28c8bae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThemeModule-a90ce7e207cff20572a763cc7629f16abd9cdb116f5f3e9facdb7fdbe5a80a89edadaa0c8f45976c0121243a4dc88a1635c29091d83bc8f4c19259c7b28c8bae"' :
                                            'id="xs-components-links-module-ThemeModule-a90ce7e207cff20572a763cc7629f16abd9cdb116f5f3e9facdb7fdbe5a80a89edadaa0c8f45976c0121243a4dc88a1635c29091d83bc8f4c19259c7b28c8bae"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-965fc19e69d13c83cb4cf0fbd12c98164f69fd304db6d3523fb04405562966718a95938f6df8c2b6ec3d7cce39fd309cce758c87ecd4fcc58889aa4ab326885c"' : 'data-bs-target="#xs-components-links-module-UserModule-965fc19e69d13c83cb4cf0fbd12c98164f69fd304db6d3523fb04405562966718a95938f6df8c2b6ec3d7cce39fd309cce758c87ecd4fcc58889aa4ab326885c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-965fc19e69d13c83cb4cf0fbd12c98164f69fd304db6d3523fb04405562966718a95938f6df8c2b6ec3d7cce39fd309cce758c87ecd4fcc58889aa4ab326885c"' :
                                            'id="xs-components-links-module-UserModule-965fc19e69d13c83cb4cf0fbd12c98164f69fd304db6d3523fb04405562966718a95938f6df8c2b6ec3d7cce39fd309cce758c87ecd4fcc58889aa4ab326885c"' }>
                                            <li class="link">
                                                <a href="components/UserListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/LoginDTO.html" data-type="entity-link" >LoginDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Productdto.html" data-type="entity-link" >Productdto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRegister.html" data-type="entity-link" >UserRegister</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminService.html" data-type="entity-link" >AdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RestService.html" data-type="entity-link" >RestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRegisterDateService.html" data-type="entity-link" >UserRegisterDateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/CouchDBInterceptor.html" data-type="entity-link" >CouchDBInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-1.html" data-type="entity-link" >DialogData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});