Services.StartTransaction "Performance"

'LOGIN
RunAction "LogIn [LogIn]", oneIteration


Window("Menú Principal").WaitProperty "enabled",true,25
Window("Menú Principal").Move 381,162 @@ hightlight id_;_659248_;_script infofile_;_ZIP::ssf1.xml_;_
Window("Menú Principal").Check CheckPoint("Menú Principal") @@ hightlight id_;_659248_;_script infofile_;_ZIP::ssf2.xml_;_
Window("Menú Principal").WinButton("Administración de &Pedidos").Click @@ hightlight id_;_659252_;_script infofile_;_ZIP::ssf2.xml_;_
Window("Administración de Pedidos").Move 413,139 @@ hightlight id_;_986064_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Administración de Pedidos").Check CheckPoint("Administración de Pedidos") @@ hightlight id_;_986064_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Administración de Pedidos").WinRadioButton("Clientes").Set @@ hightlight id_;_1641256_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Administración de Pedidos").WinButton("Gestión de &Pedidos").Check CheckPoint("Gestión de &Pedidos") @@ hightlight id_;_594354_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Administración de Pedidos").WinButton("Gestión de &Pedidos").Click @@ hightlight id_;_594354_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Menú de Tipos de Pedido").Move 414,135 @@ hightlight id_;_1249420_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Menú de Tipos de Pedido").Check CheckPoint("Menú de Tipos de Pedido") @@ hightlight id_;_1249420_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Menú de Tipos de Pedido").Activate @@ hightlight id_;_1249420_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Menú de Tipos de Pedido").WinEditor("Número:").SetCaretPos 0,0 @@ hightlight id_;_987386_;_script infofile_;_ZIP::ssf9.xml_;_
Window("Menú de Tipos de Pedido").WinEditor("Número:").SetSelection 0,0,0,1 @@ hightlight id_;_987386_;_script infofile_;_ZIP::ssf10.xml_;_
'NÚMERO DE CLIENTE
Window("Menú de Tipos de Pedido").WinEditor("Número:").Type DataTable("Cliente", dtLocalSheet) @@ hightlight id_;_987386_;_script infofile_;_ZIP::ssf11.xml_;_
Window("Menú de Tipos de Pedido").WinButton("B&uscar Cliente").Click @@ hightlight id_;_593664_;_script infofile_;_ZIP::ssf12.xml_;_
Window("Menú de Tipos de Pedido").WinButton("&?").Click
'ELECCION TIPO DE PRODUCTO
For i = 1 To 100
	Window("Tipo Producto").WinObject("AE Runtime").Click 24,47
	Tipo = Window("Tipo Producto").WinEdit("Edit").GetVisibleText
	If Tipo = "10" Then
		Window("Tipo Producto").WinButton("&Seleccionar").Click
		Exit For
	End If
	Window("Tipo Producto").WinScrollBar("ScrollBar").NextLine 1
Next
 @@ hightlight id_;_1705890_;_script infofile_;_ZIP::ssf14.xml_;_
