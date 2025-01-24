import { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloudUpload } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

const DragFileComponent = ({
  onFilesSelected,
  width,
  height,
}) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      if (files.length + newFiles.length <= 10) { 
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      } else {
        toast("You can only upload a maximum of 10 files."); 
      }
    }
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  useEffect(() => {
    onFilesSelected(files);
  }, [files, onFilesSelected]);

  return (
    <section style={{ ...styles.section, width, height }}>
      <div
        style={{
          ...styles.dropArea,
          borderColor: files.length > 0 ? '#6dc24b' : undefined,
        }}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <AiOutlineCloudUpload style={{ fontSize: '36px', marginRight: '1rem' }} />
            <div>
              <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Drag and drop your files here</p>
              <p style={{ margin: 0, fontSize: '16px' }}>Limit 15MB per file. Supported files: .mid, .midi</p>
            </div>
          </div>
          <input
            type="file"
            hidden
            id="browse"
            onChange={handleFileChange}
            accept=".mid,.midi"
            multiple
          />
          <Button variant="contained" onClick={() => document.getElementById('browse').click()}>Browse files</Button>
        </>

        {files.length > 0 && (
          <div style={styles.selectedFiles}>
            <div style={{ width: '100%', height: '100%' }}>
              {files.map((file, index) => (
                <div style={styles.fileItem} key={index}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
                    <p style={styles.fileName}>{file.name}</p>
                  </div>
                  <div style={{ cursor: 'pointer' }}>
                    <MdClear onClick={() => handleRemoveFile(index)} style={{ fontSize: '18px', color: '#888' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {files.length > 0 && (
          <div style={styles.selectedCount}>
            <AiOutlineCheckCircle style={styles.checkIcon} />
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>{files.length} file(s) selected</p>
          </div>
        )}
      </div>
    </section>
  );
};


const styles = {
  section: {
    background: '#fff',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
  },
  dropArea: {
    border: '2px dashed #4282fe',
    backgroundColor: '#f4fbff',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem 1rem',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: 'var(--primary-color)',
  },
  fileItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
  },
  fileName: {
    margin: 0,
    fontSize: '14px',
    color: '#333',
  },
  selectedFiles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    width: '100%',
  },
  selectedCount: {
    display: 'flex',
    alignItems: 'center',
    color: '#6dc24b',
  },
  checkIcon: {
    color: "#6DC24B",
    marginRight: 1,
  },
};


export default DragFileComponent;