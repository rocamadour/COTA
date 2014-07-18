Services.StartTransaction "Performance"

'LOGIN
RunAction "LogIn [LogIn]", oneIteration


Window("Menú Principal").WaitProperty "enabled",true,25
Window("Menú Principal").Move 286,146 @@ hightlight id_;_1575892_;_script infofile_;_ZIP::ssf7.xml_;_
Window("Menú Principal").WinButton("A&verías").Check CheckPoint("A&verías") @@ hightlight id_;_920372_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Menú Principal").WinButton("A&verías").Click @@ hightlight id_;_920372_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Menú Principal Averías").Move 347,103 @@ hightlight id_;_199996_;_script infofile_;_ZIP::ssf9.xml_;_
Window("Menú Principal Averías").WinButton("Averías Telefonía &Básica").Check CheckPoint("Averías Telefonía &Básica") @@ hightlight id_;_199998_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Menú Principal Averías").WinButton("Averías Telefonía &Básica").Click @@ hightlight id_;_199998_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Menú Principal Averías_2").Move 343,121 @@ hightlight id_;_592538_;_script infofile_;_ZIP::ssf11.xml_;_
Window("Menú Principal Averías_2").WinButton("R&ecepcionar").Check CheckPoint("R&ecepcionar") @@ hightlight id_;_1117418_;_script infofile_;_ZIP::ssf12.xml_;_
Window("Menú Principal Averías_2").WinButton("R&ecepcionar").Click @@ hightlight id_;_1117418_;_script infofile_;_ZIP::ssf12.xml_;_
Window("Recepcionar Averías").Move 397,134 @@ hightlight id_;_1706726_;_script infofile_;_ZIP::ssf13.xml_;_


Window("Recepcionar Averías").WinEditor("Número de Línea:").Check CheckPoint("Número de Línea:") @@ hightlight id_;_789654_;_script infofile_;_ZIP::ssf42.xml_;_
Window("Recepcionar Averías").WinEditor("Edit").Check CheckPoint("Edit") @@ hightlight id_;_527556_;_
Window("Recepcionar Averías").WinEditor("Número de Línea:").SetSelection 0,0,0,2 @@ hightlight id_;_789654_;_script infofile_;_ZIP::ssf42.xml_;_
Window("Recepcionar Averías").WinEditor("Número de Línea:").Type  micBack @@ hightlight id_;_789654_;_script infofile_;_ZIP::ssf43.xml_;_
'NUMERO DE TELEFONO
Window("Recepcionar Averías").WinEditor("Número de Línea:").Type DataTable("Prefijo", dtLocalSheet) @@ hightlight id_;_789386_;_script infofile_;_ZIP::ssf21.xml_;_
Window("Recepcionar Averías").WinEditor("Edit").Type  micTab @@ hightlight id_;_723762_;_script infofile_;_ZIP::ssf22.xml_;_
Window("Recepcionar Averías").WinEditor("Edit").SetCaretPos 0,0 @@ hightlight id_;_723762_;_script infofile_;_ZIP::ssf23.xml_;_
Window("Recepcionar Averías").WinEditor("Edit").Type DataTable("Numero", dtLocalSheet)
Window("Recepcionar Averías").WinButton("&Buscar").Click
'Window("Información").WinButton("&Bien").Click
Window("Recepcionar Averías").WinButton("&?").WaitProperty "enabled",true,30
Window("Recepcionar Averías").WinButton("&?").Click
'ELIGE EL TIPO DE PROBLEMA QUE TIENE LA LINEA O EL EQUIPO
For i = 1 To 100
	Window("Códigos de Falta").WinObject("AE Runtime").Click 48,44
	Cod = Window("Códigos de Falta").WinEdit("Edit").GetVisibleText
	MSGBOX(Cod)
	If Cod = "|9808" or Cod = "|9643" Then
		Window("Códigos de Falta").WinButton("&Seleccionar").Click
		Exit For		
	End If
	Window("Códigos de Falta").WinScrollBar("ScrollBar").NextLine 1
Next

Window("Recepcionar Averías").CaptureBitmap "C:\Automatización\COTA\Capturas\AltaAveria\Averia.png", True
Reporter.ReportEvent micPass, "Averia", "Funcionó", "C:\Automatización\COTA\Capturas\AltaAveria\Averia.png"
'CONFIRMACIÓN DEL PEDIDO
Window("Recepcionar Averías").WinButton("Con&firmar").Click @@ hightlight id_;_1376326_;_script infofile_;_ZIP::ssf37.xml_;_
Window("Recepcionar Averías").WinButton("&Volver").Click @@ hightlight id_;_331052_;_script infofile_;_ZIP::ssf38.xml_;_
Window("Menú Principal Averías_2").WinButton("&Volver").Click @@ hightlight id_;_985896_;_script infofile_;_ZIP::ssf39.xml_;_
Window("Menú Principal Averías").Click 70,373 @@ hightlight id_;_199996_;_script infofile_;_ZIP::ssf40.xml_;_
Window("Menú Principal Averías").WinButton("&Volver").Click @@ hightlight id_;_1182498_;_script infofile_;_ZIP::ssf41.xml_;_


Services.EndTransaction "Performance"