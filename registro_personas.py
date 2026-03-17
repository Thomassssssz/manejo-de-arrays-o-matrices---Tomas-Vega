personas = []

print("=== SISTEMA DE REGISTRO DE PERSONAS ===")

while True:
    print("\nIngrese los datos de una persona")

    nombre = input("Nombre: ")
    edad = int(input("Edad: "))
    nota = float(input("Nota: "))

    personas.append([nombre, edad, nota])

    while True:
        opcion = input("\n¿Desea agregar otra persona? (si / finalizar): ").lower()

        if opcion == "si" or opcion == "finalizar":
            break
        else:
            print("Opción inválida. Solo puede escribir 'si' o 'finalizar'.")

    if opcion == "finalizar":
        break


print("\n========== LISTA DE PERSONAS (ORDEN ORIGINAL) ==========")

for persona in personas:
    print("Nombre:", persona[0], "| Edad:", persona[1], "| Nota:", persona[2])

personas_ordenadas = sorted(personas, key=lambda x: x[2], reverse=True)

print("\n========== LISTA ORDENADA POR NOTA (MAYOR A MENOR) ==========")

for persona in personas_ordenadas:
    print("Nombre:", persona[0], "| Edad:", persona[1], "| Nota:", persona[2])

suma_notas = 0

for persona in personas:
    suma_notas += persona[2]

promedio = suma_notas / len(personas)

print("\n========== PROMEDIO GENERAL ==========")
print("Promedio de notas:", round(promedio, 2))