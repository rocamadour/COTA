Services.StartTransaction "Performance"

'LOGIN
RunAction "Action1 [LogIn]", oneIteration


Window("Menú Principal").WaitProperty "enabled",true,25
Window("Menú Principal").Move 238,121 @@ hightlight id_;_1186142_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Menú Principal").CaptureBitmap "C:\Automatización\COTA\Capturas\MenuPpal.png", True
	Reporter.ReportEvent micPass, "MenuPpal", "Funciona", "C:\Automatización\COTA\Capturas\MenuPpal.png"

Window("Menú Principal").WinButton("A&dministración de Clientes").Check CheckPoint("A&dministración de Clientes") @@ hightlight id_;_399750_;_script infofile_;_ZIP::ssf11.xml_;_
Window("Menú Principal").WinButton("A&dministración de Clientes").Click @@ hightlight id_;_399750_;_script infofile_;_ZIP::ssf11.xml_;_
Window("Menú Principal Clientes").Move 266,141 @@ hightlight id_;_923994_;_script infofile_;_ZIP::ssf12.xml_;_
Window("Menú Principal Clientes").WinButton("Alta de C&lientes").Check CheckPoint("Alta de C&lientes") @@ hightlight id_;_923908_;_script infofile_;_ZIP::ssf13.xml_;_
Window("Menú Principal Clientes").WinButton("Alta de C&lientes").Click @@ hightlight id_;_923908_;_script infofile_;_ZIP::ssf13.xml_;_
Window("Detalle de Cliente").Move 221,132 @@ hightlight id_;_458824_;_script infofile_;_ZIP::ssf14.xml_;_
'TIPO CLIENTE
Window("Detalle de Cliente").WinComboBox("Tipo de Cliente:").Select DataTable("Tipo", dtLocalSheet)
Window("Detalle de Cliente").WinComboBox("Tipo de Cliente:").Type  micTab @@ hightlight id_;_723926_;_script infofile_;_ZIP::ssf16.xml_;_
'APELLIDO
Window("Detalle de Cliente").WinEditor("Apellido:").SetCaretPos 0,0 @@ hightlight id_;_1448138_;_script infofile_;_ZIP::ssf17.xml_;_
Window("Detalle de Cliente").WinEditor("Apellido:").Type DataTable("Apellido", dtLocalSheet)
Window("Detalle de Cliente").WinEditor("Apellido:").Type  micTab @@ hightlight id_;_1448138_;_script infofile_;_ZIP::ssf19.xml_;_
'NOMBRE
Window("Detalle de Cliente").WinEditor("Nombre:").Type DataTable("Nombre", dtLocalSheet)
'SEXO
Dim Sex
Sex = DataTable("Sexo", dtLocalSheet)
If Sex = "M" Then
	Window("Detalle de Cliente").WinCheckBox("Masc").Set "ON"
Else
	Window("Detalle de Cliente").WinCheckBox("Fem").Set "ON"
End If
 @@ hightlight id_;_265276_;_script infofile_;_ZIP::ssf6.xml_;_
'FECHA NAC
 @@ hightlight id_;_1380286_;_script infofile_;_ZIP::ssf294.xml_;_
Window("Detalle de Cliente").WinEditor("Fec Nacim/Inicio Activ:").Type  micHome 
Window("Detalle de Cliente").WinEditor("Fec Nacim/Inicio Activ:").Type micShiftDwn +  micEnd  + micShiftUp @@ hightlight id_;_1380286_;_script infofile_;_ZIP::ssf297.xml_;_
Window("Detalle de Cliente").WinEditor("Fec Nacim/Inicio Activ:").Type  micBack @@ hightlight id_;_1380286_;_script infofile_;_ZIP::ssf298.xml_;_
Window("Detalle de Cliente").WinEditor("Fec Nacim/Inicio Activ:").Type  DataTable("Fecha", dtLocalSheet)
'TIPO DOCUMENTO
Window("Detalle de Cliente").WinButton("&?").Click @@ hightlight id_;_789468_;_script infofile_;_ZIP::ssf26.xml_;_
Window("Tipo de Documento").WinScrollBar("ScrollBar").NextLine 1 @@ hightlight id_;_268494_;_script infofile_;_ZIP::ssf27.xml_;_
Window("Tipo de Documento").WinScrollBar("ScrollBar").NextLine 1 @@ hightlight id_;_268494_;_script infofile_;_ZIP::ssf28.xml_;_
Window("Tipo de Documento").WinScrollBar("ScrollBar").NextLine 1 @@ hightlight id_;_268494_;_script infofile_;_ZIP::ssf29.xml_;_
Window("Tipo de Documento").WinScrollBar("ScrollBar").NextLine 1 @@ hightlight id_;_268494_;_script infofile_;_ZIP::ssf30.xml_;_
Window("Tipo de Documento").WinObject("AE Runtime").Click 210,112 @@ hightlight id_;_393296_;_script infofile_;_ZIP::ssf31.xml_;_
Window("Tipo de Documento").CaptureBitmap "C:\Automatización\COTA\Capturas\Documento.png", True
	Reporter.ReportEvent micPass, "DNI", "Funciona", "C:\Automatización\COTA\Capturas\Documento.png"

