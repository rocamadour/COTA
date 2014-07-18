Services.StartTransaction "Performance"

'LOGIN
RunAction "LogIn [LogIn]", oneIteration


Window("Menú Principal").WaitProperty "enabled",true,25
Window("Menú Principal").Move 357,123 @@ hightlight id_;_331650_;_script infofile_;_ZIP::ssf1.xml_;_
Window("Menú Principal").WinButton("Administración de &Pedidos").Click @@ hightlight id_;_331648_;_script infofile_;_ZIP::ssf2.xml_;_
Window("Administración de Pedidos").Move 333,150 @@ hightlight id_;_265686_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Administración de Pedidos").WinRadioButton("Líneas").Set @@ hightlight id_;_526034_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Administración de Pedidos").WinButton("Gestión de &Pedidos").Click @@ hightlight id_;_591544_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Menú de Tipos de Pedido").Move 300,120 @@ hightlight id_;_265934_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Menú de Tipos de Pedido").WinButton("&?").Click @@ hightlight id_;_527914_;_script infofile_;_ZIP::ssf251.xml_;_
Window("Tipo Producto").WinScrollBar("ScrollBar").Set 50 @@ hightlight id_;_2887452_;_script infofile_;_ZIP::ssf252.xml_;_
'SELECCION TIPO DE PRODUCTO
For i = 1 To 100
	Window("Tipo Producto").WinObject("AE Runtime").Click 19,44 @@ hightlight id_;_528020_;_script infofile_;_ZIP::ssf262.xml_;_
	Tipo = Window("Tipo Producto").WinEdit("Edit").GetVisibleText
	If Tipo = "10" Then
		Window("Tipo Producto").CaptureBitmap "C:\Automatización\COTA\Capturas\AltaEquipo\TProd.png", True
			Reporter.ReportEvent micPass, "Tipo de Producto", "Funciona", "C:\Automatización\COTA\Capturas\AltaEquipo\TProd.png"
		Window("Tipo Producto").WinButton("&Seleccionar").Click
		Exit For		
	End If
	Window("Tipo Producto").WinScrollBar("ScrollBar").NextLine 1
Next
 @@ hightlight id_;_200274_;_script infofile_;_ZIP::ssf47.xml_;_
Window("Menú de Tipos de Pedido").WinButton("Cambio &Técnico").Click @@ hightlight id_;_265942_;_script infofile_;_ZIP::ssf48.xml_;_
Window("Seleccionar Trámites Técnicos").WinCheckBox("Alta/Baja Equipo").Set "ON" @@ hightlight id_;_200444_;_script infofile_;_ZIP::ssf49.xml_;_
Window("Seleccionar Trámites Técnicos").WinButton("Con&firmar").Click @@ hightlight id_;_200440_;_script infofile_;_ZIP::ssf50.xml_;_
Window("Gestión de Pedidos por").Move 220,217 @@ hightlight id_;_200552_;_script infofile_;_ZIP::ssf188.xml_;_
'NÚMERO DE TELÉFONO
Window("Gestión de Pedidos por").WinEditor("Código Interurbano:").Type DataTable("Prefijo", dtLocalSheet) @@ hightlight id_;_200550_;_script infofile_;_ZIP::ssf189.xml_;_
Window("Gestión de Pedidos por").WinEditor("Número de Línea:").Type DataTable("Numero", dtLocalSheet)
Window("Gestión de Pedidos por").WinButton(" A&gregar").Click @@ hightlight id_;_200546_;_script infofile_;_ZIP::ssf194.xml_;_
wait(20)
Window("Gestión de Pedidos por").WinObject("Número de Línea:").Click 178,50 @@ hightlight id_;_200572_;_script infofile_;_ZIP::ssf195.xml_;_
Window("Gestión de Pedidos por").WinButton("Con&firmar").Click @@ hightlight id_;_265982_;_script infofile_;_ZIP::ssf196.xml_;_
Window("Alta/Baja de Equipo").WinObject("AE Runtime").Click 288,41
Window("Alta/Baja de Equipo").WinButton("&Buscar").Click
'Window("Alta/Baja de Equipo").WinObject("AE Runtime_2").VirtualObject("object").Click 71,6 @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf326.xml_;_

'INESTABLE CHECKEAR
Window("Alta/Baja de Equipo").WinObject("AE Runtime_2").Click 171,83 @@ hightlight id_;_659356_;_script infofile_;_ZIP::ssf342.xml_;_


Window("Alta/Baja de Equipo").WinButton("A&gregar ").Click @@ hightlight id_;_134982_;_script infofile_;_ZIP::ssf212.xml_;_
Window("Alta/Baja de Equipo").WinButton("A&gregar a Lista").Click @@ hightlight id_;_528186_;_script infofile_;_ZIP::ssf213.xml_;_
Window("Alta/Baja de Equipo").WinEdit("Edit_2").SetSelection 0,1 @@ hightlight id_;_331916_;_script infofile_;_ZIP::ssf314.xml_;_
Window("Alta/Baja de Equipo").WinEdit("Edit_2").Check CheckPoint("Edit_2") @@ hightlight id_;_331916_;_script infofile_;_ZIP::ssf314.xml_;_

