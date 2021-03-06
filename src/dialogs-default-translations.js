/**
 * Dialog Default Translations.
 *
 * Include this module if you're not already using angular-translate in your application, and
 * add it to your application module's dependency list in order to get default header and 
 * dialog messages to appear.
 * 
 * Ex: var myApp = angular.module('myApplication',['dialogs.main','dialogs.default-translations']);
 *
 * It was necessary to separate this out for those already using angular-translate because this would
 * automatically reset their translation list for 'en-US'
 *
 * For those already using angular-translate, just copy the list of DIALOG_[..] translations to your
 * translation list where you set 'en-US' using the $translateProvider.
 */

//== Translations =============================================================//

 angular.module('dialogs.default-translations',['pascalprecht.translate'])
 /**
     * Default translations in English.
     * 
     * Use angular-translate's $translateProvider to provide translations in an
     * alternate language.
     *
     * $translateProvider.translations('[lang]',{[translations]});
     * To use alternate translations set the preferred language to your desired
     * language.
     * $translateProvider.preferredLanguage('[lang]');
     */
    .config(['$translateProvider',function($translateProvider){
        $translateProvider.translations('en-US',{
            DIALOGS_ERROR: "Error",
            DIALOGS_ERROR_MSG: "An unknown error has occurred.",
            DIALOGS_CLOSE: "Close",
            DIALOGS_PLEASE_WAIT: "Please Wait",
            DIALOGS_PLEASE_WAIT_ELIPS: "Please Wait...",
            DIALOGS_PLEASE_WAIT_MSG: "Waiting on operation to complete.",
            DIALOGS_PERCENT_COMPLETE: "% Complete",
            DIALOGS_NOTIFICATION: "Notification",
            DIALOGS_NOTIFICATION_MSG: "Unknown application notification.",
            DIALOGS_CONFIRMATION: "Confirmation",
            DIALOGS_CONFIRMATION_MSG: "Confirmation required.",
            DIALOGS_OK: "OK",
            DIALOGS_YES: "Yes",
            DIALOGS_NO: "No"
        });

        $translateProvider.translations('zh-CN',{
          DIALOGS_ERROR: "错误",
          DIALOGS_ERROR_MSG: "出现未知错误。",
          DIALOGS_CLOSE: "关闭",
          DIALOGS_PLEASE_WAIT: "请稍候",
          DIALOGS_PLEASE_WAIT_ELIPS: "请稍候...",
          DIALOGS_PLEASE_WAIT_MSG: "请等待操作完成。",
          DIALOGS_PERCENT_COMPLETE: "% 已完成",
          DIALOGS_NOTIFICATION: "通知",
          DIALOGS_NOTIFICATION_MSG: "未知应用程序的通知。",
          DIALOGS_CONFIRMATION: "确认",
          DIALOGS_CONFIRMATION_MSG: "确认要求。",
          DIALOGS_OK: "确定",
          DIALOGS_YES: "确认",
          DIALOGS_NO: "取消"
        });

        $translateProvider.translations('es',{
          DIALOGS_ERROR: "Error",
          DIALOGS_ERROR_MSG: "Se ha producido un error.",
          DIALOGS_CLOSE: "Cerrar",
          DIALOGS_PLEASE_WAIT: "Espere por favor",
          DIALOGS_PLEASE_WAIT_ELIPS: "Espere por favor...",
          DIALOGS_PLEASE_WAIT_MSG: "Completando operación.",
          DIALOGS_PERCENT_COMPLETE: "% Completado",
          DIALOGS_NOTIFICATION: "Notificación",
          DIALOGS_NOTIFICATION_MSG: "Notificación de una aplicación desconocida.",
          DIALOGS_CONFIRMATION: "Confirmación",
          DIALOGS_CONFIRMATION_MSG: "Se requiere confirmacion.",
          DIALOGS_OK: "Aceptar",
          DIALOGS_YES: "Sí",
          DIALOGS_NO: "No"
        });

        $translateProvider.preferredLanguage('en-US');
    }]); // end config
