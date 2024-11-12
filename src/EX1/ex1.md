## EX1 - Verificador de credencials

Anem a començar amb un exemple senzill on tu hauràs de crear des de zero una funció que verifiqui les credencials d'un usuari. Per a això, crearem una funció que accepti dos paràmetres: **nomUsuari** i **contrasenya** i aquesta funció haurà de retornar una promesa (la promesa de validar les credencials de l'usuari)

1. Crea una funció _verificarCredencials_ que accepti accepti dos paràmetres: **nomUsuari** i **contrasenya**. Aquesta funció haurà de retornar una promesa.

- Dins de la funció pots crear un array _usuarisAutoritzats_ amb els usuaris autoritzats i les seves contrasenyes en forma d'objecte amb nom i constrasenya:
  `({nom: 'usuari', contrasenya: 'contrasenya'})`

- Retorna la promesa fent servir un setTimeout de 2 segons. Si l'usuari i la contrasenya coincideixen amb algun dels usuaris autoritzats, la promesa s'ha de resoldre amb un missatge de benvinguda. En cas contrari, la promesa s'ha de rebutjar amb un missatge d'error.

- La funció de callback del setTimeout ha de ser una funció anònima i hauria de buscar al llarg de l'array d'usuaris autoritzats si l'usuari i la contrasenya coincideixen amb algun dels usuaris autoritzats.

2. Crear una funció _accedirZonaRestringida_ que accepti dos paràmetres: **nomUsuari** i **contrasenya**. Aquesta funció haurà de ferús de la lògica async/await per cridar a la funció anterior i mostrar el missatge de benvinguda o d'error segons correspongui.

3. Finalment crea una funció main que cridi a la funció _accedirZonaRestringida_ amb els paràmetres que vulguis per comprovar que funciona correctament.