Window("Alta/Baja de Equipo").WinButton("Con&firmar").Click @@ hightlight id_;_659074_;_script infofile_;_ZIP::ssf214.xml_;_
Window("Listado de Equipos").WinObject("AE Runtime").Click 309,49 @@ hightlight id_;_135098_;_script infofile_;_ZIP::ssf215.xml_;_
Window("Listado de Equipos").WinButton("Con&tinuar").Click @@ hightlight id_;_135092_;_script infofile_;_ZIP::ssf216.xml_;_
Window("Lista de promociones a").Move 276,181 @@ hightlight id_;_984768_;_script infofile_;_ZIP::ssf218.xml_;_
Window("Lista de promociones a").WinButton("Con&firmar").Click @@ hightlight id_;_69584_;_script infofile_;_ZIP::ssf219.xml_;_
Window("Información").WinButton("&Bien").Click @@ hightlight id_;_266078_;_script infofile_;_ZIP::ssf220.xml_;_
Window("Pedido Generado").Move 270,71 @@ hightlight id_;_135072_;_script infofile_;_ZIP::ssf221.xml_;_

Window("Pedido Generado").WinObject("AE Runtime").Click 30,44 @@ hightlight id_;_855606_;_script infofile_;_ZIP::ssf270.xml_;_
Window("Pedido Generado").WinEdit("Edit_2").SetSelection 0,8 @@ hightlight id_;_3018524_;_script infofile_;_ZIP::ssf271.xml_;_
Window("Pedido Generado").WinEdit("Edit_2").Check CheckPoint("Edit")
Window("Pedido Generado").WinButton("&Continuar").Click @@ hightlight id_;_69610_;_script infofile_;_ZIP::ssf223.xml_;_
'DATOS PERSONALES DEL USUARIO
Window("Ingrese número de referencia").Move 308,110 @@ hightlight id_;_266088_;_script infofile_;_ZIP::ssf224.xml_;_
Window("Ingrese número de referencia").WinEditor("Nombre").SetCaretPos 0,0 @@ hightlight id_;_331372_;_script infofile_;_ZIP::ssf225.xml_;_
Window("Ingrese número de referencia").WinEditor("Nombre").Type DataTable("Nombre", dtLocalSheet)
Window("Ingrese número de referencia").WinEditor("Nombre").Type  micTab  @@ hightlight id_;_331372_;_script infofile_;_ZIP::ssf227.xml_;_
Window("Ingrese número de referencia").WinEditor("Apellido").Type DataTable("Apellido", dtLocalSheet) @@ hightlight id_;_331374_;_script infofile_;_ZIP::ssf228.xml_;_
Window("Ingrese número de referencia").WinEditor("Apellido").Type  micTab 
 @@ hightlight id_;_724848_;_script infofile_;_ZIP::ssf297.xml_;_
Window("Ingrese número de referencia").WinEditor("Cód. Interurbano_3").Type DataTable("Inter", dtLocalSheet) @@ hightlight id_;_724848_;_script infofile_;_ZIP::ssf298.xml_;_
Window("Ingrese número de referencia").WinEditor("Característica_3").SetCaretPos 0,0 @@ hightlight id_;_200998_;_script infofile_;_ZIP::ssf299.xml_;_
Window("Ingrese número de referencia").WinEditor("Característica_3").Type DataTable("Caract", dtLocalSheet)
Window("Ingrese número de referencia").WinEditor("Nro. Línea_3").SetCaretPos 0,0 @@ hightlight id_;_14553006_;_script infofile_;_ZIP::ssf302.xml_;_
Window("Ingrese número de referencia").WinEditor("Nro. Línea_3").Type DataTable("Linea", dtLocalSheet) @@ hightlight id_;_14553006_;_script infofile_;_ZIP::ssf303.xml_;_
Window("Ingrese número de referencia").WinEditor("Cód. Interurbano_4").SetCaretPos 0,0 @@ hightlight id_;_659304_;_script infofile_;_ZIP::ssf304.xml_;_
Window("Ingrese número de referencia").WinEditor("Cód. Interurbano_4").Type DataTable("Inter2", dtLocalSheet) @@ hightlight id_;_659304_;_script infofile_;_ZIP::ssf305.xml_;_
Window("Ingrese número de referencia").WinEditor("Característica_4").SetCaretPos 0,0 @@ hightlight id_;_332056_;_script infofile_;_ZIP::ssf306.xml_;_
Window("Ingrese número de referencia").WinEditor("Característica_4").Type DataTable("Caract2", dtLocalSheet) @@ hightlight id_;_332056_;_script infofile_;_ZIP::ssf307.xml_;_
Window("Ingrese número de referencia").WinEditor("Nro. Línea_4").SetCaretPos 0,0 @@ hightlight id_;_266528_;_script infofile_;_ZIP::ssf308.xml_;_
Window("Ingrese número de referencia").WinEditor("Nro. Línea_4").Type DataTable("Linea2", dtLocalSheet) @@ hightlight id_;_266528_;_script infofile_;_ZIP::ssf309.xml_;_
Window("Ingrese número de referencia").WinEditor("Edit_2").SetCaretPos 0,0 @@ hightlight id_;_921352_;_script infofile_;_ZIP::ssf310.xml_;_
Window("Ingrese número de referencia").WinEditor("Edit_2").Type DataTable("Mail", dtLocalSheet) @@ hightlight id_;_921352_;_script infofile_;_ZIP::ssf311.xml_;_
 @@ hightlight id_;_921352_;_script infofile_;_ZIP::ssf313.xml_;_
 'CONFIRMA ALTA DE EQUIPO
Window("Ingrese número de referencia").WinButton("&Confirmar").Click @@ hightlight id_;_266106_;_script infofile_;_ZIP::ssf243.xml_;_
Window("Confirmación").WinButton("&Si").Click @@ hightlight id_;_266080_;_script infofile_;_ZIP::ssf244.xml_;_
Window("Pedido Generado").WinButton("&Continuar").Click @@ hightlight id_;_69610_;_script infofile_;_ZIP::ssf248.xml_;_


Services.EndTransaction "Performance"