Window("Menú de Tipos de Pedido").WinCheckBox("Alta de Línea").Check CheckPoint("Alta de Línea") @@ hightlight id_;_594178_;_script infofile_;_ZIP::ssf44.xml_;_
'CHECK QUE INDICA QUE ES UN ALTA DE TB
Window("Menú de Tipos de Pedido").WinCheckBox("Alta de Línea").Set "ON" @@ hightlight id_;_594178_;_script infofile_;_ZIP::ssf44.xml_;_
Window("Búsqueda de Cuentas del").Move 345,147 @@ hightlight id_;_2756462_;_script infofile_;_ZIP::ssf45.xml_;_
Window("Búsqueda de Cuentas del").Check CheckPoint("Búsqueda de Cuentas del") @@ hightlight id_;_2756462_;_script infofile_;_ZIP::ssf45.xml_;_
Window("Búsqueda de Cuentas del").WinObject("Nombre:").Click 177,46 @@ hightlight id_;_6291532_;_script infofile_;_ZIP::ssf46.xml_;_
Window("Búsqueda de Cuentas del").WinButton("&Seleccionar").Click @@ hightlight id_;_854982_;_script infofile_;_ZIP::ssf47.xml_;_
Window("Menú de Tipos de Pedido").CaptureBitmap "C:\Automatización\COTA\Capturas\AltaTB\Pedidos.png", True
Reporter.ReportEvent micPass, "Pedidos", "Funcionó", "C:\Automatización\COTA\Capturas\AltaTB\Pedidos.png"
Window("Menú de Tipos de Pedido").WinButton("&Confirmar").Check CheckPoint("&Confirmar") @@ hightlight id_;_1443968_;_script infofile_;_ZIP::ssf48.xml_;_
Window("Menú de Tipos de Pedido").WinButton("&Confirmar").Click @@ hightlight id_;_1443968_;_script infofile_;_ZIP::ssf48.xml_;_
Window("Ingresar Alta de Línea").Move 382,138 @@ hightlight id_;_1642430_;_script infofile_;_ZIP::ssf49.xml_;_
Window("Ingresar Alta de Línea").Check CheckPoint("Ingresar Alta de Línea") @@ hightlight id_;_1642430_;_script infofile_;_ZIP::ssf50.xml_;_
Window("Ingresar Alta de Línea").Activate @@ hightlight id_;_1642430_;_script infofile_;_ZIP::ssf50.xml_;_
'CATEGORIA
Window("Ingresar Alta de Línea").WinButton("&?").Check CheckPoint("&?")
Window("Ingresar Alta de Línea").WinButton("&?_2").Check CheckPoint("&?_2") @@ hightlight id_;_986980_;_script infofile_;_ZIP::ssf51.xml_;_
Window("Ingresar Alta de Línea").WinButton("&?").Click @@ hightlight id_;_1313462_;_script infofile_;_ZIP::ssf51.xml_;_
Window("Tipo de Categoría").WinObject("AE Runtime").Click 164,86 @@ hightlight id_;_1247590_;_script infofile_;_ZIP::ssf52.xml_;_
Window("Tipo de Categoría").WinButton("&Seleccionar").Click @@ hightlight id_;_2231334_;_script infofile_;_ZIP::ssf53.xml_;_
'ACTIVIDAD
Window("Ingresar Alta de Línea").WinButton("&?_2").Click @@ hightlight id_;_986980_;_script infofile_;_ZIP::ssf54.xml_;_
Window("Ingresar Alta de Línea").WinButton("A&gregar a Lista").Click @@ hightlight id_;_1511676_;_script infofile_;_ZIP::ssf55.xml_;_
'CONFIRMACIÓN
Window("Confirmación").WinButton("&Si").Click @@ hightlight id_;_528120_;_script infofile_;_ZIP::ssf56.xml_;_
Window("Ingresar Alta de Línea").CaptureBitmap "C:\Automatización\COTA\Capturas\AltaTB\AltaLinea.png", True
Reporter.ReportEvent micPass, "Alta de Linea", "Funcionó", "C:\Automatización\COTA\Capturas\AltaTB\AltaLinea.png"
Window("Ingresar Alta de Línea").WinButton("Con&firmar").Click @@ hightlight id_;_593370_;_script infofile_;_ZIP::ssf57.xml_;_
Window("Lista de formas de pago").Move 315,155 @@ hightlight id_;_1248178_;_script infofile_;_ZIP::ssf58.xml_;_
Window("Lista de formas de pago").Check CheckPoint("Lista de formas de pago") @@ hightlight id_;_1248178_;_script infofile_;_ZIP::ssf58.xml_;_
Window("Lista de formas de pago").CaptureBitmap "C:\Automatización\COTA\Capturas\AltaTB\FPago.png", True
Reporter.ReportEvent micPass, "Formas de Pago", "Funcionó", "C:\Automatización\COTA\Capturas\AltaTB\FPago.png"
Window("Lista de formas de pago").WinButton("Con&firmar").Click @@ hightlight id_;_659674_;_script infofile_;_ZIP::ssf59.xml_;_

Window("Lista de promociones a").WaitProperty "enabled", true, 30
Window("Lista de promociones a").Move 294,125 @@ hightlight id_;_790428_;_script infofile_;_ZIP::ssf60.xml_;_
Window("Lista de promociones a").Check CheckPoint("Lista de promociones a") @@ hightlight id_;_790428_;_script infofile_;_ZIP::ssf60.xml_;_
Window("Lista de promociones a").CaptureBitmap "C:\Automatización\COTA\Capturas\AltaTB\Promociones.png", True
Reporter.ReportEvent micPass, "Promociones", "Funcionó", "C:\Automatización\COTA\Capturas\AltaTB\Promociones.png"
Window("Lista de promociones a").WinButton("Con&firmar").Click @@ hightlight id_;_265858_;_script infofile_;_ZIP::ssf61.xml_;_

Window("Información").WaitProperty "enabled", true, 30 @@ hightlight id_;_852016_;_script infofile_;_ZIP::ssf62.xml_;_
Window("Información").WinButton("&Bien").Click @@ hightlight id_;_852016_;_script infofile_;_ZIP::ssf62.xml_;_
Window("Pedido Generado").Move 314,153 @@ hightlight id_;_1446288_;_script infofile_;_ZIP::ssf63.xml_;_
Window("Pedido Generado").Check CheckPoint("Pedido Generado") @@ hightlight id_;_1446288_;_script infofile_;_ZIP::ssf63.xml_;_
Window("Pedido Generado").CaptureBitmap "C:\Automatización\COTA\Capturas\AltaTB\Fin.png", True
Reporter.ReportEvent micPass, "Finalizacion", "Funcionó", "C:\Automatización\COTA\Capturas\AltaTB\Fin.png"
Window("Pedido Generado").WinButton("&Continuar").Click @@ hightlight id_;_331486_;_script infofile_;_ZIP::ssf64.xml_;_

Window("Administración de Pedidos").WaitProperty "enabled", true, 30
Window("Administración de Pedidos").WinButton("&Volver").Click @@ hightlight id_;_855546_;_script infofile_;_ZIP::ssf65.xml_;_

Services.EndTransaction "Performance"