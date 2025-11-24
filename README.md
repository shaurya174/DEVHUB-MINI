
  <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
    <h1 class="text-4xl font-bold mb-4 text-blue-600">DevHub</h1>
    <p class="mb-6 text-gray-700">DevHub is a modern, responsive web application built using <strong>Node.js, Express, PostgreSQL, EJS, and Tailwind CSS</strong>. It allows users to create, edit, and delete posts with a clean and beautiful interface.</p>
    <h2 class="text-2xl font-semibold mb-3 text-blue-500">Features</h2>
    <ul class="list-disc list-inside mb-6 text-gray-700">
      <li>Create Post – Add new posts with a title and content.</li>
      <li>Read Posts – View all posts on the home page in a visually appealing layout.</li>
      <li>Update Post – Edit existing posts with live updates.</li>
      <li>Delete Post – Remove posts easily.</li>
      <li>Responsive Design – Works seamlessly on desktop, tablet, and mobile.</li>
      <li>Modern UI – Built with Tailwind CSS for a sleek look.</li>
      <li>Background Styling – Eye-catching static backgrounds for better UX.</li>
    </ul>
    <h2 class="text-2xl font-semibold mb-3 text-blue-500">Technologies Used</h2>
    <ul class="list-disc list-inside mb-6 text-gray-700">
      <li>Backend: Node.js, Express</li>
      <li>Frontend: EJS, Tailwind CSS</li>
      <li>Database: PostgreSQL</li>
      <li>Version Control: Git & GitHub</li>
      <li>Environment Variables: dotenv</li>
    </ul>
    <h2 class="text-2xl font-semibold mb-3 text-blue-500">Installation</h2>
    <ol class="list-decimal list-inside mb-6 text-gray-700">
      <li>Clone the repository:
        <pre><code>git clone &lt;your-repo-link&gt;
cd devhub</code></pre>
      </li>
      <li>Install dependencies:
        <pre><code>npm install</code></pre>
      </li>
      <li>Setup environment variables in a <code>.env</code> file:
        <pre><code>DATABASE_URL=your_postgres_connection_string
PORT=3000</code></pre>
      </li>
      <li>Run the app:
        <pre><code>npm start</code></pre>
      </li>
      <li>Open your browser: <code>http://localhost:3000</code></li>
    </ol>
    <h2 class="text-2xl font-semibold mb-3 text-blue-500">Database Setup</h2>
    <pre><code>CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);</code></pre>
    <h2 class="text-2xl font-semibold mb-3 text-blue-500">Folder Structure</h2>
    <pre><code>
DevHub/
├─ public/          # CSS, images, JS files
├─ routes/          # Express routes
├─ views/           # EJS templates
├─ .env             # Environment variables
├─ server.js        # Main server file
├─ package.json
└─ README.md
</code></pre>
    <h2 class="text-2xl font-semibold mb-3 text-blue-500">Future Improvements</h2>
    <ul class="list-disc list-inside mb-6 text-gray-700">
      <li>User authentication (login/signup)</li>
      <li>Categories or tags for posts</li>
      <li>Search functionality</li>
      <li>Pagination for posts</li>
      <li>Dark mode toggle</li>
    </ul>
    <h2 class="text-2xl font-semibold mb-3 text-blue-500">Author</h2>
    <p class="text-gray-700">Shaurya – Aspiring Software Developer | FAANG Internship Seeker</p>
  </div>
</body>
</html>