Window("Tipo de Documento").WinButton("&Seleccionar").Click
'DOCUMENTO
Window("Detalle de Cliente").WinEditor("Número de Documento:").Type  micDel 
Window("Detalle de Cliente").WinEditor("Número de Documento:").Type  DataTable("Documento", dtLocalSheet)
'TIPO IVA
Window("Detalle de Cliente").WinComboBox("Número de Documento:").Select DataTable("IVA", dtLocalSheet)

Window("Detalle de Cliente").WinButton("&?_2").Click @@ hightlight id_;_465034_;_script infofile_;_ZIP::ssf41.xml_;_

Window("Tipo de Actividad").Activate
Window("Tipo de Actividad").WinScrollBar("ScrollBar").Set 630
For i = 1 To 100
	Window("Tipo de Actividad").WinObject("AE Runtime").Click 188,29
	Opt = Window("Tipo de Actividad").WinEdit("Edit").GetVisibleText
	If Opt = "pASA DE FAMILIA" Then
		Window("Tipo de Actividad").CaptureBitmap "C:\Automatización\COTA\Capturas\IVA.png", True
			Reporter.ReportEvent micPass, "IVA", "Funciona", "C:\Automatización\COTA\Capturas\IVA.png"
			
		Window("Tipo de Actividad").WinButton("&Seleccionar").Click
		Exit For		
	End If
	Window("Tipo de Actividad").WinScrollBar("ScrollBar").PrevLine 1
Next
 @@ hightlight id_;_1181248_;_script infofile_;_ZIP::ssf159.xml_;_
 @@ hightlight id_;_1181248_;_script infofile_;_ZIP::ssf166.xml_;_
Window("Detalle de Cliente").WinButton("&Domicilio").Click @@ hightlight id_;_1185832_;_script infofile_;_ZIP::ssf174.xml_;_
Window("Ingresar Domicilio").Move 287,182 @@ hightlight id_;_1052270_;_script infofile_;_ZIP::ssf175.xml_;_
Window("Ingresar Domicilio").WinButton("&?").Click @@ hightlight id_;_984608_;_script infofile_;_ZIP::ssf176.xml_;_

Window("Seleccionar una Geografía").WinScrollBar("ScrollBar").Set 2600
For i = 1 To 100
	Window("Seleccionar una Geografía").WinObject("AE Runtime").Click 10,67
	Loc = Window("Seleccionar una Geografía").WinEdit("Edit").GetVisibleText

	If Loc = "Haedo" Then
		Window("Seleccionar una Geografía").CaptureBitmap "C:\Automatización\COTA\Capturas\Localidad.png", True
			Reporter.ReportEvent micPass, "Localidad", "Funciona", "C:\Automatización\COTA\Capturas\Localidad.png"

		Window("Seleccionar una Geografía").WinButton("&Seleccionar").Click
		Exit For		
	End If
	Window("Seleccionar una Geografía").WinScrollBar("ScrollBar").PrevLine 1
Next
 @@ hightlight id_;_329404_;_script infofile_;_ZIP::ssf207.xml_;_
 @@ hightlight id_;_525990_;_script infofile_;_ZIP::ssf208.xml_;_
Window("Ingresar Domicilio").WinObject("Código Postal:").Click 380,49 @@ hightlight id_;_656988_;_script infofile_;_ZIP::ssf286.xml_;_
Window("Ingresar Domicilio").WinEdit("Edit").Set  DataTable("Calle", dtLocalSheet)
Window("Ingresar Domicilio").WinObject("Código Postal:").Click 187,66 @@ hightlight id_;_656988_;_script infofile_;_ZIP::ssf289.xml_;_
Window("Ingresar Domicilio").WinEdit("Edit").Set  DataTable("Altura", dtLocalSheet)
Window("Ingresar Domicilio").WinObject("Código Postal:").Click 193,87 @@ hightlight id_;_656988_;_script infofile_;_ZIP::ssf291.xml_;_
Window("Ingresar Domicilio").WinButton("&Calcular Entrecalles").Check CheckPoint("&Calcular Entrecalles") @@ hightlight id_;_656994_;_script infofile_;_ZIP::ssf292.xml_;_
Window("Ingresar Domicilio").WinButton("&Calcular Entrecalles").Click @@ hightlight id_;_656994_;_script infofile_;_ZIP::ssf292.xml_;_
Window("Ingresar Domicilio").CaptureBitmap "C:\Automatización\COTA\Capturas\Direccion.png", True
	Reporter.ReportEvent micPass, "Dire", "Funciona", "C:\Automatización\COTA\Capturas\Direccion.png"


Window("Ingresar Domicilio").WinButton("Con&firmar").Click @@ hightlight id_;_656978_;_script infofile_;_ZIP::ssf293.xml_;_

Window("Detalle de Cliente").WinButton("Con&firmar").Click
'Window("Información").WinButton("&Bien").Click


Services.EndTransaction "Performance"