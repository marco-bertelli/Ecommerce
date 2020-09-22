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
                    <a href="index.html" data-type="index-link">progetto documentation</a>
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
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ae0ee2bcb42e8d403822ab7dd6eab625"' : 'data-target="#xs-components-links-module-AppModule-ae0ee2bcb42e8d403822ab7dd6eab625"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ae0ee2bcb42e8d403822ab7dd6eab625"' :
                                            'id="xs-components-links-module-AppModule-ae0ee2bcb42e8d403822ab7dd6eab625"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CarrelloModule.html" data-type="entity-link">CarrelloModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CarrelloModule-b886dcae9fd2e8464b479c2fd5658a11"' : 'data-target="#xs-components-links-module-CarrelloModule-b886dcae9fd2e8464b479c2fd5658a11"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CarrelloModule-b886dcae9fd2e8464b479c2fd5658a11"' :
                                            'id="xs-components-links-module-CarrelloModule-b886dcae9fd2e8464b479c2fd5658a11"' }>
                                            <li class="link">
                                                <a href="components/CarrelloComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarrelloComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CarrelloRoutingModule.html" data-type="entity-link">CarrelloRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-6cf13da07a777d4b91b75473d4cc8e59"' : 'data-target="#xs-injectables-links-module-CoreModule-6cf13da07a777d4b91b75473d4cc8e59"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-6cf13da07a777d4b91b75473d4cc8e59"' :
                                        'id="xs-injectables-links-module-CoreModule-6cf13da07a777d4b91b75473d4cc8e59"' }>
                                        <li class="link">
                                            <a href="injectables/HttpCommunicationsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HttpCommunicationsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RegistrazioneServerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RegistrazioneServerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomizeModule.html" data-type="entity-link">CustomizeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CustomizeModule-3e9ed1cd6a6bec67cb381ff1beb43482"' : 'data-target="#xs-components-links-module-CustomizeModule-3e9ed1cd6a6bec67cb381ff1beb43482"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomizeModule-3e9ed1cd6a6bec67cb381ff1beb43482"' :
                                            'id="xs-components-links-module-CustomizeModule-3e9ed1cd6a6bec67cb381ff1beb43482"' }>
                                            <li class="link">
                                                <a href="components/CustomizeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomizeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomizeRoutingModule.html" data-type="entity-link">CustomizeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-55da66cb274d2f7a7c531e3afe57fcde"' : 'data-target="#xs-components-links-module-HomeModule-55da66cb274d2f7a7c531e3afe57fcde"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-55da66cb274d2f7a7c531e3afe57fcde"' :
                                            'id="xs-components-links-module-HomeModule-55da66cb274d2f7a7c531e3afe57fcde"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-86372c4f550161fac8658cb5e14acf49"' : 'data-target="#xs-components-links-module-LoginModule-86372c4f550161fac8658cb5e14acf49"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-86372c4f550161fac8658cb5e14acf49"' :
                                            'id="xs-components-links-module-LoginModule-86372c4f550161fac8658cb5e14acf49"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoginModule-86372c4f550161fac8658cb5e14acf49"' : 'data-target="#xs-injectables-links-module-LoginModule-86372c4f550161fac8658cb5e14acf49"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoginModule-86372c4f550161fac8658cb5e14acf49"' :
                                        'id="xs-injectables-links-module-LoginModule-86372c4f550161fac8658cb5e14acf49"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoginService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrazioneModule.html" data-type="entity-link">RegistrazioneModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegistrazioneModule-2ce430d8d8d43cbae372f39ae19ffca5"' : 'data-target="#xs-components-links-module-RegistrazioneModule-2ce430d8d8d43cbae372f39ae19ffca5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegistrazioneModule-2ce430d8d8d43cbae372f39ae19ffca5"' :
                                            'id="xs-components-links-module-RegistrazioneModule-2ce430d8d8d43cbae372f39ae19ffca5"' }>
                                            <li class="link">
                                                <a href="components/RegistrazioneComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistrazioneComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RegistrazioneModule-2ce430d8d8d43cbae372f39ae19ffca5"' : 'data-target="#xs-injectables-links-module-RegistrazioneModule-2ce430d8d8d43cbae372f39ae19ffca5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RegistrazioneModule-2ce430d8d8d43cbae372f39ae19ffca5"' :
                                        'id="xs-injectables-links-module-RegistrazioneModule-2ce430d8d8d43cbae372f39ae19ffca5"' }>
                                        <li class="link">
                                            <a href="injectables/RegistrazioneService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RegistrazioneService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrazioneRoutingModule.html" data-type="entity-link">RegistrazioneRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-675011bc3d2a774942af1535d27ee61e"' : 'data-target="#xs-components-links-module-SharedModule-675011bc3d2a774942af1535d27ee61e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-675011bc3d2a774942af1535d27ee61e"' :
                                            'id="xs-components-links-module-SharedModule-675011bc3d2a774942af1535d27ee61e"' }>
                                            <li class="link">
                                                <a href="components/CustomizeFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomizeFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputTextComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagamentoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagamentoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Step2FormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Step2FormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ArticoliEffects.html" data-type="entity-link">ArticoliEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomizeServerService.html" data-type="entity-link">CustomizeServerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpCommunicationsService.html" data-type="entity-link">HttpCommunicationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginEffects.html" data-type="entity-link">LoginEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginServerService.html" data-type="entity-link">LoginServerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegistrazioneServerService.html" data-type="entity-link">RegistrazioneServerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegistrazioneService.html" data-type="entity-link">RegistrazioneService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CarrelloState.html" data-type="entity-link">CarrelloState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginState.html" data-type="entity-link">LoginState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProdottiState.html" data-type="entity-link">ProdottiState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Prodotto.html" data-type="entity-link">Prodotto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});