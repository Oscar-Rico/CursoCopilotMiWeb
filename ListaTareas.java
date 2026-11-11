import java.util.ArrayList;
import java.util.Scanner;

public class ListaTareas {
    private static final ArrayList<Tarea> tareas = new ArrayList<>();

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        boolean salir = false;

        while (!salir) {
            mostrarMenu();
            int opcion = leerEntero(entrada, "Elige una opcion: ");

            switch (opcion) {
                case 1:
                    agregarTarea(entrada);
                    break;
                case 2:
                    listarTareas();
                    break;
                case 3:
                    completarTarea(entrada);
                    break;
                case 4:
                    salir = true;
                    System.out.println("Hasta luego.");
                    break;
                default:
                    System.out.println("Opcion no valida. Elige un numero del 1 al 4.");
            }
        }

        entrada.close();
    }

    private static void mostrarMenu() {
        System.out.println("\n--- Lista de tareas ---");
        System.out.println("1. Anadir una tarea");
        System.out.println("2. Listar tareas");
        System.out.println("3. Marcar una tarea como completada");
        System.out.println("4. Salir");
    }

    private static void agregarTarea(Scanner entrada) {
        System.out.print("Escribe la tarea: ");
        String descripcion = entrada.nextLine().trim();

        if (descripcion.isEmpty()) {
            System.out.println("La tarea no puede estar vacia.");
            return;
        }

        tareas.add(new Tarea(descripcion));
        System.out.println("Tarea anadida.");
    }

    private static void listarTareas() {
        if (tareas.isEmpty()) {
            System.out.println("No hay tareas.");
            return;
        }

        System.out.println("\nTareas:");
        for (int i = 0; i < tareas.size(); i++) {
            Tarea tarea = tareas.get(i);
            String estado = tarea.completada ? "[Completada]" : "[Pendiente]";
            System.out.println((i + 1) + ". " + estado + " " + tarea.descripcion);
        }
    }

    private static void completarTarea(Scanner entrada) {
        if (tareas.isEmpty()) {
            System.out.println("No hay tareas para completar.");
            return;
        }

        listarTareas();
        int numero = leerEntero(entrada, "Numero de la tarea completada: ");
        if (numero < 1 || numero > tareas.size()) {
            System.out.println("No existe una tarea con ese numero.");
            return;
        }

        tareas.get(numero - 1).completada = true;
        System.out.println("Tarea marcada como completada.");
    }

    private static int leerEntero(Scanner entrada, String mensaje) {
        System.out.print(mensaje);
        String texto = entrada.nextLine().trim();

        try {
            return Integer.parseInt(texto);
        } catch (NumberFormatException e) {
            return -1;
        }
    }

    private static class Tarea {
        private final String descripcion;
        private boolean completada;

        private Tarea(String descripcion) {
            this.descripcion = descripcion;
            this.completada = false;
        }
    }
}
