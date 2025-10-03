//This program implements Dijkstra's algorithm to find the shortest pathin a weighted graph. It takes user input for number of vertices, edges,
 and weights, then computes shortest paths from a chosen source node.
 

import java.util.*;

class Graph {
    private int vertices;
    private List<List<Node>> adj;

    static class Node implements Comparable<Node> {
        int vertex, weight;

        Node(int v, int w) {
            vertex = v;
            weight = w;
        }

        public int compareTo(Node other) {
            return Integer.compare(this.weight, other.weight);
        }
    }

    public Graph(int v) {
        vertices = v;
        adj = new ArrayList<>();
        for (int i = 0; i < v; i++) {
            adj.add(new ArrayList<>());
        }
    }

    public void addEdge(int u, int v, int w) {
        adj.get(u).add(new Node(v, w));
        adj.get(v).add(new Node(u, w)); // undirected graph
    }

    public void dijkstra(int source) {
        int[] dist = new int[vertices];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[source] = 0;

        PriorityQueue<Node> pq = new PriorityQueue<>();
        pq.add(new Node(source, 0));

        while (!pq.isEmpty()) {
            Node node = pq.poll();
            int u = node.vertex;

            for (Node neighbor : adj.get(u)) {
                int v = neighbor.vertex;
                int weight = neighbor.weight;

                if (dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                    pq.add(new Node(v, dist[v]));
                }
            }
        }

        System.out.println("\nShortest distances from source " + source + ":");
        for (int i = 0; i < vertices; i++) {
            System.out.println("Vertex " + i + " -> " + dist[i]);
        }
    }
}

public class GraphShortestPath {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of vertices: ");
        int v = sc.nextInt();

        Graph g = new Graph(v);

        System.out.print("Enter number of edges: ");
        int e = sc.nextInt();

        System.out.println("Enter edges (u v w):");
        for (int i = 0; i < e; i++) {
            int u = sc.nextInt();
            int vv = sc.nextInt();
            int w = sc.nextInt();
            g.addEdge(u, vv, w);
        }

        System.out.print("Enter source vertex: ");
        int source = sc.nextInt();

        g.dijkstra(source);

        sc.close();
    }
}
