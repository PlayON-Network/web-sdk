declare module '@playon-network/engine' {
  /**
   * @param {string} error - The message describing why the provided auth token has failed.
   * @returns {Promise<string>} - A promise which resolves with the new auth token to be used by the PLAYON Engine.
   * @since 1.2.0
   */
  export interface onAuthTokenErrorCallback { (error: string): string }

  /**
   * @param {EngineOptions} config
   * @returns {Promise<PlayonNetworkEngine>}
   * @since 1.0.0
   */
  export function initializeEngine(config: EngineOptions): Promise<PlayonNetworkEngine>;

  /**
   * @public
   * @since 1.0.0
   */
  export interface PlayonNetworkEngine {
    /**
     * Check if the engine is loaded and ready to be used.
     *
     * @public
     * @readonly
     * @type {boolean}
     * @since 1.0.0
     */
    isLoaded: boolean;

    /**
     * The base URL of the operator in the Playon Network
     *
     * @package
     * @readonly
     * @type {string}
     * @since 1.0.0
     */
    baseUrl: string;
  }

  /**
   * @public
   * @since 1.0.0
   */
  export interface PlayonNetworkApp {
    /**
     * @package
     * @param {PlayonNetworkEngine} engine
     * @param {AppOptions} [options]
     * @since 1.0.0
     */
    constructor(engine: PlayonNetworkEngine, options: PlayonNetworkEngine): void;

    /**
     * @package
     * @param {HTMLElement|string} [element]
     * @returns {Promise<PlayonNetworkApp>}
     * @since 1.0.0
     */
    load(element?: HTMLElement|string): PlayonNetworkApp;
  }

  /**
   * @private
   * @since 1.1.0
   */
  export interface AppOptions {
    /**
     * @private
     * @since 1.1.0
     */
    serviceWorkerVersion?: string;

    /**
     * @private
     * @since 1.1.0
     */
    entrypoint?: string;
  }

  /**
   * Configuration options for the PlayON Network Engine.
   *
   * @public
   * @since 1.0.0
   */
  export interface EngineOptions {
    /**
     * The PLAYON Network ID (NID) associated to your account.
     *
     * @since 1.0.0
     */
    nid: string;

    /**
     * @since 1.0.0
     */
    authToken: string;

    /**
     * This required callback is used for when the provided auth token has failed
     * in some way. For example, when the token is invalid or has expired.
     *
     * From this callback, you can request a new auth token to your backend and return it
     * or redirect to your authentication screen in your application.
     *
     * @since 1.2.0
     */
    onAuthTokenError: onAuthTokenErrorCallback;

    /**
     * The attestation token is required to pass the device verification when
     * using a **localhost** environment.
     *
     * Because this token allows access to the app resources without a valid
     * device, it is crucial that you keep it private.
     *
     * Don't commit it to a repository and don't deploy it to any environment.
     *
     * If your token is ever compromised, contact with us to revoke it
     * immediately and provide you a new one.
     *
     * @since 1.1.0
     */
    attestationToken?: string;

    /**
     * Configure the Engine in test mode to use the staging environment
     * of the PlayON Network. Default value is `false`.
     *
     * @default false
     * @since 1.0.0
     */
    isTesting?: boolean;

    /**
     * @private
     * @default false
     * @since 1.0.0
     */
    isStandalone?: boolean;

    /**
     * @private
     * @since 1.1.0
     */
    entrypoint?: string;

    /**
     * @private
     * @since 1.1.0
     */
    path?: string;
  }
}